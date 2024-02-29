"use client";
import CommonButton from "@/components/button";
import {
  AccountBalance,
  FacebookOutlined,
  LocationSearching,
  PermPhoneMsg,
} from "@mui/icons-material";
import { Suspense } from "react";
import Loading from "./loading";
import MenuLink from "@/components/common/MenuLink";
import { useMessages } from "next-intl";
const ModuleLayout = async ({
  params: { language },
  children,
}: {
  params: { language: string };
  children: React.ReactNode;
}) => {
  const t = useMessages();
  const menuLink = [
    {
      href: "/exams/dashboard",
      label: "Exams",
      subLink: [
        {
          href: "/exams/dashboard",
          label: "Dashboard",
        },
        {
          href: "/exams/toeic",
          label: "Toeic",
        },
      ],
    },
    {
      href: "/analytics/dashboard",
      label: "Analytics",
    },
  ];
  const iconList = [
    <FacebookOutlined />,
    <LocationSearching />,
    <AccountBalance />,
  ];
  return (
    <div className="flex gap-1 w-full">
      <div className="w-[260px] bg-blue-100 h-[100vh] font-bold text-[16px] flex flex-col justify-between">
        <div>
          <div className="text-2xl flex items-center justify-center h-[70px]">
            {t.LB_ET_MANAGEMENT.toString()}
          </div>
          <div className="h-[1px] bg-slate-500"></div>
        </div>
        <div className="p-4 flex flex-col gap-2 h-full">
          {menuLink.map(({ href, label, subLink }) => (
            <MenuLink
              key={href}
              href={href}
              label={label}
              subLink={subLink}
              language={language}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2 p-4 h-[40px]">
            {iconList.map((item, index) => (
              <CommonButton key={index}>{item}</CommonButton>
            ))}
          </div>
          <div className="h-[1px] bg-slate-500"></div>
          <div className="pb-2">
            <CommonButton
              startIcon={<PermPhoneMsg />}
              className="w-full h-[40px]"
            >
              {t.LB_FEEDBACK_SUPPORT.toString()}
            </CommonButton>
          </div>
        </div>
      </div>
      <div className="w-[calc(100%-264px)] min-h-[100vh] h-full flex flex-col gap-1">
        <div className="w-full bg-blue-100 h-[70px]">{}</div>
        <div className="bg-slate-100 h-full min-h-[calc(100vh-74px)]">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
};
export default ModuleLayout;
