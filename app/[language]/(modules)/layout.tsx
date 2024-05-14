"use client";
import CommonButton from "@/components/button";
import { PermPhoneMsg } from "@mui/icons-material";
import MenuLink from "@/components/common/MenuLink";
import { useMessages } from "next-intl";
import ThemeSwitch from "@/components/common/ThemeSwitch";
import ChangeLanguage from "@/components/common/ChangeLanguage";
import NotificationComponent from "@/components/common/notification";
import Profile from "@/components/common/profile";
const ModuleLayout = ({
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
    {
      href: "/training-exercise",
      label: "Training Exercise",
    },
  ];
  return (
    <div className="flex w-full">
      <div className="w-[260px] h-[100vh] font-bold text-[16px] flex flex-col justify-between">
        <div>
          <div className="text-2xl flex items-center justify-center p-4 h-[74px]">
            {t.LB_ET_MANAGEMENT.toString()}
          </div>
          <div className="h-[1px]"></div>
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
        <div className="flex flex-col items-center gap-2">
          <div className="pb-2">
            <CommonButton
              startIcon={<PermPhoneMsg />}
              className="w-full h-[40px]"
              label={t.LB_FEEDBACK_SUPPORT.toString()}
            />
          </div>
        </div>
      </div>
      <div className="w-[1px] bg-success-900"></div>
      <div className="w-[calc(100%-264px)] min-h-[100vh] h-full flex flex-col gap-1">
        <div className="w-full p-4 flex gap-10 items-center justify-end">
          <div className="flex gap-5 items-end">
            <ChangeLanguage />
            <ThemeSwitch />
            <NotificationComponent />
          </div>
          <div className="w-[1px] bg-success-900 h-10"></div>
          <Profile />
        </div>
        <div className="w-full bg-success-900 h-[1px]"></div>
        <div className="h-full min-h-[calc(100vh-81px)] p-4">{children}</div>
      </div>
    </div>
  );
};
export default ModuleLayout;
