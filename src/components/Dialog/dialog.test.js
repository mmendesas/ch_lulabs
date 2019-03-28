import React from 'react';
import { render } from 'react-testing-library';
import Dialog from './index';

describe('[Component] - Dialog', () => {
  it('should be match snapshot', () => {
    const { getByText } = render(<Dialog>my dialog</Dialog>);
    expect(getByText('my dialog')).toMatchSnapshot();
  });

  it('renders dialog with default values', () => {
    const { getByText } = render(<Dialog>my dialog</Dialog>);
    expect(getByText('my dialog').className).toEqual('dialog');
  });

  it('renders dialog with default values', () => {
    const { getByText } = render(<Dialog visible>my dialog</Dialog>);
    expect(getByText('my dialog').className).toEqual('dialog dialog--active');
  });
});
