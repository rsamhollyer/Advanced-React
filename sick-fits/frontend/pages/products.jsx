import Pagination from '../components/Pagination';
import Products from '../components/Products';

export default function ProductsPage() {
  return (
    <div>
      <Pagination page={5} />
      <Products />
      <Pagination page={4} />
    </div>
  );
}
