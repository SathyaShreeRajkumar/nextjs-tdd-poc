import { NAV_LINKS } from "@/constants/nav-bar";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} data-testid="nav-links">
            {label}
          </Link>
        ))}
      </nav>
    </nav>
  );
};

export default NavBar;
