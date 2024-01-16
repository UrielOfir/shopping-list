import AppDataSource from '..';
import { Category } from '../entity/categories';

async function createCategories() {
  const categoryNames = ['מוצרי ניקיון', 'גבינות', 'ירקות ופירות', 'בשר ודגים', 'מאפים'];
  const categories = categoryNames.map((name) => {
    const category = new Category();
    category.name = name;
    return category;
  });

  try {
    // Initialize the DataSource before running the seeding script
    await AppDataSource.initialize();

    // Save the categories to the database
    await AppDataSource.manager.save(categories);

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the DataSource connection when done
    await AppDataSource.close();
  }
}

createCategories();
