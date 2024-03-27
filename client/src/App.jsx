import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


// Define the base URI for the GraphQL API
let uri;
if (process.env.NODE_ENV === 'production') {
  uri = `${window.location.origin}/graphql`; // Use relative path in production
} else {
  uri = 'http://localhost:3001/graphql'; // Use localhost in development
}

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri,
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
   </ApolloProvider>
  );
}

export default App;
