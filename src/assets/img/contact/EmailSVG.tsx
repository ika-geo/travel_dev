import {SVGColor} from "../../style/SVGcolor";



const EmailSvg = () => {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.667 2.833A3.667 3.667 0 0 0 1 6.5v.368l11 5.924L23 6.87V6.5a3.667 3.667 0 0 0-3.667-3.667H4.667ZM23 8.951 12.434 14.64a.916.916 0 0 1-.868 0L1 8.95v8.55a3.667 3.667 0 0 0 3.667 3.666h14.666A3.667 3.667 0 0 0 23 17.5V8.95Z"
                fill={SVGColor}
            />
        </svg>
    );
};

export default EmailSvg;