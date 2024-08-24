'use client';

import OrderInformation from '@components/order/order-information';
import Container from '@components/ui/container';
import Divider from '@components/ui/divider';
import { useCart } from '@contexts/cart/cart.context';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
// import http from '@framework/utils/http';
// import { Order } from '@framework/types';

export default function CompleteOrderContent() {
  const[id, setId] = useState<number | null>()
  const searchParams = useSearchParams();
  const oid = searchParams.get('oid');

  useEffect(() => {
    if (oid) {
      setId(Number(oid))
      // const fetchOrder = async () => {
      //     try {
      //       const { data } = await http.get(
      //         `http://localhost:5055/api/orders/${Number(oid)}`,
      //       );

      //       // console.log('>>>>>>>>>>>>>>>>>> order',data)
      //       setOrder(data);
      //     } catch (error) {
      //       console.error('Error fetching user data:', error);
      //     }
        
      // };

      // fetchOrder();
    }
  }, [oid]);

  // const pathname = usePathname();
  // const { getParams, query } = useQueryParam(pathname ?? '/');

  // const newQuery: any = getParams(
  //   // @ts-ignore
  //   `${process.env.NEXT_PUBLIC_WEBSITE_URL}${query}`,
  // );

  // console.log(newQuery);

  const { resetCart } = useCart();
  useEffect(() => {
    resetCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Divider />
      <Container>
        <OrderInformation oid={id as number} />
      </Container>
      <Divider />
    </>
  );
}
