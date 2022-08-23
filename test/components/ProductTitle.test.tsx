import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product } from '../data/products';

describe('ProductTitle', () => {
  test('should show the component correctly with the custom title', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Product" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should be display the component with the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
