import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GlobeSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M12.975 15.283c.094-3.07.614-5.793 1.382-7.777.426-1.101.91-1.925 1.395-2.455.484-.53.894-.69 1.208-.69.314 0 .723.16 1.208.69.486.53.969 1.354 1.395 2.455.767 1.984 1.288 4.707 1.382 7.777h-7.97Zm-2 0H5c.41-4.966 3.843-9.075 8.455-10.48a12.115 12.115 0 0 0-.964 1.982c-.872 2.252-1.424 5.229-1.518 8.498Zm9.489-10.48c.362.586.683 1.255.964 1.982.872 2.252 1.424 5.229 1.518 8.498h5.973c-.41-4.966-3.843-9.075-8.455-10.48Zm.48 12.48c-.093 3.07-.614 5.793-1.381 7.777-.426 1.101-.91 1.924-1.395 2.455-.485.53-.894.69-1.208.69-.314 0-.724-.16-1.209-.69-.485-.53-.968-1.354-1.394-2.455-.768-1.984-1.288-4.707-1.382-7.777h7.97Zm2.002 0h5.973c-.41 4.966-3.843 9.074-8.455 10.48.362-.586.683-1.255.964-1.982.872-2.252 1.424-5.23 1.518-8.498Zm-9.49 10.48C8.844 26.357 5.41 22.25 5 17.283h5.973c.094 3.269.646 6.246 1.518 8.498.281.727.602 1.396.964 1.982Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GlobeSimpleFill.displayName = "GlobeSimpleFill";

export default GlobeSimpleFill;
