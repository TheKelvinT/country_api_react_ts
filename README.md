# Country Showcase Web Application - <a href="https://country-worldwide.vercel.app/">Deployed Site</a>

![Country Showcase Light Mode](https://i.ibb.co/F52ngrr/light.png)


## Introduction

The Country Showcase Web Application is a simple and intuitive web application that allows users to explore information about different countries. The application fetches country data from the [REST Countries API](https://restcountries.com/v3.1/all) and provides a user-friendly interface to view details such as country names, continents, capitals, population, time zones, and more. The project is built using React, Tailwind CSS, and Ant Design (antd) for styling, providing a smooth and responsive user experience.



## Code Structure

The codebase is organized with a clear and maintainable structure. Here's an overview of the project's code structure:
```
|-- src
| |-- assets
| | |-- icons
| | |-- images
| |
| |-- components
| | |-- custom icons
| | |-- navbar
| | | |-- Mode.tsx
| | | |-- Navbar.tsx
| | |-- SingleCard.tsx
| | |-- SearchBar.tsx
| | |-- ScrollToTop.tsx
| | |-- Pagination.tsx
| | |-- Loading.tsx
| | |-- ListView.tsx
| | |-- Footer.tsx
| | |-- CustomSelect.tsx
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
| | |-- mode.ts
| |
| |-- api
| | |-- api.ts
| |
| |-- App.tsx
| |-- index.tsx
| |-- index.css
main.tsx
|
|-- README.md
|-- index.html
|-- package.json
|-- tsconfig.json
|-- ...
```

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

- Search Functionality: Users can easily search for specific countries using the search bar, allowing for quick access to country details.
  
- Versatile View Options: Users can seamlessly switch between Card and List views, accompanied by convenient pagination, making it easier to explore country data.
  
- Discover Recommended Countries: The Country detail page includes a curated section featuring other recommended countries, enabling users to discover related destinations and broaden their exploration.

- Filter Functionality: Users can filter countries by specific criteria, such as continent, population, and more, to find countries that match their preferences.


## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

Installation
A step-by-step guide on how to install and set up the project. Include any dependencies, required libraries, or tools needed to run the project.

Example:

To install this project, follow these steps:

1. Clone this repository.
2. Install the required packages using `npm install`.
3. Run the project using `npm start`.
4. Application runs on `http://127.0.0.1:5173/`.



Thank you for checking out the Country Showcase Web Application! If you have any questions or feedback, feel free to reach out to us. Happy exploring!
