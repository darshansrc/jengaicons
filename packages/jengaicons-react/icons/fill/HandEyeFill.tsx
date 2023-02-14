import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HandEyeFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M10.334 8.565a2.07 2.07 0 0 0-1.545.69c-.3.379-.478.857-.478 1.377v9.422c0 4.821 3.946 8.729 8.814 8.729 3.377 0 6.535-2.46 7.508-4.433.97-1.97.972-6.199.972-6.212l.002-.412c.01-1.274.016-2.072-.974-2.576a2.222 2.222 0 0 0-2.335.197v2.248a.5.5 0 0 1-1 0V8.65a1.722 1.722 0 0 0-3.444-.017v7.092a.5.5 0 1 1-1 0v-8.72a1.722 1.722 0 1 0-3.445 0V15.45a.5.5 0 1 1-1 0v-4.83a2.075 2.075 0 0 0-2.075-2.054Zm6.626 9.504c-2.656 0-4.25 2.022-4.822 2.904l-.003.004a1.296 1.296 0 0 0 0 1.39l.003.003c.571.883 2.166 2.905 4.822 2.905s4.251-2.022 4.823-2.905l.002-.003a1.295 1.295 0 0 0 0-1.39l-.002-.004c-.572-.882-2.167-2.904-4.823-2.904Zm-4.027 3.603c0-.056.016-.11.045-.157.535-.825 1.869-2.447 3.982-2.447 2.113 0 3.447 1.622 3.982 2.447a.295.295 0 0 1 0 .314c-.535.825-1.869 2.446-3.982 2.446-2.113 0-3.447-1.62-3.982-2.446a.296.296 0 0 1-.045-.157Zm4.027 1.164a1.164 1.164 0 1 0 0-2.328 1.164 1.164 0 0 0 0 2.328Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

HandEyeFill.displayName = "HandEyeFill";

export default HandEyeFill;
