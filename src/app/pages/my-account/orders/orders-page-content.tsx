'use client';

import OrderTable from '@components/order/order-table';
import { useOrdersQuery } from '@framework/order/get-all-orders';

export default function OrdersPageContent() {
  const { data, isLoading } = useOrdersQuery({});
  return (
    <>
      {!isLoading ? (
        <OrderTable orders={data?.data}  />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
