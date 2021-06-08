import React from 'react';
import { Button } from './button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('should render', () => {
    const {container, getByText} = render(<Button label="TEST_BTTN"></Button>)
    expect(container).toBeDefined();
    expect(getByText("TEST_BTTN")).toBeDefined();
  });
});