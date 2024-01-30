import { Category } from '../entity/categories';
import { Product } from '../entity/product';
import { getCategoryRepository, getProductRepository } from '../../api/service';

const products = [
  {
    name: 'All-Purpose Cleaner',
    description: 'Effective on all surfaces',
    price: 5.99,
    categoryIndex: 0,
  }
];

export async function createSeedData() {
  const categoryNames = ['מוצרי ניקיון', 'גבינות', 'ירקות ופירות', 'בשר ודגים', 'מאפים'];

  const categoryRepository = await getCategoryRepository();
  const productRepository = await getProductRepository();
  // Check and create new categories
  const existingCategories = await categoryRepository.find();
  const existingProducts = await productRepository.find();
  if (existingCategories.length || existingProducts.length) {
    console.log('Categories and/or Products already exist in the database.');
    return;
  }

  const categories = categoryNames.map((name) => {
    const category = new Category();
    category.name = name;
    return category;
  });

  const productEntities = products.map((productData) => {
    const product = new Product();
    product.name = productData.name;
    product.description = productData.description;
    product.price = productData.price;
    product.category = categories[productData.categoryIndex];
    return product;
  });

  try {
    // Initialize the DataSource before running the seeding script

    // Save the categories to the database

    categoryRepository.save(categories);

    // Save the products to the database

    await productRepository.save(productEntities);

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}