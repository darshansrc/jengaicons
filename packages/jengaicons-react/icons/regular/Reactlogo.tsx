import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Reactlogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          fillRule="evenodd"
          d="M8.267 12.26c.256-.088.513-.168.773-.243-.043-.174-.083-.349-.12-.525-.585-2.827-.202-5.105 1.104-5.854 1.252-.72 3.3.03 5.367 1.823.204.177.403.359.598.546.13-.125.263-.247.398-.366 2.167-1.917 4.34-2.724 5.644-1.972 1.25.72 1.621 2.862 1.095 5.542-.053.265-.112.53-.178.791.308.087.604.18.888.279C26.377 13.163 28 14.546 28 15.98c0 1.481-1.742 2.967-4.389 3.868-.214.073-.43.14-.649.202.071.282.134.567.189.853.502 2.633.11 4.724-1.138 5.44-1.288.74-3.45-.02-5.557-1.853a13.6 13.6 0 0 1-.5-.46c-.211.202-.427.399-.65.59-2.039 1.747-4.053 2.453-5.3 1.735-1.287-.742-1.705-2.988-1.162-5.72.041-.21.09-.423.144-.64-.152-.044-.301-.09-.447-.139C5.79 18.95 4 17.482 4 15.98c0-1.44 1.675-2.832 4.267-3.72Zm.864 6.52c.126.04.256.081.388.12.292-.922.687-1.902 1.17-2.915-.461-.988-.84-1.956-1.125-2.872-.236.069-.465.14-.686.216-2.138.733-3.442 1.817-3.442 2.651 0 .89 1.408 2.045 3.695 2.8Zm.949 1.872c-.231 1.163-.264 2.214-.111 3.036.137.739.414 1.231.756 1.428.728.42 2.285-.125 3.964-1.564.193-.165.386-.342.58-.528a23.117 23.117 0 0 1-1.935-2.449 23.12 23.12 0 0 1-3.13-.48c-.046.19-.088.375-.124.557Zm9.595 4.392c.711.25 1.277.257 1.62.06.729-.418 1.031-2.034.618-4.201-.049-.256-.105-.511-.168-.764-.947.208-1.994.358-3.114.449-.639.896-1.308 1.719-1.983 2.44.144.138.29.273.44.404.897.78 1.795 1.333 2.587 1.612Zm3.332-6.27c1.126-.384 2.057-.882 2.694-1.426.573-.488.863-.974.863-1.367 0-.838-1.255-1.907-3.346-2.633-.263-.09-.528-.174-.795-.25-.29.937-.669 1.916-1.126 2.906.463 1.005.848 2 1.14 2.947.191-.054.381-.113.57-.177ZM21.89 11.2c.434-2.21.146-3.876-.58-4.295-.773-.445-2.482.19-4.283 1.783-.115.102-.23.208-.346.319a23.577 23.577 0 0 1 1.967 2.425c1.087.1 2.127.261 3.083.477.059-.235.112-.471.159-.709Zm-9.965 2.45c.226-.388.46-.771.703-1.15-.738.093-1.444.216-2.107.367.2.635.447 1.3.74 1.981.213-.403.435-.803.664-1.197ZM15.99 9.71c-.455.491-.911 1.04-1.36 1.634.91-.042 1.821-.043 2.73 0a21.727 21.727 0 0 0-1.37-1.634Zm4.09 3.948c.226.392.444.789.651 1.19.288-.679.534-1.346.735-1.99a22.348 22.348 0 0 0-2.095-.359c.245.381.482.768.708 1.16Zm-.73 5.874c.757-.084 1.47-.198 2.13-.341a21.992 21.992 0 0 0-.75-2.031 28.83 28.83 0 0 1-1.38 2.372Zm-3.388 2.789c.468-.503.935-1.059 1.39-1.657a34.601 34.601 0 0 1-2.746-.005c.45.61.904 1.166 1.356 1.662Zm-4.71-5.197c-.309.701-.569 1.38-.776 2.024.67.153 1.393.275 2.155.366a31.264 31.264 0 0 1-1.38-2.39Zm1.525.729c.35.605.72 1.199 1.108 1.78.686.05 1.394.074 2.116.074.719 0 1.418-.022 2.091-.066a27.834 27.834 0 0 0 2.115-3.637 27.597 27.597 0 0 0-2.103-3.63 28.086 28.086 0 0 0-4.21 0 29.58 29.58 0 0 0-1.114 1.77c-.352.605-.684 1.22-.996 1.846.309.632.64 1.254.993 1.862ZM10.74 6.876c-.773.444-1.074 2.236-.588 4.586.032.153.066.305.104.457.958-.22 1.999-.384 3.088-.486a23.12 23.12 0 0 1 1.953-2.427c-.173-.166-.35-.328-.531-.485-1.706-1.478-3.3-2.062-4.026-1.645Zm3.117 9.103c0-1.179.96-2.135 2.143-2.135 1.183 0 2.143.956 2.143 2.135 0 1.178-.96 2.134-2.143 2.134a2.139 2.139 0 0 1-2.143-2.134Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Reactlogo.displayName = "Reactlogo";

export default Reactlogo;