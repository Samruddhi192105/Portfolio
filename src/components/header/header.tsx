"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import OnlineUsers from "../realtime/online-users";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const isHome = usePathname() === "/";
  const navItems = [
    { label: "Profile", href: "/#about" },
    { label: "Tech Stack", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1000]"
      )}
      style={{ background: "transparent" }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className={cn(styles.bar, "flex items-center justify-between")}>
        <Link
          href="/"
          aria-label={`${config.author} home`}
          className="flex items-center justify-center text-foreground transition-opacity hover:opacity-75"
        >
          <Button
            variant="link"
            size="icon"
            aria-label="Home"
            className="h-10 w-10 p-0 text-lg font-bold tracking-tight"
          >
            SG
          </Button>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap sm:gap-5"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[10px] font-medium uppercase tracking-[0.08em] text-white transition-colors hover:text-white sm:text-xs"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <FunnyThemeToggle className="w-6 h-6 mr-4 hidden md:flex" />
          {isHome && process.env.NEXT_PUBLIC_WS_URL && <OnlineUsers />}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
