import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Logo() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  const color = theme === "light" ? "#212B3F" : "#ccd0d9";

  if (!mounted) {
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      clipRule="evenodd"
      viewBox="0 0 512 512"
    >
      <defs>
        <path id="b" d="M512 377.76L262.24 128v249.76H512z"></path>
        <path id="d" d="M512 128L262.24 377.76V128H512z"></path>
        <path id="a" d="M249.76 377.76L0 128h249.76v249.76z"></path>
        <path id="c" d="M0 377.76L249.76 128H0v249.76z"></path>
      </defs>
      <g>
        <use fill={color} xlinkHref="#b"></use>
        <mask
          id="h"
          width="249.756"
          height="249.756"
          x="262.244"
          y="128"
          maskUnits="userSpaceOnUse"
        >
          <path d="M262.24 128H512V377.76H262.24z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#b"></use>
        </mask>
        <use
          fill="none"
          stroke={color}
          strokeLinejoin="miter"
          strokeWidth="12"
          mask="url(#h)"
          xlinkHref="#b"
        ></use>
        <g>
          <mask
            id="g"
            width="249.756"
            height="249.756"
            x="262.244"
            y="128"
            maskUnits="userSpaceOnUse"
          >
            <path d="M262.24 128H512V377.76H262.24z"></path>
            <use fill="#fff" fillRule="evenodd" xlinkHref="#d"></use>
          </mask>
          <use
            fill="none"
            stroke={color}
            strokeLinejoin="miter"
            strokeWidth="12"
            mask="url(#g)"
            xlinkHref="#d"
          ></use>
        </g>
        <g>
          <use fill={color} xlinkHref="#a"></use>
          <mask
            id="f"
            width="249.756"
            height="249.756"
            x="0"
            y="128"
            maskUnits="userSpaceOnUse"
          >
            <path d="M0 128H249.76V377.76H0z"></path>
            <use fill="#fff" fillRule="evenodd" xlinkHref="#a"></use>
          </mask>
          <use
            fill="none"
            stroke={color}
            strokeLinejoin="miter"
            strokeWidth="12"
            mask="url(#f)"
            xlinkHref="#a"
          ></use>
          <g>
            <mask
              id="e"
              width="249.756"
              height="249.756"
              x="0"
              y="128"
              maskUnits="userSpaceOnUse"
            >
              <path d="M0 128H249.76V377.76H0z"></path>
              <use fill="#fff" fillRule="evenodd" xlinkHref="#c"></use>
            </mask>
            <use
              fill="none"
              stroke={color}
              strokeLinejoin="miter"
              strokeWidth="12"
              mask="url(#e)"
              xlinkHref="#c"
            ></use>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Logo;
