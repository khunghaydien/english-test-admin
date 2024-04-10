import { useRouter, usePathname } from "@/navigation";
import Cookies from "js-cookie";
import { NEXT_LOCALE } from "@/const/app.const";
import VietNamFlag from "@/public/image/vietnam.png";
import UnitedKingdomFlag from "@/public/image/united-kingdom.png";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useState } from "react";
const ChangeLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const handleChangeLanguage = (value: string) => {
    router.push(pathname, { locale: value });
    Cookies.set(NEXT_LOCALE, value);
  };
  return (
    <div className={clsx("change-language cursor-pointer")}>
      {isMounted && Cookies.get(NEXT_LOCALE) === "en" && (
        <Image
          src={VietNamFlag}
          alt="vn"
          className="w-[24px]"
          onClick={() => handleChangeLanguage("vn")}
        />
      )}
      {isMounted && Cookies.get(NEXT_LOCALE) === "vn" && (
        <Image
          src={UnitedKingdomFlag}
          alt="en"
          className="w-[24px]"
          onClick={() => handleChangeLanguage("en")}
        />
      )}
    </div>
  );
};
export default ChangeLanguage;
