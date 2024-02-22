"use client";
import { Locale } from "@/language/i18n-config";
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
  language: Locale;
};

const MenuLink = ({ href, label, subLink, language }: IMenuLink) => {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={href}
        className={clsx(
          "w-full h-[50px] flex items-center p-2 rounded-xl",
          pathname?.split("/").includes(href.split("/")[1])
            ? "text-white bg-blue-900"
            : "text-blue-500"
        )}
      >
        {label}
      </Link>
      {pathname?.split("/").includes(href.split("/")[1]) &&
        !isEmpty(subLink) &&
        subLink && (
          <div className="ml-[50px] flex-col gap-2">
            {subLink.map(({ href, label }: ILink) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "w-full h-[50px] flex items-center p-2 rounded-xl",
                  `/${language}${href}` === pathname
                    ? "text-white bg-blue-900"
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
