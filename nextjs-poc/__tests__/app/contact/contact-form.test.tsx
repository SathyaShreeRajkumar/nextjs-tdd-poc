import { ContactForm } from "@/app/contact/contact-form";
import { CONTACT_CONST } from "@/constants/app-constants";
import { CONTACT_SUBMIT_BUTTON_TEST_ID } from "@/constants/data-testid/contact";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { mockContactForm } from "../../__fixtures__/contact";

describe("Contact Form", () => {
  const renderComponent = () => {
    return render(<ContactForm />);
  };

  it("should render the contact form with correct labels", () => {
    renderComponent();

    const nameLabel = screen.getByLabelText(CONTACT_CONST.NAME_LABEL);
    const emailLabel = screen.getByLabelText(CONTACT_CONST.EMAIL_LABEL);
    const messageLabel = screen.getByLabelText(CONTACT_CONST.MESSAGE_LABEL);

    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(messageLabel).toBeInTheDocument();
  });

  it("should display validation errors when fields are empty", async () => {
    renderComponent();

    const submitButton = screen.getByTestId(CONTACT_SUBMIT_BUTTON_TEST_ID);
    await userEvent.click(submitButton);

    const nameError = await screen.findByText(CONTACT_CONST.NAME_REQUIRED_VALIDATION_ERROR);
    const emailError = await screen.findByText(CONTACT_CONST.EMAIL_REQUIRED_VALIDATION_ERROR);
    const messageError = await screen.findByText(CONTACT_CONST.MESSAGE_REQUIRED_VALIDATION_ERROR);

    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(messageError).toBeInTheDocument();
  });

  it("should display success message on valid form submission", async () => {
    renderComponent();

    const nameInput = screen.getByLabelText(CONTACT_CONST.NAME_LABEL);
    const emailInput = screen.getByLabelText(CONTACT_CONST.EMAIL_LABEL);
    const messageInput = screen.getByLabelText(CONTACT_CONST.MESSAGE_LABEL);
    const submitButton = screen.getByTestId(CONTACT_SUBMIT_BUTTON_TEST_ID);

    await userEvent.type(nameInput, mockContactForm.name);
    await userEvent.type(emailInput, mockContactForm.email);
    await userEvent.type(messageInput, mockContactForm.message);

    await userEvent.click(submitButton);

    const successMessage = screen.getByText(CONTACT_CONST.MESSAGE_SENT);
    expect(successMessage).toBeInTheDocument();
});
});
