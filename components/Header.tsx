"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();

  const isActive = (href: string) => {
    if (href === "/blogs") {
      return pathName.startsWith("/blogs");
    }
    return pathName === href;
  };

  return (
    <div className="w-full flex justify-between bg-background p-5 capitalize">
      <p>
        <Link
          href="/"
          className={`font-semibold hover:underline ${
            isActive("/")
              ? "text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          Abhiram
        </Link>
      </p>

      {/* external links */}
      <div className="lg:flex md:flex space-x-5 hidden">
        <a
          className="hover:text-primary text-muted-foreground font-semibold hover:underline"
          href="https://github.com/TheDummyUser"
        >
          github
        </a>
        <p>LinkedIn</p>
        <a
          href="mailto:abhiram.reddy122002@gmail.com"
          className="hover:text-primary text-muted-foreground font-semibold hover:underline"
        >
          MailMe
        </a>
      </div>

      {/* internal links */}
      <div className="flex space-x-5">
        <Link
          href="/about"
          className={`font-semibold hover:underline ${
            isActive("/about")
              ? "text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          to about
        </Link>
        <Link
          href="/blogs"
          className={`font-semibold hover:underline ${
            isActive("/blogs")
              ? "text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          to blogs
        </Link>
      </div>
    </div>
  );
};
