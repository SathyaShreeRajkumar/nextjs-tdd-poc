import { NAV_LINKS_TEST_ID } from "@/constants/data-testid/nav-bar";
import { NAV_LINKS } from "@/constants/nav-bar";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} data-testid={NAV_LINKS_TEST_ID}>
            {label}
          </Link>
        ))}
      </nav>
    </nav>
  );
};

export default NavBar;
