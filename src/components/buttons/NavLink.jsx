"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`bg-transparent hover:text-primary transition
        ${isActive ? "text-primary font-semibold" : "text-gray-600"}
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
