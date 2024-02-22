import * as React from "react";
import {SVGProps} from "react";

const FormationIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9 13h4m-4 4h6M13.071 2.53v4.303a2 2 0 0 0 2 2h4.278M13.071 2.53c-.34-.02-.697-.029-1.071-.029-5.735 0-7.5 2.235-7.5 9.5 0 7.265 1.765 9.5 7.5 9.5s7.5-2.235 7.5-9.5c0-1.185-.047-2.237-.15-3.167M13.07 2.53l6.278 6.304"
        />
    </svg>
)
export default FormationIcon
