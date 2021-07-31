/* eslint-disable react/prop-types */
import Link from 'next/link';
import formatMoney from '../lib/formatMoney.js';
import AddToCart from './AddToCart.jsx';
import DeleteProduct from './DeleteProduct.jsx';
import ItemStyles from './styles/ItemStyles.js';
import PriceTag from './styles/PriceTag';
import Title from './styles/Title';

function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className="buttonlist">
        <Link
          href={{
            pathname: `/update`,
            query: { productid: product.id },
          }}
        >
          Edit ✏️
        </Link>
        <AddToCart id={product.id} />
        <DeleteProduct id={product.id}>Delete ❌</DeleteProduct>
      </div>
    </ItemStyles>
  );
}

export default Product;
