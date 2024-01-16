export const fetchCategoriesFromServer = async () => {
    const response = await fetch('http://localhost:3000/api/category');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const categories =  await response.json();
    return categories;
  };