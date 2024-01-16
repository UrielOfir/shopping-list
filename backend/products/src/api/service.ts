import { Repository } from 'typeorm';
import AppDataSource from '../typeorm';
import { Product } from '../typeorm/entity/product';
import { Category } from '../typeorm/entity/categories';

const getCategoryRepository = (): Repository<Category> => {
  return AppDataSource.getRepository(Category);
};

const getProductRepository = (): Repository<Product> => {
  return AppDataSource.getRepository(Product);
};

export const getCategories = async (): Promise<Category[]> => {
  const categoryRepository = getCategoryRepository();
  return categoryRepository.find();
};

export const getProductsByCategory = async (categoryId: string): Promise<Product[]> => {
  const productRepository = getProductRepository();
  return productRepository.find({
    where: { category: { categoryId } },
    relations: ['category'],
  });
};

export const getProductById = async (productId: string): Promise<Product | null> => {
  const productRepository = getProductRepository();
  return productRepository.findOne({
    where: { productId },
  });
};
