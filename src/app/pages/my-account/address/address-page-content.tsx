'use client';

import AddressGrid from '@components/address/address-grid';
import { useAddressQuery } from '@framework/address/address';

export default function AddressPageContent() {
  let { data, isLoading } = useAddressQuery();
  return (
    <>
      {!isLoading ? (
        <AddressGrid address={data?.data} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
