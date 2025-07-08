import HomePage from "@/components/home-page";
import { HOMEPAGE_CONST } from "@/constants/app-constants";
import { APP_ROUTES } from "@/constants/app-route";
import { START_SHOPPING_BUTTON_TEST_ID } from "@/constants/data-testid/home-page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Home Page", () => {
  const renderComponent = () => {
    render(<HomePage />);
  };

  it("should render HomePage component", () => {
    renderComponent();

    const title = screen.getByText(HOMEPAGE_CONST.EXPLORE_MORE);
    const startButton = screen.getByText(HOMEPAGE_CONST.START_SHOPPING);

    expect(title).toBeDefined();
    expect(startButton).toBeDefined();
  });

  it("should navigate to shopping page on button click ", async () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: pushMock,
    }));

    renderComponent();

    const startShoppingButton = screen.getByTestId(START_SHOPPING_BUTTON_TEST_ID);

    await userEvent.click(startShoppingButton);

    expect(pushMock).toHaveBeenCalledWith(APP_ROUTES.PRODUCTS);
  });
});
