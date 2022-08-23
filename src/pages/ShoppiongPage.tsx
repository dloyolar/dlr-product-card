import React, {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/products';

const product = products[0];

export const ShoppiongPage = () => {
  return (
    <div>
      <div>
        <h1>Shopping Page</h1>
      </div>
      <hr />

      <ProductCard
        product={product}
        key={product.id}
        initialValues={{
          count: 4,
          // maxCount: 10,
        }}
      >
        {({ reset, count, increaseBy, maxCount, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};
