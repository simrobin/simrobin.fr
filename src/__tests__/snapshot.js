import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';

test('Index should match snapshot', () => {
  const { container } = render(<Index />);

  expect(container).toMatchSnapshot();
});
