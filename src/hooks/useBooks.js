import { useEffect, useState } from 'react';
import { getAllBooks, getBooksByCategory, getBooksByYear } from '../api/books';

export const useBooks = (filters = {}) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, [filters.year, filters.category]);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);

      let data;
      if (filters.year) {
        data = await getBooksByYear(filters.year);
      } else if (filters.category) {
        data = await getBooksByCategory(filters.category);
      } else {
        data = await getAllBooks();
      }

      setBooks(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching books:', err);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchBooks();
  };

  return { books, loading, error, refetch };
};
