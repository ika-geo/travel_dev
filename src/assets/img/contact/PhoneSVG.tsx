import {SVGColor} from "../../style/SVGcolor";


const PhoneSvg = () => {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#a)">
                <path
                    d="M10.147 13.76a13.579 13.579 0 0 0 4.933 3.193l2.513-2a.447.447 0 0 1 .507 0l4.667 3.007a1.334 1.334 0 0 1 .22 2.12L20.8 22.24a2.667 2.667 0 0 1-2.42.713 23.393 23.393 0 0 1-11.433-6 22.526 22.526 0 0 1-6.18-11.22A2.52 2.52 0 0 1 1.5 3.367L3.767 1.18a1.333 1.333 0 0 1 2.08.213L8.953 6a.42.42 0 0 1 0 .5L6.907 8.96c.71 1.82 1.817 3.46 3.24 4.8Z"
                    fill={SVGColor}
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default PhoneSvg;