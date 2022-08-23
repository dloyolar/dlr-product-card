import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('should show the component correctly with custom img', () => {
    const wrapper = renderer.create(<ProductImage img="https://hi.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should be display the component with the product img', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
