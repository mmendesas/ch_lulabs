import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Search from './index';

describe('[Component] - Search', () => {
  const setup = () => {
    const onSearch = jest.fn();
    const utils = render(<Search onSearch={onSearch} />);
    const input = utils.getByLabelText('search');
    const button = utils.container.querySelector('.search__button');

    return {
      input,
      button,
      onSearch,
      ...utils
    };
  };

  it('should be match snapshot', () => {
    const { getByText } = render(<Search />);
    expect(getByText('Consultar')).toMatchSnapshot();
  });

  it('should allow the numeric postal code in the search entry', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: '02047000' } });
    expect(input.value).toBe('02047000');
  });

  it('should not allow letters to be inputted', () => {
    const { input } = setup();
    expect(input.value).toBe(''); // empty before
    fireEvent.change(input, { target: { value: 'Good Day' } });
    expect(input.value).toBe(''); //empty after
  });

  it('should call onSearch function propertie', () => {
    const { button, onSearch } = setup();
    fireEvent.click(button);
    expect(onSearch).toHaveBeenCalled();
  });
});
