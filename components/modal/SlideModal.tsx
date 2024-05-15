
import withModal from "./WrappedModal";

const animationSettings = {
  from: { x: "100%", autoAlpha: 0 },
  to: { x: "200px", autoAlpha: 1, duration: 0.4, ease: "power3.out" },
  close: { x: "-100%", autoAlpha: 0, duration: 0.4, ease: "power3.in" },
  containerClass: "fixed right-0 bottom-0 w-[calc(100%-264px)] max-w-[calc(100%-264px)] bg-white rounded-lg shadow dark:bg-gray-700 dark:text-white z-50 top-[78px] left-[62px]"
};

export default withModal(animationSettings);