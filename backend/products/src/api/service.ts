import { DataSource, Repository } from 'typeorm';
import AppDataSource from '../typeorm';
import { Product } from '../typeorm/entity/product';
import { Category } from '../typeorm/entity/categories';

export const initializeSource = async (): Promise<DataSource> => {
  await AppDataSource.initialize();
  return AppDataSource;
};

export const getCategoryRepository = async (): Promise<Repository<Category>> => {
  // const source = await initializeSource();
  return AppDataSource.getRepository(Category);
};

export const getProductRepository = async (): Promise<Repository<Product>> => {
  // const source = await initializeSource();

  return AppDataSource.getRepository(Product);
};

export const getCategories = async (): Promise<Category[]> => {
  const categoryRepository = await getCategoryRepository();
  return categoryRepository.find();
};

export const getProductsByCategory = async (categoryId: string): Promise<Product[]> => {
  const productRepository = await getProductRepository();
  return productRepository.find({
    where: { category: { categoryId } },
    relations: ['category'],
  });
};

export const getProductById = async (productId: string): Promise<Product | null> => {
  const productRepository = await getProductRepository();
  return productRepository.findOne({
    where: { productId },
  });
};
