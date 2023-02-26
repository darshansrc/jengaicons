import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const NestjslogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          d="M18.165 7.684c-.437-.688-.297-1.141-.056-1.609.216-.419.304-1.147-.458-1.72.701-.258 1.81.198 1.828 1.035-.407.56-1.52.783-1.314 2.294Zm5.04 15.447c-.341 1.104-.186 1.692-1.668 3.985 2.62-1.769 3.857-4.053 4.265-6.645a8.66 8.66 0 0 1 .18 2.988c2.17-2.859 3.659-8.623-1.346-14.418-.201 2.561-2.678 4.578-5.535 3.787 4.898-.54 5.212-6.768 1.004-8.206.082 1.732-2.282 1.165-1.587 3.483-2.408-1.362-7.67-1.642-9.76.425-1.079 1.065-1.815 1.947-3.163 2.005-1.112.048-2.582 1.854-.67 2.777.183.77.824 1.208 1.196 1.283-.092 1.37.2.672.626.074-.143 1.732.093 1.109.763.217 5.663-1.145 8.791 3.474 8.827 6.31-.025-.514-.848-1.113-1.284-.948-.294.623-.614 1.152-1.01 1.413a4.436 4.436 0 0 0-.062-1.24c-.13.5-.376 1.02-.768 1.563-.781.043-1.874-.538-1.556-1.5.448-.937-.431-1.131-1.14-.863-.533.201-.892.759-.942.933-.177.625-.119 2.022 1.096 2.948-.318.059-.645.111-.868.242 2.067 1.25 4.176.828 5.351.356 1.923-.772 3.25-2.91 3.457-4.559a5.944 5.944 0 0 1-2.566 6.28c.613.064 1.811-.35 3.037-.788-.926 1.167-2.034 2.273-3.849 3.143 3.575-.3 6.19-2.094 7.971-5.045Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

NestjslogoFill.displayName = "NestjslogoFill";

export default NestjslogoFill;