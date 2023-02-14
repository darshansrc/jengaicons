import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BugFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M8.684 14.379c0-.584.062-1.154.18-1.702a.996.996 0 0 1-.367-.126l-2.788-1.609a1 1 0 0 1 1-1.732l2.788 1.61.013.007a8.028 8.028 0 0 1 14.522.256c.06-.06.129-.112.205-.156l2.974-1.717a1 1 0 0 1 1 1.732l-2.974 1.717a.996.996 0 0 1-.659.12c.105.518.16 1.052.16 1.6v.904h4.222a1 1 0 0 1 0 2h-4.223v-2H8.684v-.904Zm0 2.904H4.96a1 1 0 0 1 0-2h3.724v2Zm.825 4.452a8.03 8.03 0 0 0 6.451 4.444v-8.896H8.684v.904c0 .594.065 1.173.187 1.73a.996.996 0 0 0-.434.132l-2.728 1.575a1 1 0 0 0 1 1.732l2.728-1.575a.999.999 0 0 0 .072-.046Zm8.451-4.452h6.777v.904c0 .548-.054 1.082-.159 1.599a.996.996 0 0 1 .66.121l2.973 1.717a1 1 0 1 1-1 1.732l-2.974-1.717a.998.998 0 0 1-.205-.156 8.037 8.037 0 0 1-6.072 4.634v-8.834Zm-2.655-4.724a1.241 1.241 0 1 1-2.483 0 1.241 1.241 0 0 1 2.483 0Zm5.793 0a1.241 1.241 0 1 1-2.483 0 1.241 1.241 0 0 1 2.483 0Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

BugFill.displayName = "BugFill";

export default BugFill;
