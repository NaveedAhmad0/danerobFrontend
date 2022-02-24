import React, { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
const Modal = ({ children, show, onShow, sizeAuto = true }) => {
  const transition = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      if (typeof window !== "undefined") {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return windowSize;
  }
  const size = useWindowSize();
  return transition(
    (style, render) =>
      render && (
        <animated.div style={style} className="app-modal">
          <div className="app-modal-row">
            <div
              className="app-modal-card"
              style={{
                height: sizeAuto ? "auto" : size.height,
                overflow: "auto",
              }}
            >
              {children}
            </div>
          </div>
        </animated.div>
      )
  );
};

export default Modal;
