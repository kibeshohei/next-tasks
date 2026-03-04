"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ label, link, icon }) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`flex w-full items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-700 font-medium
        ${pathname === link ? "bg-gray-600 border-r-4 border-r-green-500" : ""}`}
    >
      <div className="mr-1">{icon}</div>
      <div>{label}</div>
    </Link>
  );
};

export default NavItem;
