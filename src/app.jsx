// Importa la función useState de la biblioteca React
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// Define el componente funcional App
function App() {
  // Declara el estado books y la función setBooks utilizando el hook useState, inicializando books como undefined
  const [books, setBooks] = useState(undefined);

  // Define la función handlePopulateClick que se ejecuta cuando se hace clic en el botón "Populate books variable"
  function handlePopulateClick() {
    // Simula datos de libros y los asigna a la variable dummyBooks
    const dummyBooks = [
      {
        id: 1,
        title: "Introduction to Algorithms",
        authors: ["Thomas H. Cormen", "Charles E. Leiserson", "Ronald L. Rivest", "Clifford Stein"],
        cover: "https://cdn.bookey.app/files/publish-book/Introduction_to_Algorithms_7796402.jpg",
      },
      {
        id: 2,
        title: "The Art of Computing Programming",
        authors: ["Donald Knuth"],
        cover: "https://m.media-amazon.com/images/I/61tIrzRmFdL._SY466_.jpg",
      },
      {
        id: 3,
        title: "Refactoring: Improving the Design of Existing Code",
        authors: ["Kent Beck", "Martin Fowler"],
        cover: "https://learning.oreilly.com/library/cover/0201485672/250w/",
      },
    ];

    // Establece el estado de books con los datos de dummyBooks
    setBooks(dummyBooks);
  }

  // Define la función handleRemoveClick que se ejecuta cuando se hace clic en el botón "Remove books variable"
  function handleRemoveClick() {
    // Establece el estado de books como undefined, eliminando los datos de los libros
    setBooks(undefined);
  }

  // Devuelve la estructura JSX del componente App
  return (
    <div>
      <h1>Alumno: Mauricio Alejandro Serrano García</h1>
      <h2>Ingenieria en sistemas computacionales</h2>
      <h2>N.C: 20460545</h2>
      <h2>jueves 21 de marzo del 2024</h2>
      
      {/* Botón para poblar el estado de books con datos de libros */}
      <button onClick={handlePopulateClick}>Populate books variable</button>
      {/* Botón para eliminar los datos de libros */}
      <button onClick={handleRemoveClick}>Remove books variable</button>
      <div>
        {/* Verifica si hay libros en el estado books y si la longitud de la matriz de libros es mayor que cero */}
        {books !== undefined && books.length > 0 ? (
          <div>
            {/* Encabezado de la lista de libros */}
            <h2>Lista de Libros</h2>
            {/* Contenedor de libros con estilo de disposición en columna */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Mapea cada libro en la variable books y crea un div para mostrar la información del libro */}
              {books.map((book) => (
                <div key={book.id}>
                  {/* Imagen del libro con estilo para un tamaño fijo de 150x150 */}
                  <img src={book.cover} alt={book.title} style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                  {/* Título y autores del libro */}
                  <div>
                    <p><strong>Título:</strong> {book.title}</p>
                    <p><strong>Autores:</strong> {book.authors.join(", ")}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

// Exporta el componente App para que pueda ser utilizado en otros archivos
export default App;
