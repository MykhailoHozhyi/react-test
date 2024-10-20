import { useSearchParams } from 'react-router-dom';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get('name');
  const color = searchParams.get('color');
  const maxPrice = searchParams.get('maxPrice');

  function handleSearch(event) {
    const key = event.target.name;
    const value = event.target.value;

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, value);

    setSearchParams(newSearchParams);
  }

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        name="name"
        value={name || ''}
        onChange={handleSearch}
      />
      <input
        type="text"
        name="color"
        value={color || ''}
        onChange={handleSearch}
      />
      <input
        type="text"
        name="maxPrice"
        value={maxPrice || ''}
        onChange={handleSearch}
      />
    </div>
  );
}
