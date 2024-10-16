import { useEffect, useState } from 'react';
import { Alert } from '../Alert/Alert';
import { BookList } from '../BookList/BookList';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import LoginForm from '../LoginForm/LoginForm';
import Product from '../Product/Product';
import SearchBar from '../SearchBar/SearchBar';
import { UserMenu } from '../UserMenu/UserMenu';
import SelectCoffee from '../SelectCoffee/SelectCoffee';
import Checkbox from '../Checkbox/Checkbox';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import axios from 'axios';
import ArticleList from '../ArticleList/ArticleList';
import { Audio } from 'react-loader-spinner';
import { fetchArticlesWithTopic } from '../../articles-api';
import SearchForm from '../SearchForm/SearchForm';

// const favouriteBooks = [
//   { id: 'id-1', name: 'JS for beginners' },
//   { id: 'id-2', name: 'React basics' },
//   { id: 'id-3', name: 'React Router overview' },
// ];

export default function App() {
  // function handleLogin(userData) {
  //   console.log('userData: ', userData);
  // }

  // const [lang, setLang] = useState('uk');

  // const [coffeeSize, setCoffeeSize] = useState('md');

  // const [hasAccepted, setHasAccepted] = useState(false);

  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // async function handleSearch(topic) {
  //   try {
  //     setArticles([]);
  //     setError(false);
  //     setLoading(true);
  //     const data = await fetchArticlesWithTopic(topic);
  //     setArticles(data);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  return (
    <div>
      {/* <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />

      <div>
        <h1>Books of the week</h1>
        <BookList books={favouriteBooks} />
      </div>

      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>

      <UserMenu name="Mykhailo Hozhyi" />

      <LoginForm onLogin={handleLogin} />

      <SearchBar />

      <LangSwitcher value={lang} onSelect={setLang} />

      <SelectCoffee value={coffeeSize} onChecked={setCoffeeSize} />

      <Checkbox checked={hasAccepted} onChecked={setHasAccepted} /> 

      <FeedbackForm />

      <div>
        <h1>Latest articles</h1>
        <SearchForm onSearch={handleSearch} />
        {loading && <Audio />}
        {error && (
          <p>Whoops, something went wrong! Please try reloading this page!</p>
        )}
        {articles.length > 0 && <ArticleList items={articles} />}
      </div> */}
    </div>
  );
}
