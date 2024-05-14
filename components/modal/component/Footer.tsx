import CommonButton from "@/components/button";
import { ReactNode } from "react";

export type IFooterModal = {
  onClose: () => void;
  customFooter: ReactNode;
  onSubmit: () => void;
  labelButtonCancel: string;
  labelButtonSubmit: string;
};
const FooterModal = ({
  onClose = () => {},
  customFooter,
  onSubmit = () => {},
  labelButtonCancel = "Cancel",
  labelButtonSubmit = "Submit",
}: IFooterModal) => {
  return (
    <div className="flex items-center justify-end width-full p-4 md:p-5 border-t border-default-200 rounded-b">
      {customFooter ? (
        customFooter
      ) : (
        <div className="flex gap-2">
          <CommonButton
            label={labelButtonCancel}
            variant="outlined"
            onClick={onClose}
          />
          <CommonButton label={labelButtonSubmit} onClick={onSubmit} />
        </div>
      )}
    </div>
  );
};
export default FooterModal;
