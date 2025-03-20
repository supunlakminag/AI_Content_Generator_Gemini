"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Home, FileClock, Settings, WalletCards, LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

interface MenuItem {
  name: string;
  icon: LucideIcon;
  path: string;
}

const menuList: MenuItem[] = [
  {
    name: "Home",
    icon: Home,
    path: "/dashboard",
  },
  {
    name: "History",
    icon: FileClock,
    path: "/dashboard/history",
  },
  {
    name: "Billing",
    icon: WalletCards,
    path: "/dashboard/billing",
  },
  {
    name: "Setting",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

const SideNav: React.FC = () => {
  const path = usePathname();

  useEffect(() => {
    console.log("Current path:", path);
  }, [path]);

  return (
    <div className="h-screen p-5 shadow-sm border w-64">
      <div className="flex justify-center mb-5">
        <Image src="/logo.svg" alt="logo" width={150} height={100} />
      </div>
      <nav className="mt-10">
        {menuList.map((menu, index) => {
          // Checking the if the path is matching
          const isActive = path === menu.path;
          return (
            <div
              key={index}
              className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all
              ${isActive ? "bg-orange-500 text-white" : "hover:bg-orange-300 text-gray-700"}`}
            >
              <menu.icon className={`w-6 h-6 ${isActive ? "text-white" : "hover:text-black"}`} />
              <h2>{menu.name}</h2>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default SideNav;
