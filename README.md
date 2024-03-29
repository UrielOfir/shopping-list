# Shopping List Application

## Description

This project is a simple shopping list application built with React, Vite, and Material-UI. It allows users to add items to a shopping list, categorize them, and view the total number of items.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)
- [Dotnet](https://dotnet.microsoft.com/en-us/download)
- [Docker](https://docs.docker.com/engine/install/)

## Installation

To set up this project on your local machine, follow these steps:

1. **Clone the Repository**

   First, clone the project repository to your local machine using Git:

   ```bash
   git clone https://github.com/UrielOfir/shopping-list.git
   cd shopping-list
   ```

2. **Run the DB**
   ```bash
   sudo docker-compose up -d
   ```

3. **Install products backend Dependencies**

   Navigate to the project products backend directory (backend/products) and install the required dependencies:
   
   ```bash
   cd backend/products
   npm install
   ```

4. **Run the products backend Application**

   Once the dependencies are installed, you can start the products backend application:
   
   ```bash
   npm run dev
   ```

5. **Run the orders backend Application**

   Once the dependencies are installed, you can start the  orders backend application:
   
   ```bash
   cd backend/orders
   dotnet run
   ```

5. **Install frontend Dependencies**

   Navigate to the project frontend directory and install the required dependencies:
   
   ```bash
   npm install
   ```

6. **Run the frontend Application**

   Once the dependencies are installed, you can start the frontend application:
   
   ```bash
   npm run dev
   ```

This will start the development server. Open your browser and go to http://localhost:5173 to view the application.

## Usage
The application has a simple interface:

- **Add Item Form**: Use this form to add new items to the shopping list. Enter the item name and select a category before clicking the "Add Item" button.
- **Shopping List**: View the list of added items along with their categories.
Total Items Display: Shows the total number of items in the shopping list.

## License
MIT License
