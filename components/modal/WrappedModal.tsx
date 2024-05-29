import { ReactNode, useEffect, useRef, useState } from "react";
import { useClickOutside } from "@/utils";
import gsap from "gsap";
import HeaderModal, { IHeaderModal } from "./Header";
import FooterModal, { IFooterModal } from "./Footer";
import clsx from "clsx";

export type ICommonModal = {
  children: ReactNode;
  isFooter: boolean;
} & IFooterModal &
  IHeaderModal;

const withModal = (animationSettings: {
  from: any;
  to: any;
  close: any;
  containerClass: any;
}) => {
  return ({
    children,
    title = "",
    onClose = () => { },
    isFooter = true,
    customFooter,
    onSubmit = () => { },
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
        animationSettings.from,
        animationSettings.to
      );
    }, []);

    const handleClose = () => {
      setOpacity("bg-opacity-0");
      gsap.to(modalRef.current, {
        ...animationSettings.close,
        onComplete: onClose,
      });
    };

    return (
      <dialog
        className={`modal fixed z-50 flex bg-black justify-center items-center w-full h-full md:inset-0 ${opacity}`}
        onClose={handleClose}
      >
        <div
          className={`modal-container bg-white rounded-lg shadow dark:bg-gray-700 dark:text-white ${animationSettings.containerClass}`}
          ref={modalRef}
        >
          <HeaderModal title={title} onClose={handleClose} />
          <div className={clsx("p-4 md:p-5 space-y-4 overflow-y-scroll",
            isFooter ?
              'h-modal-footer min-h-modal-footer' :
              'h-modal min-h-modal')}
          >{children}</div>
          {isFooter && (
            <FooterModal
              onClose={handleClose}
              customFooter={customFooter}
              onSubmit={onSubmit}
              labelButtonCancel={labelButtonCancel}
              labelButtonSubmit={labelButtonSubmit}
            />
          )}
        </div>
      </dialog>
    );
  };
};

export default withModal;
