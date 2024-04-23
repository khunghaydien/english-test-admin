"use client";

import clsx from "clsx";
import { isEmpty } from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";
type ILink = {
  href: string;
  label: string;
};

export type IMenuLink = ILink & {
  subLink?: ILink[];
  language?: string;
};

const MenuLink = ({ href, label, subLink, language }: IMenuLink) => {
  const pathname = usePathname();
  const checkLink = (href: string) => {
    if (language === "en") return href === pathname;
    else return `/${language}${href}` === pathname;
  };
  return (
    <>
      <Link
        href={href}
        className={clsx(
          "w-full h-[50px] flex items-center p-2 rounded-xl hover:bg-default-100 hover:text-blue-500",
          pathname?.split("/").includes(href.split("/")[1])
            ? "text-white bg-default-900"
            : "text-blue-500"
        )}
      >
        {label}
      </Link>
      {pathname?.split("/").includes(href.split("/")[1]) &&
        !isEmpty(subLink) &&
        subLink && (
          <div className="ml-10 flex flex-col gap-2">
            {subLink.map(({ href, label }: ILink) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "w-full h-[50px] flex items-center p-2 rounded-xl hover:bg-default-100 hover:text-blue-500",
                  checkLink(href)
                    ? "text-white bg-default-900"
                    : "text-blue-500"
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
    </>
  );
};
export default MenuLink;
