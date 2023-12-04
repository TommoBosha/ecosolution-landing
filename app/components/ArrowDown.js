import * as React from "react"

function ArrowDown(props) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={7} cy={7.5} r={7} fill="#173D33" />
      <g
        stroke="#173D33"
        strokeWidth={0.833607}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.276 8.31L7 10.333 4.723 8.31M7 4.667v5.61" />
      </g>
    </svg>
  )
}

export default ArrowDown