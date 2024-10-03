import { useState } from 'react';
import { Alert } from '../Alert/Alert';
import { BookList } from '../BookList/BookList';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import LoginForm from '../LoginForm/LoginForm';
import Product from '../Product/Product';
import SearchBar from '../SearchBar/SearchBar';
import { UserMenu } from '../UserMenu/UserMenu';
import SelectCoffee from '../SelectCoffee/SelectCoffee';
import Checkbox from '../Checkbox/Checkbox';

// const favouriteBooks = [
//   { id: 'id-1', name: 'JS for beginners' },
//   { id: 'id-2', name: 'React basics' },
//   { id: 'id-3', name: 'React Router overview' },
// ];

export default function App() {
  function handleLogin(userData) {
    console.log('userData: ', userData);
  }

  const [lang, setLang] = useState('uk');

  const [coffeeSize, setCoffeeSize] = useState('md');

  const [hasAccepted, setHasAccepted] = useState(false);

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

      <UserMenu name="Mykhailo Hozhyi" /> */}

      <LoginForm onLogin={handleLogin} />

      <SearchBar />

      <LangSwitcher value={lang} onSelect={setLang} />

      <SelectCoffee value={coffeeSize} onChecked={setCoffeeSize} />

      <Checkbox checked={hasAccepted} onChecked={setHasAccepted} />
    </div>
  );
}
