import { useInView } from "framer-motion"
import React, { cloneElement, useRef } from "react";

const LayoutEffect = ({
    children,
    className,
    isInviewState: { trueState = "", falseState = "" }
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const child = React.isValidElement(children)
      ? cloneElement(children, {
          ref,
          className: `${children.props.className || ""} ${className || ""} ${
            isInView ? trueState : falseState
          }`
        })
      : children;
  
    return <>{child}</>;
  };

export default LayoutEffect;