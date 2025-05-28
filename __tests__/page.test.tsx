import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import Contact from '../src/app/contact/page';
import About from '../src/app/about/page';
import Home from '../src/app/page';

test('renders the Home page correctly', () => {
  render(<Home />);

  // Check heading exists
  expect(screen.getByRole('heading', { level: 1, name: 'Home Page' })).toBeDefined();

  // Check welcome message exists
  expect(screen.getByText('Welcome to our site!')).toBeDefined();

  // Check nav links
  expect(screen.getByRole('link', { name: 'About' })).toBeDefined();
  expect(screen.getByRole('link', { name: 'Contact' })).toBeDefined();

  // Check main content text
  expect(screen.getByText('This is the main content area of the home page.')).toBeDefined();
});


test('renders the About page correctly', () => {
  render(<About />);

  expect(screen.getByRole('heading', { level: 1, name: 'About Us' })).toBeDefined();
  expect(
    screen.getByText(/We are a team of developers/i)
  ).toBeDefined();
  expect(
    screen.getByText(/Our mission is to create/i)
  ).toBeDefined();
});

global.alert = vi.fn();

test('renders the Contact form and submits data', () => {
  render(<Contact />);

  // Check heading
  expect(screen.getByRole('heading', { level: 1, name: 'Contact Us' })).toBeDefined();

  // Fill in the form
  fireEvent.change(screen.getByLabelText(/Name:/i), {
    target: { value: 'John Doe' },
  });

  fireEvent.change(screen.getByLabelText(/Email:/i), {
    target: { value: 'john@example.com' },
  });

  fireEvent.change(screen.getByLabelText(/Message:/i), {
    target: { value: 'Hello, this is a test message.' },
  });

  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: /send/i }));

  // Check if alert was called (mocked)
  expect(global.alert).toHaveBeenCalledWith('Message sent!');
});