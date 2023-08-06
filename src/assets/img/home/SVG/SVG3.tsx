import {SVGColor} from "../../../style/SVGcolor";

const Svg3 = () => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 3c.4.598 1.145 1 2 1s1.6-.402 2-1c.3-.598.859-1 1.5-1s1.2.402 1.5 1c.4.598 1.145 1 2 1s1.6-.402 2-1c.3-.598.859-1 1.5-1s1.2.402 1.5 1c.4.598 1.145 1 2 1s1.6-.402 2-1v18c-.4-.598-1.145-1-2-1s-1.6.402-2 1c-.3.598-.859 1-1.5 1s-1.2-.402-1.5-1c-.4-.598-1.145-1-2-1s-1.6.402-2 1c-.3.598-.859 1-1.5 1s-1.2-.402-1.5-1c-.4-.598-1.145-1-2-1s-1.6.402-2 1V3Z"
                stroke={SVGColor}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle
                cx={8.5}
                cy={9.5}
                r={1.5}
                stroke={SVGColor}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle
                cx={15.5}
                cy={15.5}
                r={1.5}
                stroke={SVGColor}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="m17 8-9 8"
                stroke={SVGColor}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Svg3;