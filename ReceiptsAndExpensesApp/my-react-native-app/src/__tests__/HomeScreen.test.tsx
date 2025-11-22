import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Welcome to Home Screen')).toBeTruthy();
  });

  it('displays the correct title', () => {
    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId('home-title')).toHaveTextContent('Home');
  });
});