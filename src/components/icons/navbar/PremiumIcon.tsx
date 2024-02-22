import * as React from "react";
import {SVGProps} from "react";

const PremiumIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
        className="relative m-auto w-5 h-5 "
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m3 8 1.443 8.658A4 4 0 0 0 8.389 20h7.223a4 4 0 0 0 3.945-3.342L21 8M3 8l3.756 3.073A2 2 0 0 0 9.71 10.6L12 7M3 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm18 0-3.756 3.073a2 2 0 0 1-2.954-.474L12 7m9 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
    </svg>
)
export default PremiumIcon
