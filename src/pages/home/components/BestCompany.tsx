interface Rate{
    title: number
    text: string
}


const rateObject: Rate[] = [
    {
        title: 20,
        text: "Years Experience"
    },
    {
        title: 100,
        text: "Happy Customer"
    },
    {
        title: 15,
        text: "Choice of Services"
    },
    {
        title: 10,
        text: "Professional Guides"
    },

]


const BestCompany = () => {
    return (
        <div className="bestCompany block">
            <div className="wrapper">
                <div className="bestCompany__block grid2">
                    <div className="bestCompany__img">
                        <img src={require("../../../assets/img/home/bestCompany.png")} alt="best company"/>
                    </div>
                    <div className="bestCompany__textBlock">
                        <p className="opacityText">WELCOME TO OUR SITE!</p>
                        <h1 className="title">We are the best company for your visit</h1>
                        <p className="text">After decades of experience, and a whole life in Lucca, we offer you the
                            most complete tourism service in the city. In addition to having bikes and rickshaws to have
                            as much fun as you want, you have the choice of tour guides with whom to tour and drivers
                            for your every need! We offer packages in the way that you get the most at the lowest price.
                            Book with us and we will always be available for you!</p>

                        <ul className="bestCompany_rates grid4">
                            {rateObject.map(item=>
                                <li key={item.title} className="bestCompany_rateItem">
                                    <h2 className="rateItem__title coloredText">{item.title}</h2>
                                    <p className="rateItem__text opacityText">{item.text}</p>
                                </li>
                            )}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestCompany;