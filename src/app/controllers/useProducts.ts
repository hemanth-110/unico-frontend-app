import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Product } from '../modals/product';

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      return data;
    },
  });
};