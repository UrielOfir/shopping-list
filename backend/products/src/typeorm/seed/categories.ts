import AppDataSource from '..';
import { Category } from '../entity/categories';
import { Product } from '../entity/product';

const products = [
  {
    name: 'All-Purpose Cleaner',
    description: 'Effective on all surfaces',
    price: 5.99,
    categoryIndex: 0,
  },
  {
    name: 'Window Cleaner',
    description: 'Streak-free shine',
    price: 4.5,
    categoryIndex: 0,
  },
  {
    name: 'Floor Polish',
    description: 'Long-lasting gloss',
    price: 8.25,
    categoryIndex: 0,
  },
  {
    name: 'Bathroom Disinfectant',
    description: 'Kills 99.9% of germs',
    price: 6.75,
    categoryIndex: 0,
  },
  {
    name: 'Dish Soap',
    description: 'Gentle on hands, tough on grease',
    price: 3.99,
    categoryIndex: 0,
  },
  {
    name: 'Feta Cheese',
    description: 'Crumble over salads',
    price: 2.99,
    categoryIndex: 1,
  },
  {
    name: 'Cheddar Cheese',
    description: 'Rich and smooth aged cheddar',
    price: 4.5,
    categoryIndex: 1,
  },
  {
    name: 'Mozzarella Cheese',
    description: 'Perfect for pizzas',
    price: 3.25,
    categoryIndex: 1,
  },
  {
    name: 'Gouda Cheese',
    description: 'Sweet and creamy',
    price: 5.75,
    categoryIndex: 1,
  },
  {
    name: 'Parmesan Cheese',
    description: 'Grated for pasta dishes',
    price: 6.99,
    categoryIndex: 1,
  },
  {
    name: 'Apples',
    description: 'Crisp and juicy',
    price: 1.99,
    categoryIndex: 2,
  },
  {
    name: 'Oranges',
    description: 'Rich in Vitamin C',
    price: 2.5,
    categoryIndex: 2,
  },
  {
    name: 'Lettuce',
    description: 'Fresh green leaves',
    price: 1.25,
    categoryIndex: 2,
  },
  {
    name: 'Tomatoes',
    description: 'Ripe and flavorful',
    price: 2.75,
    categoryIndex: 2,
  },
  {
    name: 'Cucumbers',
    description: 'Crunchy and refreshing',
    price: 1.99,
    categoryIndex: 2,
  },
  {
    name: 'Salmon Fillet',
    description: 'Fresh and tender',
    price: 10.99,
    categoryIndex: 3,
  },
  {
    name: 'Chicken Breast',
    description: 'Lean and versatile',
    price: 7.5,
    categoryIndex: 3,
  },
  {
    name: 'Ground Beef',
    description: 'Perfect for burgers',
    price: 8.25,
    categoryIndex: 3,
  },
  {
    name: 'Pork Chops',
    description: 'Juicy and flavorful',
    price: 9.75,
    categoryIndex: 3,
  },
  {
    name: 'Tilapia',
    description: 'Mild and flaky',
    price: 6.99,
    categoryIndex: 3,
  },
  {
    name: 'Sourdough Bread',
    description: 'Crusty and tangy',
    price: 3.99,
    categoryIndex: 4,
  },
  {
    name: 'Croissants',
    description: 'Buttery and flaky',
    price: 4.5,
    categoryIndex: 4,
  },
  {
    name: 'Chocolate Cake',
    description: 'Rich and moist',
    price: 5.25,
    categoryIndex: 4,
  },
  {
    name: 'Bagels',
    description: 'Chewy and delicious',
    price: 2.75,
    categoryIndex: 4,
  },
  {
    name: 'Apple Pie',
    description: 'Homemade style with a flaky crust',
    price: 6.99,
    categoryIndex: 4,
  },
];

async function createSeedData() {
  const categoryNames = ['מוצרי ניקיון', 'גבינות', 'ירקות ופירות', 'בשר ודגים', 'מאפים'];
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
    await AppDataSource.manager.save(categories);

    // Save the products to the database
    await AppDataSource.manager.save(productEntities);

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the DataSource connection when done
    await AppDataSource.destroy();
  }
}

createSeedData();
