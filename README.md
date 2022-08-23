# DLR-Product-Card

This is a deployment test package in NPM

### Diego Loyola

## Example

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'dlr-product-card'
```

```
<ProductCard
product={product}
initialValues={{
    count: 4,
    // maxCount: 10,
  }}

> {({ reset, count, increaseBy, maxCount, isMaxCountReached }) => (

    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>

)}
</ProductCard>
```
