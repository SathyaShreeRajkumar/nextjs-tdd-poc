import ErrorPage from "@/app/error";
import { COMMON_CONST } from "@/constants/app-constants";
import { TRY_AGAIN_TEST_ID } from "@/constants/data-testid/error";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { mockErrorPageProps } from "../__fixtures__";
import userEvent from "@testing-library/user-event";

describe(Error, () => {
  const renderComponent = () => {
    render(<ErrorPage {...mockErrorPageProps} />);
  };

  it("should render error page correctly", () => {
    renderComponent();

    const errorTitle = screen.getByText(COMMON_CONST.SOMETHING_WENT_WRONG);
    const tryAgainButton = screen.getByTestId(TRY_AGAIN_TEST_ID);

    expect(errorTitle).toBeInTheDocument();
    expect(tryAgainButton).toBeInTheDocument();
  });

  it("should call reset function on click try again", async () => {
    renderComponent();

    const tryAgainButton = screen.getByTestId(TRY_AGAIN_TEST_ID);

    await userEvent.click(tryAgainButton);

    expect(mockErrorPageProps.reset).toHaveBeenCalledTimes(1);
  });
});
