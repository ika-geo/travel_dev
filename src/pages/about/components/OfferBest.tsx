interface Statistic{
    title: string,
    text: string,
}


const statistic: Statistic[] = [
    {
        title: "20+",
        text: "Years Experience"
    },
    {
        title: "100+",
        text: "Happy Customer"
    },
    {
        title: "15+",
        text: "Choice of Services"
    },
    {
        title: "10+",
        text: "Professional Guides"
    },


]

const OfferBest = () => {
    return (
        <div className="offerBest block">
            <div className="wrapper">
                <div className="offerBest__block grid2">

                    <div className="offerBest__img">
                        <img src={require('../../../assets/img/about/offerBest.png')} alt="offer"/>
                    </div>

                    <div className="offerBest__textBlock">
                        <p className="offerBest__topText opacityText">WELCOME TO OUR SITE!</p>
                        <h1 className="offerBest__title title">We Are The Center Of Lucca
                            To Offer You The Best</h1>
                        <p className="offerBest__text text">
                            We are right in the center of Lucca to offer you the real city life! With years of
                            experience in practically every tourism sector, with us you can find complete packages at
                            the lowest price, to travel and learn and have fun all without worries and without stress.
                            What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal
                            tour for you!
                        </p>

                        <div className="offerBest__statistics grid4">
                            {statistic.map(item =>
                                <div key={item.title} className="statistics__item">
                                    <h2 className="statistics__title coloredText">{item.title}</h2>
                                    <p className="statistics__text opacityText">{item.text}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferBest