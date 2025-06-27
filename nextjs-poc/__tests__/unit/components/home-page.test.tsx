import HomePage from "@/components/home-page";
import { HOMEPAGE_CONST } from "@/constants/app-constants";
import { APP_ROUTES } from "@/constants/app-route";
import { fireEvent, render, screen } from "@testing-library/react";
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

  it("should navigate to shopping page on button click ", () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: pushMock,
    }));

    renderComponent();

    const submitButton = screen.getByRole("button", {
      name: HOMEPAGE_CONST.START_SHOPPING,
    });

    fireEvent.click(submitButton);

    expect(pushMock).toHaveBeenCalledWith(APP_ROUTES.PRODUCTS);
  });
});
