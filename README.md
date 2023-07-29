# Country Showcase Web Application

![Country Showcase]([/path/to/screenshot.png](https://ibb.co/VgR3211))

## Introduction

The Country Showcase Web Application is a simple and intuitive web application that allows users to explore information about different countries. The application fetches country data from the [REST Countries API](https://restcountries.com/v3.1/all) and provides a user-friendly interface to view details such as country names, continents, capitals, population, time zones, and more. The project is built using React, Tailwind CSS, and Ant Design (antd) for styling, providing a smooth and responsive user experience.

## Code Structure

The codebase is organized with a clear and maintainable structure. Here's an overview of the project's code structure:

Sure, here's the README.md content in markdown format with code blocks:

markdown
Copy code
# Country Showcase Web Application

![Country Showcase](/path/to/screenshot.png)

## Introduction

The Country Showcase Web Application is a simple and intuitive web application that allows users to explore information about different countries. The application fetches country data from the [REST Countries API](https://restcountries.com/v3.1/all) and provides a user-friendly interface to view details such as country names, continents, capitals, population, time zones, and more. The project is built using React, Tailwind CSS, and Ant Design (antd) for styling, providing a smooth and responsive user experience.

## Code Structure

The codebase is organized with a clear and maintainable structure. Here's an overview of the project's code structure:
```
|-- public
| |-- index.html
|
|-- src
| |-- assets
| | |-- icons
| | |-- images
| |
| |-- components
| | |-- Loading.tsx
| | |-- Navbar.tsx
| | |-- SingleCard.tsx
| | |-- ...
| |
| |-- pages
| | |-- Countries.tsx
| | |-- Country.tsx
| | |-- ...
| |
| |-- types
| | |-- CountryData.ts
| |
| |-- utils
| | |-- utils.ts
| |
| |-- api
| | |-- api.ts
| |
| |-- App.tsx
| |-- index.tsx
| |-- styles.css
|
|-- README.md
|-- package.json
|-- tsconfig.json
|-- ...
```

- **`public`**: This directory contains the `index.html` file, the entry point for the application.

- **`src`**: The main source directory that contains all the React components, styles, and utilities.

  - **`assets`**: Contains subdirectories for icons and images used in the application.

  - **`components`**: Houses reusable components used throughout the application. Examples include `Loading`, `Navbar`, `SingleCard`, and more.

  - **`pages`**: Contains the different pages or views of the application. For example, `Countries` and `Country` components are present here, representing the list of countries and individual country details, respectively.

  - **`types`**: Contains TypeScript type definitions used in the application, such as `CountryData` to represent country information.

  - **`utils`**: Holds utility functions or helper functions used in the application. For example, the `shuffleArray` function is present in `utils.ts`.

  - **`api`**: Contains functions to interact with external APIs. The `api.ts` file includes functions to fetch country data and shuffle countries using the REST Countries API.

  - **`App.tsx`**: The main component that defines the application's routes and layout.

  - **`index.tsx`**: The entry point of the application, where it renders the `App` component into the root HTML element.

  - **`styles.css`**: Contains global styles for the application.

## Library and Packages Used

The development of this project was made possible with the following libraries and packages:

- React: A popular JavaScript library for building user interfaces.
- Vite: A fast build tool for modern web development.
- TypeScript: A strongly typed superset of JavaScript, providing better code quality and IDE support.
- Tailwind CSS: A utility-first CSS framework for rapidly styling the application.
- Ant Design (antd): A React UI library that provides ready-to-use components for building interfaces.

## Features

The Country Showcase Web Application offers several exciting features:

- Dark and Light Mode: Users can toggle between dark and light mode for better readability and a personalized experience.

- List and Card View: Users can switch between list and card view to explore country information in their preferred layout.

- Search Functionality: Users can easily search for specific countries using the search bar, allowing for quick access to country details.

- Filter Functionality: Users can filter countries by specific criteria, such as continent, population, and more, to find countries that match their preferences.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git


Install dependencies:

bash
Copy code
cd your-repo
npm install
Run the development server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000 to see the application.

Feel free to explore the Country Showcase Web Application and make the most of its exciting features!

License
This project is licensed under the MIT License. See the LICENSE file for details.

Thank you for checking out the Country Showcase Web Application! If you have any questions or feedback, feel free to reach out to us. Happy exploring!
