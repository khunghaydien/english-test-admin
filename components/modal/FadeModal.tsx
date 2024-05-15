import withModal from "./WrappedModal";

const animationSettings = {
  from: { autoAlpha: 0, y: -50 },
  to: { autoAlpha: 1, duration: 0.4, y: 0, ease: "power3.out" },
  close: { autoAlpha: 0, duration: 0.4, y: 50, ease: "power1.in" },
  containerClass: ""
};

export default withModal(animationSettings);