import React, { useEffect, useState } from "react";
import gsap from "gsap";

import "./AnimationModal.scss";

const AnimationModal: React.FC = () => {
  const [slideModalBottomToggle, setSlideModalBottomToggle] =
    useState<boolean>(false);
  useEffect(() => {
    gsap.set(".SlideModalBottom", { autoAlpha: 0, y: 50 });
    gsap.set(".modalOverlay", { autoAlpha: 0 });
  }, []);

  const handleQuickLinksTradeClick = () => {
    const quickLinksTradeBTN = document.getElementById("quickLinksTradeBTN");
    if (!quickLinksTradeBTN) return;
    const rect = quickLinksTradeBTN.getBoundingClientRect();
    const tl = gsap.timeline();
    tl.to(".modalOverlay", {
      duration: 0.3,
      height: window.innerHeight,
      width: window.innerWidth,
      x: 0,
      y: 0,
      autoAlpha: 1,
    }).to(
      ".SlideModalBottom",
      { duration: 0.5, autoAlpha: 1, y: 0, ease: "power1.inOut" },
      "-=0.3"
    );
    setSlideModalBottomToggle(true);
    const modelBottomLabel = document.getElementById("modelBottomLabel");
    if (modelBottomLabel) modelBottomLabel.innerHTML = "Modal Content Here";
  };

  const handleModalOverlayClick = () => {
    if (slideModalBottomToggle) {
      gsap.to(".SlideNavLeft", { duration: 0.5, x: 0, ease: "power1.inOut" });
      gsap.to(".SlideNavRight", { duration: 0.5, x: 0, ease: "power1.inOut" });
      gsap.to(".SlideModalBottom", {
        duration: 0.4,
        autoAlpha: 0,
        y: 50,
        ease: "power1.inOut",
      });
      gsap.to(".modalOverlay", {
        duration: 0.5,
        autoAlpha: 0,
        ease: "power1.inOut",
      });
      setSlideModalBottomToggle(false);
    }
  };

  return (
    <>
      <div
        className="modalOverlay"
        id="modalOverlay1"
        onClick={handleModalOverlayClick}
      >
        <div className="SlideModalBottomContainer">
          <div className="SlideModalBottom">
            <div id="modelBottomLabel">Modal</div>
          </div>
        </div>
      </div>

      <div className="summaryQuickLinksBTNS">
        <div className="summaryQuickLinksBTNSContainer">
          <div
            id="quickLinksTradeBTN"
            className="btnOutline"
            onClick={handleQuickLinksTradeClick}
          >
            Button
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimationModal;
