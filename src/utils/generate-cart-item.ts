import isEmpty from 'lodash/isEmpty';
interface Item {
  id: string | number;
  name: string;
  slug: string;
  image: string;
  // image: {
  //   thumbnail: string;
  //   [key: string]: unknown;
  // };
  price: number;
  sale_price?: number;
  quantity?: number;
  [key: string]: unknown;
}
interface Variation {
  id: string | number;
  title: string;
  price: number;
  sale_price?: number;
  quantity: number;
  [key: string]: unknown;
}
export function generateCartItem(item: Item, variation: Variation) {
  const { id,title, name, slug, image, price, sale_price, quantity, unit } = item;
  if (!isEmpty(variation)) {
    return {
      id: `${id}.${variation.id}`,
      productId: id,
      name: `${title}`,
      // name: `${name} - ${variation.title}`,
      slug,
      unit,
      stock: variation.quantity,
      price: variation.sale_price ? variation.sale_price : variation.price,
      image: image,
      // image: image?.thumbnail,
      variationId: variation.id,
    };
  }
  return {
    id,
    title,
    // name,
    slug,
    unit,
    image: image,
    // image: image?.thumbnail,
    stock: quantity,
    price: sale_price ? sale_price : price,
  };
}
