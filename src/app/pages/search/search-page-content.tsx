'use client';

import { ProductGrid } from '@components/product/product-grid';
import { ShopFilters } from '@components/search/filters';
import SearchTopBar from '@components/search/search-top-bar';
import Container from '@components/ui/container';
import { Element } from 'react-scroll';

export default function SearchPageContent() {
  return (
    <Container>
      {/* @ts-ignore */}
      <Element name="grid" className="flex pb-16 pt-7 lg:pt-7 lg:pb-20">
        <div className="sticky hidden h-full lg:pt-4 shrink-0 ltr:pr-8 rtl:pl-8 xl:ltr:pr-16 xl:rtl:pl-16 lg:block w-80 xl:w-96 top-16">
          <ShopFilters />
        </div>
        <div className="w-full lg:pt-4 lg:ltr:-ml-4 lg:rtl:-mr-2 xl:ltr:-ml-8 xl:rtl:-mr-8 lg:-mt-1">
          <SearchTopBar />
          <ProductGrid />
        </div>
      </Element>
    </Container>
  );
}
