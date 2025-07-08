import NavBar from "@/components/nav-bar";
import { NAV_LINKS } from "@/constants/nav-bar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NAV_LINKS_TEST_ID } from "@/constants/data-testid/nav-bar";
import { HREF_ATTRIBUTE } from "../constants/test-constants";

describe("NavBar Component", () => {
  const renderComponent = () => {
    render(<NavBar />);
  };

  it("should render navbar link with correct href", () => {
    renderComponent();

    NAV_LINKS.forEach(({ href, label }) => {
      const navItem = screen.getByText(label);

      expect(navItem).toBeInTheDocument();

      expect(navItem).toHaveAttribute(HREF_ATTRIBUTE, href);
    });
  });

  it("should render correct nav links", () => {
    renderComponent();

    NAV_LINKS.forEach(({ label }) => {
      const link = screen.getByTestId(`${NAV_LINKS_TEST_ID}-${label}`);
      
      expect(link).toBeInTheDocument();
    });
  });
});
