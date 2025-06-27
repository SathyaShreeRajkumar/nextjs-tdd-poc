import Page from "@/app/page";
import { HOMEPAGE_CONST } from "@/constants/app-constants";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
    useRouter: jest.fn()
}));

describe("Page", () => {
  it(" should render page component", () => {
    render(<Page />);

    const title = screen.getByText(HOMEPAGE_CONST.EXPLORE_MORE);
    const startButton = screen.getByText(HOMEPAGE_CONST.START_SHOPPING);
    
    expect(title).toBeDefined();
    expect(startButton).toBeDefined();
  });
});
