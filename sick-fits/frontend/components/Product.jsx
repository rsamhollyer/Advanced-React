/* eslint-disable react/prop-types */
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles.js';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney.js';
import DeleteProduct from './DeleteProduct.jsx';

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
        <DeleteProduct id={product.id}>Delete ❌</DeleteProduct>
      </div>
    </ItemStyles>
  );
}

export default Product;
