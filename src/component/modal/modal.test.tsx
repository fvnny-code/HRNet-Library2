import { render, fireEvent } from "@testing-library/react";
import { vi, describe, test } from "vitest";
import { Modal } from "./Modal";

describe("<Modal/>", () => {
  test("when isShown is true, modal should be displayed", () => {
    const { getByTestId } = render(
      <Modal isShown={true} onHide={() => {}} message="" />
    );
    expect(getByTestId("displayModal")).toBeTruthy();
  });
  test("when isShown is false, modal should not be displayed", () => {
    const { queryByText } = render(
      <Modal isShown={false} onHide={() => {}} message="blablabla" />
    );
    expect(queryByText(/blablabla/i)).toBeFalsy();
  });
  test("modal with message should be displayed", () => {
    const { getByText } = render(
      <Modal isShown={true} onHide={() => {}} message="blablabla" />
    );
    expect(getByText(/blablabla/i)).toBeDefined();
  });
  test(" Click on closeButton should trigger onHide event", () => {
    const onClickFunction = vi.fn();
    const { getByTestId } = render(
      <Modal isShown={true} onHide={onClickFunction} message="" />
    );
    fireEvent.click(getByTestId("closeButton"));
    expect(onClickFunction).toHaveBeenCalled();
    
  });
  
});
