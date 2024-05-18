import { Metadata } from 'next';
import CompleteOrderContent from './complete-order-content';

export const metadata: Metadata = {
  title: 'Order',
};

export default async function Order() {
  return (
    <>
      <CompleteOrderContent />
    </>
  );
}
