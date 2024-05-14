import { ReactNode, useEffect, useRef, useState } from "react";
import { useClickOutside } from "@/utils";
import gsap from "gsap";
import FooterModal, { IFooterModal } from "./Footer";
import HeaderModal, { IHeaderModal } from "./Header";

export type ICommonModal = {
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
  );
};

export default CommonModal;
