import { ReactNode, useEffect, useRef } from "react";
import { useClickOutside } from "@/utils";
import gsap from "gsap";
import FooterModal, { IFooterModal } from "./component/Footer";
import HeaderModal, { IHeaderModal } from "./component/Header";

type ISlideModal = {
  children: ReactNode;
  isFooter: boolean;
} & IFooterModal &
  IHeaderModal;

const SlideModal = ({
  children,
  title = "",
  onClose = () => {},
  isFooter = true,
  customFooter,
  onSubmit = () => {},
  labelButtonCancel = "Cancel",
  labelButtonSubmit = "Submit",
}: Partial<ISlideModal>) => {
  const slideInRef = useRef(null);

  useClickOutside(slideInRef, () => {
    handleClose();
  });

  useEffect(() => {
    gsap.fromTo(
      slideInRef.current,
      { x: "100%", autoAlpha: 0 },
      { x: "200px", autoAlpha: 1, duration: 0.4, ease: "power3.out" }
    );
  }, []);

  const handleClose = () => {
    gsap.to(slideInRef.current, {
      x: "100%",
      autoAlpha: 0,
      duration: 0.4,
      ease: "power3.in",
      onComplete: onClose,
    });
  };

  return (
    <div
      className="modal-container fixed top-12 right-0 bottom-0 w-[calc(100%-264px)] max-w-[calc(100%-264px)] bg-white rounded-lg shadow dark:bg-gray-700 dark:text-white z-50"
      style={{ top: "78px", left: "62px" }}
      ref={slideInRef}
    >
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
  );
};

export default SlideModal;
