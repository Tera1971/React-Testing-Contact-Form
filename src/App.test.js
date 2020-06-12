import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});
it('calls onSubmit prop function when form is submitted', () => {
  const onSubmitFn = jest.fn();
  const wrapper = mount(<Form onSubmit={onSubmitFn}/>);
  const form = wrapper.find('form');
  form.simulate('submit');
  expect(onSubmitFn).toHaveBeenCalledTimes(1);
});
it('gets the form state from onSubmit function', () => {
  const wrapper = document.createElement('div');