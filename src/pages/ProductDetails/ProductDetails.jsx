import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { productId } = useParams();

  return <h1>ProductDetails {productId}</h1>;
}
