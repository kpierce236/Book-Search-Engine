# Book Search Engine

## Description

The Book Search Engine is a full-stack web application built with the MERN stack, enabling users to search for books using the Google Books API, save their favorite books to their account, and remove books from their saved list. Originally constructed with a RESTful API, this project involves refactoring the backend to utilize a GraphQL API with Apollo Server while maintaining the existing functionality of the frontend, which is built with React. The backend of the application is powered by Node.js/Express.js, MongoDB is used as the database, and authentication is handled with JWT tokens.

## Motivation

The Book Search Engine project is driven by the need to provide an intuitive platform for users to discover new books to read and maintain a personalized list of books they are interested in. By integrating the Google Books API and enabling user authentication, this application aims to enhance the book searching and saving experience for avid readers.

## Problem Solved

By creating the Book Search Engine, users can overcome the challenge of finding a convenient and efficient way to explore a vast library of books available through the Google Books API. Additionally, the ability to save and manage a personal collection of books addresses the need for users to keep track of their reading interests and preferences in a centralized platform.

## Key Features

- User authentication and authorization for secure access to the platform.
- Seamless search functionality powered by the Google Books API.
- Ability to save favorite books to user accounts and remove them as desired.
- Intuitive user interface for efficient navigation and interaction.
- GraphQL API implementation for optimized data fetching and manipulation.

## Getting Started

To set up the Tech Blog on your local machine, follow these steps:

1. Clone the repository:

```bash
git clone <repository_url>

```

2. Navigate to the project directory:

```bash
cd Book-Search-Engine

```

3. Install dependencies:

```bash
npm run install

```

4. Set up environment variables:
- Create a `.env` file in the project root.
- Add the following variables to the `.env` file:
  ```
  MONGODB_URI=your_database_name
  SECRET_SESSION= your_jwt_session_secret
  ```

5. Build the client:

```bash
npm run build

```

6. Start the server:

```bash
npm run start

```

## Usage

The Book Search Engine enables users to:
- Search for books using keywords, titles, authors, or categories.
- View detailed information about each book, including title, author, description, and image.
- Save favorite books to their account for future reference.
- Remove saved books from their list if desired.

## Demo

Check out the application functionality in action: 

*Click the gif to see the full video* and **[HERE](https://book-search-engine-rjvv.onrender.com/) for deployed app**

[![Demo of the Application](images/demo.gif)](https://drive.google.com/file/d/1jkxg8xcyCRwB-q9hc2f3zYhfnYz6Xs98/view)


## Credits

### Documentation

- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [GraphQL](https://graphql.org/)


### Dependencies

- [Apollo Client](https://www.apollographql.com/docs/react/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mongoose](https://www.npmjs.com/package/mongoose)

## License

Please refer to the license in the repository.

