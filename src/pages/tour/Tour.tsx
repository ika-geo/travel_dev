import Info from "./components/Info";
import Description from "./components/Description";
import Gallery from "./components/Gallery";
import "../../assets/style/tour.css"

interface TourInterface {
    img: string[],
    title: string,
    price: number,
    day: string,
    persons: [number, number]|number,
    text: string,
    location: string
}


const Tour = ({item}:{item:TourInterface}) => {
    return (
        <div className="tour block">
            <div className="wrapper">
                <div className="tour__block">
                    <div className="tour__infoBlock grid2 block">
                        <Gallery img={item.img}/>
                        <Info item={item}/>
                    </div>
                    <Description text={item.text}/>
                </div>
            </div>
        </div>
    );
};

export default Tour;