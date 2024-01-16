import { Category } from '../entity/categories';
import { Product } from '../entity/product';
import { Order } from '../entity/order';
import { getCategoryRepository, getProductRepository, getOrderRepository } from '../../api/service';

const products: Product[] = [];

export async function createSeedData() {
  const categoryNames = ['מוצרי ניקיון', 'גבינות', 'ירקות ופירות', 'בשר ודגים', 'מאפים'];

  const categoryRepository = await getCategoryRepository();
  const productRepository = await getProductRepository();
  const orderRepository = await getOrderRepository();

  // Check and create new categories
  const existingCategories = await categoryRepository.find();
  if (existingCategories.length) {
    console.log('Categories and/or Products already exist in the database.');
    return;
  }

  const categories = categoryNames.map((name) => {
    const category = new Category();
    category.name = name;
    return category;
  });

  const orders: Order[] = []

  try {
    await categoryRepository.save(categories);

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}
