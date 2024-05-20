import withModal from "./WrappedModal";

const animationSettings = {
  from: { x: "-100%", autoAlpha: 0 },
  to: { x: 0, autoAlpha: 1, duration: 0.4, ease: "power3.out" },
  close: { x: "100%", autoAlpha: 0, duration: 0.4, ease: "power3.in" },
  containerClass:
    "fixed right-0 bottom-0 top-0 left-0 w-full max-w-full bg-white rounded-lg shadow dark:bg-gray-700 dark:text-white z-50 ",
};

export default withModal(animationSettings);
