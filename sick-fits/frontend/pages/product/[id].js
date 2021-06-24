/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}
