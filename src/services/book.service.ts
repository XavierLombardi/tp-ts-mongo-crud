import { Book } from '../models/book.model';

// Crear libro
export const createBook = async (data: any) => {
  const book = new Book(data);
  return await book.save();
};

// Obtener todos los libros
export const getAllBooks = async () => {
  return await Book.find();
};

// Obtener libro por ID
export const getBookById = async (id: string) => {
  return await Book.findById(id);
};

// Actualizar libro por ID
export const updateBook = async (id: string, data: any) => {
  return await Book.findByIdAndUpdate(id, data, { new: true });
};

// Eliminar libro por ID
export const deleteBook = async (id: string) => {
  return await Book.findByIdAndDelete(id);
};
