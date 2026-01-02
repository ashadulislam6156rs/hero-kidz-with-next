"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathName = usePathname();
    return (
      <Link className={`bg-transparent hover:text-primary ${pathName.startsWith(href) && "text-primary"}`} href={href}>
        {children}
      </Link>
    );
};

export default NavLink;