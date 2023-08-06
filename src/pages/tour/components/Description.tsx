


const Description = ({text}:{text:String}) => {
    return (
        <div className="tourDescription">
            <h2 className="subTitle">Details</h2>
            <p className="text">{text}</p>
        </div>
    );
};

export default Description;