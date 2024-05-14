import { useRef, useState } from "react";
import { useClickOutside } from "@/utils";
import CommonModal, { ICommonModal } from "./component/CommonModal";
const Modal = ({
  children,
  title = "",
  onClose = () => {},
  isFooter = true,
  customFooter,
  onSubmit = () => {},
  labelButtonCancel = "Cancel",
  labelButtonSubmit = "Submit",
}: Partial<ICommonModal>) => {
  const modalRef = useRef(null);
  const [opacity, setOpacity] = useState("bg-opacity-50");
  useClickOutside(modalRef, () => {
    handleClose();
  });

  const handleClose = () => {
    setOpacity("bg-opacity-0");
  };

  return (
    <dialog
      className={`modal fixed z-50 flex bg-black justify-center items-center w-full h-full md:inset-0 ${opacity}`}
      onClose={handleClose}
    >
      {
        <CommonModal
          title={title}
          onClose={handleClose}
          children={children}
          isFooter={isFooter}
          customFooter={customFooter}
          onSubmit={onSubmit}
          labelButtonCancel={labelButtonCancel}
          labelButtonSubmit={labelButtonSubmit}
        />
      }
    </dialog>
  );
};

export default Modal;
