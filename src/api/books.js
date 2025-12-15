import axios from 'axios';
import { API_BASE_URL, ENDPOINTS } from '../constants/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getAllBooks = async () => {
  try {
    const response = await api.get(ENDPOINTS.BOOKS);
    return response.data;
  } catch (error) {
    console.error('Error al obtener libros:', error);
    throw error;
  }
};

export const getBooksByYear = async (year) => {
  try {
    const response = await api.get(ENDPOINTS.BOOKS, {
      params: { Año: year },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener libros por año:', error);
    throw error;
  }
};

export const getBooksByCategory = async (category) => {
  try {
    const response = await api.get(ENDPOINTS.BOOKS, {
      params: { categoria: category },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener libros por categoría:', error);
    throw error;
  }
};

export const getBookById = async (id) => {
  try {
    const response = await api.get(ENDPOINTS.BOOK_BY_ID(id));
    return response.data;
  } catch (error) {
    console.error('Error al obtener libro por ID:', error);
    throw error;
  }
};

export const addToCart = async (book) => {
  try {
    const response = await api.post(ENDPOINTS.ADD_TO_CART, {
      nombre: book.nombre,
      autor: book.autor,
      votos: book.votos,
      imagen: book.imagen,
      url: book.url,
      categoria: book.categoria,
      año: book.año,
    });
    return response.data;
  } catch (error) {
    console.error('Error al agregar libro al carrito:', error);
    throw error;
  }
};
