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
  const[id, setId] = useState<number | null>(1)
  const searchParams = useSearchParams();
  const oid = searchParams.get('oid');

  useEffect(() => {
    if (oid) {
      setId(Number(oid))
     
    }
  }, [oid]);
  
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


