interface Item{
    title:string,
    price:number,
    persons: number[]|number,
    location:string
}

const Info = ({item}:{item:Item}) => {
    return (
        <div className="infoBlock">
            <h1 className="title">{item.title}</h1>
            <p className="price">From <span className="coloredText">{item.price} $</span></p>
            <p className="persons">Persons <span className="coloredText">{typeof item.persons==="object"?item.persons[0] + "-" + item.persons[1]:typeof item.persons==="number"?item.persons:""}</span></p>
            <button className="button">Choose Tour</button>
            <div className="map">
                <iframe
                    title={item.title}
                    src={item.location}
                    style={{border:0}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Info;