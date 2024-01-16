import {OrderData} from "../components/OrderForm.tsx";

export const fetchCategoriesFromServer = async () => {
    const response = await fetch('http://localhost:3000/api/category');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const categories = await response.json();
    return categories;
};

export const addOrderToServer = async (form: OrderData ) => {
    const response = await fetch('http://localhost:5119/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response;
};