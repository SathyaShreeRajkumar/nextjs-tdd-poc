import NavBar from "@/components/nav-bar";
import { NAV_LINKS } from "@/constants/nav-bar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NAV_LINKS_TEST_ID } from "@/constants/data-testid/nav-bar";

describe("NavBar Component", () => {
  const renderComponent = () => {
    render(<NavBar />);
  };

  it("should render navbar link with correct href", () => {
    renderComponent();

    NAV_LINKS.forEach(({ href, label }) => {
      const navItem = screen.getByText(label);

      expect(navItem).toBeDefined();

      expect(navItem).toHaveAttribute("href", href);
    });
  });

  it("should render correct number of nav links", () => {
    renderComponent();

    const navItemLink = screen.getAllByTestId(NAV_LINKS_TEST_ID);

    expect(navItemLink).toHaveLength(NAV_LINKS.length);
  });
});
