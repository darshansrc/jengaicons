import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const NumberSquareTwoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.96 4.283a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-22a1 1 0 0 0-1-1h-22Zm8.836 8.06a2.26 2.26 0 0 1 4.175 1.2c0 .27-.03.43-.222.756l.001-.003-.003.006a20.624 20.624 0 0 1-.264.37c-.171.231-.402.54-.673.9-.542.721-1.239 1.639-1.929 2.544-.69.904-1.37 1.793-1.88 2.457l-.613.8-.171.222-.045.059-.012.014-.003.004v.001l.792.61-.793-.61a1 1 0 0 0 .793 1.61h6.022a1 1 0 0 0 0-2h-3.994c.444-.58.967-1.263 1.494-1.955a496.19 496.19 0 0 0 1.938-2.553c.273-.363.508-.68.686-.921.158-.216.312-.428.38-.544.365-.623.496-1.13.496-1.768a4.26 4.26 0 0 0-7.869-2.263 1 1 0 1 0 1.694 1.064Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

NumberSquareTwoFill.displayName = "NumberSquareTwoFill";

export default NumberSquareTwoFill;
