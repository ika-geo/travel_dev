import CalendarIcon from "../../assets/img/home/CalendarIcon";
import PersonIcon from "../../assets/img/home/PersonIcon";
import {Link} from "react-router-dom";

import "./tourItem.css"


interface TourItemInterface {
    title: string,
    img:string,
    price:number,
    day:string,
    persons:any,
    text:string
}


const TourItem = (props:TourItemInterface) => {

    return (
        <div key={props.title} className="homeTours__item">
            <img className="full" src={require("../../FakeApi/images/"+props.img)} alt={props.title}/>
            <Link to={"../"+props.title} className="subTitle">{props.title}</Link>

            <div className="tourPrice">from
                <span className="coloredText">{props.price}$</span>
            </div>

            <div className="date__persons flexBetween">
                <div className="date flex">
                    <CalendarIcon/>
                    <p className="coloredText2">{props.day}</p>
                </div>
                <div className="persons flex">
                    <PersonIcon/>
                    <p className="coloredText2">
                        {typeof props.persons==="object"?props.persons[0] + "-" + props.persons[1]:typeof props.persons==="number"?props.persons:""}
                    </p>
                </div>
            </div>

            <p className="text">{props.text}</p>

        </div>
    );
};








export default TourItem;