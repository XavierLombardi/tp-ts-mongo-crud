import { connectDB } from './config/database';
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
} from './services/book.service';

const main = async () => {
  await connectDB();

  // Crear libro
  const nuevoLibro = await createBook({
    title: 'Cien Años de Soledad',
    author: 'Gabriel García Márquez',
    year: 1967,
    genre: 'Realismo mágico'
  });
  console.log('📕 Libro creado:', nuevoLibro);

  // Obtener todos
  const libros = await getAllBooks();
  console.log('📚 Todos los libros:', libros);

  // Obtener uno
  const libro = await getBookById(nuevoLibro._id);
  console.log('🔍 Libro por ID:', libro);

  // Actualizar
  const actualizado = await updateBook(nuevoLibro._id, { year: 1968 });
  console.log('✏️ Libro actualizado:', actualizado);

  // Eliminar
  await deleteBook(nuevoLibro._id);
  console.log('🗑️ Libro eliminado');
};

main();
