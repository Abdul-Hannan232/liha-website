'use client';

import Link from 'next/link';
import usePrice from '@framework/product/use-price';
import cn from 'classnames';
import { useCart } from '@contexts/cart/cart.context';
import Text from '@components/ui/text';
import Button from '@components/ui/button';
import { CheckoutItem } from '@components/checkout/checkout-card-item';
import { CheckoutCardFooterItem } from './checkout-card-footer-item';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@utils/routes';
import { useIsMounted } from '@utils/use-is-mounted';
import { useEffect, useState } from 'react';
import SearchResultLoader from '@components/ui/loaders/search-result-loader';

const CheckoutCard = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  const { items, total, isEmpty } = useCart();
  const { price: subtotal } = usePrice({
    amount: total,
    currencyCode: 'USD',
  });
  function orderHeader() {
    !isEmpty && router.push(`${ROUTES.ORDER}`);
  }
  const checkoutFooter = [
    {
      id: 1,
      name: 'Subtotal',
      price: subtotal,
    },
    {
      id: 2,
      name:'Shipping',
      price: '$0',
    },
    {
      id: 3,
      name: 'Total',
      price: subtotal,
    },
  ];
  const mounted = useIsMounted();
  return (
    <>
      <div className="px-4 pt-4 border rounded-md border-border-base text-brand-light xl:py-6 xl:px-7">
        <div className="flex pb-2 text-sm font-semibold rounded-md text-heading">
          <span className="font-medium text-15px text-brand-dark">
          Product
          </span>
          <span className="font-medium ltr:ml-auto rtl:mr-auto shrink-0 text-15px text-brand-dark">
          Subtotal
          </span>
        </div>
        {isLoading ? (
          <div className="w-full">
            <SearchResultLoader uniqueKey={`product-key`} />
          </div>
        ) : !isEmpty && mounted ? (
          items.map((item) => <CheckoutItem item={item} key={item.id} />)
        ) : (
          <p className="py-4 text-brand-danger text-opacity-70">
            Your cart is empty.
          </p>
        )}
        {mounted &&
          checkoutFooter.map((item: any) => (
            <CheckoutCardFooterItem item={item} key={item.id} />
          ))}
        <Button
          variant="formButton"
          className={cn(
            'w-full mt-8 mb-5 rounded font-semibold px-4 py-3 transition-all',
            mounted && isEmpty
              ? 'opacity-40 cursor-not-allowed'
              : '!bg-brand !text-brand-light',
          )}
          onClick={orderHeader}
        >
          Order Now
        </Button>
      </div>
      <Text className="mt-8">
      By placing your order, you agree to be bound by the BoroBazar
        <Link href={`${ROUTES.TERMS}`} legacyBehavior>
          <a className="font-medium underline text-brand">
          Terms of Service
          </a>
        </Link>
        and
        <Link href={`${ROUTES.PRIVACY}`} legacyBehavior>
          <a className="font-medium underline text-brand">
          Privacy
          </a>
        </Link>
        . Your credit/debit card data will not saved.
      </Text>
      <Text className="mt-4">A bag fee may be added to your final total if required by law or the retailer. The fee will be visible on your receipt after delivery.</Text>
    </>
  );
};

export default CheckoutCard;
