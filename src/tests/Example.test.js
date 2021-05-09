import React from 'react';
import { render,screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

describe('Dashboard Test Cases', () => {
  it('Test case for Loading content', () => {
    render(<Dashboard />);
    let loading = screen.getByText("Loading...");
    expect(loading).toBeTruthy();
  })
})


describe('Example Test Cases', () => {
  test('Testing 2 numbers', () => {
    expect(1+1).toEqual(2)
  })
  it('Testing 5 numbers', () => {
    expect(5).toEqual(5)
  })
})