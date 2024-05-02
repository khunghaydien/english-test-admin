import { ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";
type ICommonModal = {
  children: ReactNode;
  title: string;
};
const CommonModal = ({ children, title }: Partial<ICommonModal>) => {
  return (
    <div className="common-modal">
      <div className="flex justify-space-between items-center">
        <div>{title}</div>
        <CloseIcon />
      </div>
      {children}
      <div className=""></div>
    </div>
  );
};

export default CommonModal;
