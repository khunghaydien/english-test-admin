import { ReactNode, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useClickOutside } from "@/utils";
import CommonButton from "../button";
type ICommonModal = {
  children: ReactNode;
  title: string;
  onClose: () => void;
  isFooter: boolean;
  customFooter: ReactNode;
  onSubmit: () => void;
  labelButtonCancel: string;
  labelButtonSubmit: string;
};
const CommonModal = ({
  children,
  title,
  onClose = () => {},
  isFooter = true,
  customFooter,
  onSubmit = () => {},
  labelButtonCancel = "Cancel",
  labelButtonSubmit = "Submit",
}: Partial<ICommonModal>) => {
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => {
    onClose();
  });
  return (
    <dialog
      className="fixed z-50 flex bg-black bg-opacity-50 justify-center items-center w-full h-full md:inset-0"
      onClose={onClose}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full" ref={modalRef}>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 dark:text-white">
          <div className="flex items-center justify-between p-4 md:p-5 border-b border-default-200 rounded-t font-bold">
            {title?.toUpperCase()}
            <CloseIcon onClick={onClose} className="cursor-pointer" />
          </div>
          <div className="p-4 md:p-5 space-y-4">{children}</div>
          {isFooter && (
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
          )}
        </div>
      </div>
    </dialog>
  );
};

export default CommonModal;
