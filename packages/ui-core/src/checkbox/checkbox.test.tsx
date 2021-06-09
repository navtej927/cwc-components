import React from 'react';
import { Checkbox } from '.';
import { render } from '@testing-library/react';

describe('Checkbox', () => {
  it('should render', () => {
    const { container } = render(<Checkbox />)
    expect(container).toBeDefined();
  });
});