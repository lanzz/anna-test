import React from 'react';
import { render } from 'enzyme';
import Header from '../Header';

it('renders correctly', () => {
    const wrapper = render(
        <Header />
    );
    expect(wrapper).toMatchSnapshot();
});
