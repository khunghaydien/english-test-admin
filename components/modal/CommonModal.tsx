import { ReactNode, useEffect, useRef, useState } from "react";
import { useClickOutside } from "@/utils";
import gsap from "gsap";
import FooterModal, { IFooterModal } from "./component/Footer";
import HeaderModal, { IHeaderModal } from "./component/Header";

type ICommonModal = {
  children: ReactNode;
  isFooter: boolean;
} & IFooterModal &
  IHeaderModal;
const CommonModal = ({
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

  useEffect(() => {
    gsap.fromTo(
      modalRef.current,
      {
        autoAlpha: 0,
      },
      { autoAlpha: 1, duration: 0.4 }
    );
  }, []);

  const handleClose = () => {
    setOpacity("bg-opacity-0");
    gsap.to(modalRef.current, {
      duration: 0.4,
      autoAlpha: 0,
      y: 50,
      ease: "power1.in",
      onComplete: () => {
        onClose();
      },
    });
  };

  return (
    <dialog
      className={`modal fixed z-50 flex bg-black justify-center items-center w-full h-full md:inset-0 ${opacity}`}
      onClose={handleClose}
    >
      <div
        className="modal-container relative p-4 w-full max-w-2xl max-h-full"
        ref={modalRef}
      >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 dark:text-white">
          <HeaderModal title={title} onClose={onClose} />
          <div className="p-4 md:p-5 space-y-4">{children}</div>
          {isFooter && (
            <FooterModal
              onClose={onClose}
              customFooter={customFooter}
              onSubmit={onSubmit}
              labelButtonCancel={labelButtonCancel}
              labelButtonSubmit={labelButtonSubmit}
            />
          )}
        </div>
      </div>
    </dialog>
  );
};

export default CommonModal;
