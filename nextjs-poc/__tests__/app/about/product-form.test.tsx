import ProductForm from "@/components/product-form";
import { PRODUCT_FORM_CONST } from "@/constants/app-constants";
import { PRODUCT_FORM_SUBMIT_BUTTON_TEST_ID } from "@/constants/data-testid/product";
import { PRODUCT_FORM_VALIDATION } from "@/constants/validation-errors";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { toast } from "sonner";
import { mockProductFormValues, mockProductFormValuesNegativeStock } from "../../__fixtures__";

jest.mock("sonner", () => ({
  toast: jest.fn(),
}));

describe("ProductForm", () => {
  const renderComponent = () => {
    return render(<ProductForm />);
  };

  it("should render the product form with correct labels", () => {
    renderComponent();

    expect(
      screen.getByLabelText(PRODUCT_FORM_CONST.PRODUCT_NAME_LABEL)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(PRODUCT_FORM_CONST.PRICE_LABEL)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(PRODUCT_FORM_CONST.CATEGORY_LABEL)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(PRODUCT_FORM_CONST.IN_STOCK_LABEL)
    ).toBeInTheDocument();
  });

  it("should display placeholder text in input fields", () => {
    renderComponent();

    expect(
      screen.getByPlaceholderText(PRODUCT_FORM_CONST.PRODUCT_NAME_PLACEHOLDER)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(PRODUCT_FORM_CONST.PRICE_PLACEHOLDER)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(PRODUCT_FORM_CONST.CATEGORY_PLACEHOLDER)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(PRODUCT_FORM_CONST.IN_STOCK_PLACEHOLDER)
    ).toBeInTheDocument();
  });

  it("should display validation errors when fields are empty", async () => {
    renderComponent();

    const submitButton = screen.getByTestId(PRODUCT_FORM_SUBMIT_BUTTON_TEST_ID);
    await userEvent.click(submitButton);

    expect(
      screen.getByText(PRODUCT_FORM_VALIDATION.PRODUCT_NAME_REQUIRED)
    ).toBeInTheDocument();
    expect(
      screen.getByText(PRODUCT_FORM_VALIDATION.INVALID_PRICE)
    ).toBeInTheDocument();
    expect(
      screen.getByText(PRODUCT_FORM_VALIDATION.CATEGORY_REQUIRED)
    ).toBeInTheDocument();
  });

  it("should display validation error when stock is negative", async () => {
    renderComponent();

    const stockInput = screen.getByLabelText(PRODUCT_FORM_CONST.IN_STOCK_LABEL);
    await userEvent.clear(stockInput);
    await userEvent.type(stockInput, String(mockProductFormValuesNegativeStock.inStock));

    const submitButton = screen.getByTestId(PRODUCT_FORM_SUBMIT_BUTTON_TEST_ID);
    await userEvent.click(submitButton);

    expect(
      screen.getByText(PRODUCT_FORM_VALIDATION.INVALID_STOCKS)
    ).toBeInTheDocument();
  });

  it("should call toast with success message on form submit", async () => {
    renderComponent();

    await userEvent.type(screen.getByLabelText(PRODUCT_FORM_CONST.PRODUCT_NAME_LABEL), mockProductFormValues.name);
    await userEvent.type(screen.getByLabelText(PRODUCT_FORM_CONST.PRICE_LABEL), mockProductFormValues.price);
    await userEvent.type(screen.getByLabelText(PRODUCT_FORM_CONST.CATEGORY_LABEL), mockProductFormValues.category);
    await userEvent.type(screen.getByLabelText(PRODUCT_FORM_CONST.IN_STOCK_LABEL), String(mockProductFormValues.inStock));

    const submitButton = screen.getByTestId(PRODUCT_FORM_SUBMIT_BUTTON_TEST_ID);
    await userEvent.click(submitButton);

    expect(toast).toHaveBeenCalledWith(
      PRODUCT_FORM_CONST.PRODUCT_FORM_TOAST_SUCCESS
    );
  });
});
