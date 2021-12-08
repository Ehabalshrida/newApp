import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Form from './index';
import '@testing-library/jest-dom/extend-expect';
it('need to run a function on button click', async () => {
  let callApi = jest.fn();
  render(<Form handleApiCall={callApi} />);
  const button = screen.getByTestId('submit');
  fireEvent.click(button);
  await waitFor(() => expect(callApi).toHaveBeenCalled());
});
it("test GET Button", async () => {
  let callApi = jest.fn();
  render(<Form handleApiCall={callApi} />);
  const button = screen.getByTestId('submit');
  fireEvent.click(button);
  await waitFor(() => expect(callApi).toHaveBeenCalled());
  const getButton=screen.getByTestId("getbut")
  fireEvent.click(getButton);
  await waitFor(() => expect(callApi).toHaveBeenCalled());
});
it('test POST Button', async () => {
  let callApi = jest.fn();
//  let handleShowText=jest.fn()
//  console.log(handleShowText);
  render(<Form handleApiCall={callApi} />);
  const button = screen.getByTestId('submit');
  fireEvent.click(button);
  await waitFor(() => expect(callApi).toHaveBeenCalled());
  const postButton=screen.getByTestId("postButt")
  fireEvent.click(postButton);
  await waitFor(() => expect(callApi).toHaveBeenCalled());
});
it("test PUT Button", async () => {
  let callApi = jest.fn();
  render(<Form handleApiCall={callApi} />);
  const button = screen.getByTestId('submit');
  fireEvent.click(button);
  await waitFor(() => expect(callApi).toHaveBeenCalled());
  const getButton=screen.getByTestId("putButt")
  fireEvent.click(getButton);
  await waitFor(() => expect(callApi).toHaveBeenCalled());
});

it("test DELETE Button", async () => {
  let callApi = jest.fn();
  render(<Form handleApiCall={callApi} />);
  const button = screen.getByTestId('submit');
  fireEvent.click(button);
  await waitFor(() => expect(callApi).toHaveBeenCalled());
  const getButton=screen.getByTestId("deleteButt")
  fireEvent.click(getButton);
  await waitFor(() => expect(callApi).toHaveBeenCalled());
});
