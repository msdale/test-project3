import React from 'react';
import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleReview from './pages/SingleReview';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Maidlist from './pages/Maidlist';
import MaidInfo from './pages/MaidInfo';
import MaidDash from './pages/MaidDashboard';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
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
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/signup" element={<Signup/>} />
              {/* removed params in profile */}
              <Route exact path="/profile" element={<Profile/>} />
              <Route exact path="/review/:id" element={<SingleReview/>} />
              <Route exact path="/maidlist" element={<Maidlist/>} />
              <Route exact path="/maidinfo" element={<MaidInfo/>} />
              <Route exact path="/maiddash" element={<MaidDash/>} />
              <Route exact path="/nomatch" element={<NoMatch/>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
