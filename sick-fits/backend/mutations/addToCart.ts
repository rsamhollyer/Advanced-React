import { KeystoneContext } from '@keystone-next/types';

export default async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
) {
  const sesh = context.session;

  if (!sesh.itemId) {
    throw new Error('You must be logged in to do this');
  }

  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sesh.itemId }, product: { id: productId } },
    resolveFields: 'id,quantity',
  });

  const [existingCartItem] = allCartItems;

  if (existingCartItem) {
    console.log(
      `There are already ${existingCartItem.quantity} items in your cart. Increment by 1 !`
    );
    const updatedItem = await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
    });
    return updatedItem;
  }
  const newItem = await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sesh.itemId } },
    },
  });
  return newItem;
}
