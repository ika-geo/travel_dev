interface Api {
    img: string[],
    title: string,
    price: number,
    day: string,
    persons: [number, number]|number,
    text: string,
    location: string
}


export const someApi:Api[] = [
    {
        img: ["luccaBikeTour (1).jpg", "luccaBikeTour (2).jpg", "luccaBikeTour (3).jpg", "luccaBikeTour (4).jpg"],
        title: "Lucca Bike Tour",
        price: 30,
        day: "EVERY DAY",
        persons: [3, 10],
        text: `Lucca is one of the most cyclist-friendly cities in Italy, with a compact historic center and scenic bike path atop the medieval city walls. Explore its old town on two wheels with this self-guided bike tour through the town center. Follow the custom map to take in Lucca’s top sights at your own pace, stopping to read about the town’s history and main attractions in the map details.The meeting point for our Lucca Bike Tour is conveniently located in the (almost) car-free city center. From here, your English-speaking guide will take you on a little adventure and show you the city in an entertaining way. At a relaxed pace, you will pass the most beautiful sights and learn everything about the city’s history and culture. Discover the historical center, which still preserves the Roman street plan, and the Piazza San Michele, which occupies the site of the ancient forum. In addition, traces of the ancient amphitheatre may still be seen in the Piazza dell’Anfiteatro. An experienced guide will take you safely through the city, and will be at your disposal for questions any time!Do as the locals in Lucca do, and get around the city by bike. This half-day Lucca bike tour not only showcases the sights of the old town, but also the city’s food, too. During the ride, you’ll stop to savor a glass of wine along with regional treats such as cured meat and cheese, and learn about Tuscany from your guide. When you book, choose between a small-group tour or a private option just for your personal group.`,
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32555.03795459234!2d10.469723291919951!3d43.845754257805204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5839a50ed08ef%3A0x792a2692654dd9e1!2zNTUxMDAg0JvRg9C60LrQsCwg0JjRgtCw0LvQuNGP!5e0!3m2!1sru!2sge!4v1677605684916!5m2!1sru!2sge"
    },

    {
        img: ["WineTasting InTuscany (1).jpg", "WineTasting InTuscany (2).jpg", "WineTasting InTuscany (3).jpg", "WineTasting InTuscany (4).jpg"],
        title: "Wine tasting In Tuscany",
        price: 30,
        day: "monday",
        persons: 7,
        text: "Discover the many delights of Tuscany’s wine country on this small-group tasting tour from Florence. Travel along beautiful hillside roads through vineyards, olive groves and cypress trees. Visit 2 top-rated wineries in the famed Chianti Classico region, tour the cellars and learn how wine is produced using traditional methods. Taste different wines, along with olive oil and Tuscan specialties like fresh cheeses and bruschetta. Group size is limited to twenty-five participants for a more personalized experience.Experience the famous beauty and flavor of Italy’s Chianti wine region on this half-day tour from Florence. Travel through the rolling hills and vineyards of the Tuscan countryside, stopping at two estate wineries to taste authentic Chianti wines and snack on regional specialties like bruschetta and cheeseThe tasting at Cantalici is a way to immerse yourself in a family atmosphere to discover typical wines of the Chianti Classico production area, an experience that allows you to rediscover ancient flavors and the love for creating a product that contains the history of an entire family.",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33713.907670990055!2d10.789310546583508!3d43.47971377532285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a0f2ed52c6595%3A0x428516180c37c9bd!2z0JjRgtCw0LvQuNGPINCi0L7RgdC60LDQvdCw!5e0!3m2!1sru!2sge!4v1677605778314!5m2!1sru!2sge"

    },

    {
        img: ["CinqueTerreTour (1).jpg", "CinqueTerreTour (2).jpg", "CinqueTerreTour (3).jpg", "CinqueTerreTour (4).jpg"],
        title: "Cinque Terre Tour",
        price: 45,
        day: "TO BE DECIDED",
        persons: [2, 8],
        text: "Fall for the charm of the Cinque Terre, a coastal region of cliff-clinging villages and dramatic seaside views. On this full-day small-group tour, experience the scenic parts of the region with a driver-tour escort and learn about the UNESCO-listed region’s history. Take a boat ride between Manarola and Vernazza and get free time to explore both locations on foot. Make stops in local wine bars and restaurants to sip some regional varietals and eat a traditional Italian lunch (both at own expense). This tour operates with a limited number of participants to ensure an intimate atmosphere. Round-trip transportation from Florence is included.Watch the sun set over Cinque Terre with this small-group boat tour. You'll head out from the Monterosso Pier, passing by colorful villages such as Corniglia, Manarola, and Riomaggiore for photos along the way. You'll also stop in the village of Vernazza, where you'll have some time to explore before hopping back on your boat and heading back to Monterosso.",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.947232017838!2d9.611200115789163!3d44.166947127074806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4edc0ed7acccd%3A0x97b75dac324fcc92!2sCinque%20Terre!5e0!3m2!1sru!2sge!4v1677607852722!5m2!1sru!2sge"
    },

    {
        img: ["SienaAndSurrounding (1).jpg", "SienaAndSurrounding (2).jpg", "SienaAndSurrounding (3).jpg", "SienaAndSurrounding (4).jpg"],
        title: "Siena and Surroundings",
        price: 80,
        day: "TO BE DECIDED",
        persons: 2,
        text: "See all that Tuscany has to offer on this day trip to Pisa, Siena, and San Gimignano from Florence. Led by an expert guide, explore the main square and Gothic cathedral in Siena, followed by a traditional, 3-course lunch with wine. Afterward, enjoy free time to stroll the medieval streets of San Gimignano independently, as well as the city of Pisa, famous for its UNESCO-listed Leaning Tower. Your full day of sightseeing concludes with transportation back to Florence.Discover the delights of Tuscany on a private day trip from Florence. With a knowledgeable private driver, travel through the renowned Chianti wine region to visit the towns of Siena and San Gimignano. See famous landmarks like Siena’s Piazza del Campo, home to the annual Palio horserace, and the medieval hilltop towers of San Gimignano.Tuscany is world-renowned for its wine, so ensure you get an insider’s glimpse into the industry during a tasting tour of the vineyards surrounding Siena. Receive personalized attention in a small group limited to 12 as you visit a historical cellar and educate your palate to recognize subtle flavors with the help of a sommelier. Plus, a choice of morning or afternoon departure means you can slot this tour into even the busiest of sightseeing schedules.",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26827.48923090421!2d11.3151047017908!3d43.32427367720991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a2cbf34bf5313%3A0x5d731212f12343e3!2zNTMxMDAg0KHQuNC10L3QsCwg0JjRgtCw0LvQuNGP!5e0!3m2!1sru!2sge!4v1677605842474!5m2!1sru!2sge"

    },

    {
        img: ["TourOfTheLuccaHills (1).jpg", "TourOfTheLuccaHills (2).jpg", "TourOfTheLuccaHills (3).jpg", "TourOfTheLuccaHills (4).jpg"],
        title: "Tour of the Lucca Hills",
        price: 100,
        day: "TO BE DECIDED",
        persons: [1, 8],
        text: "Take a break from sightseeing and head to the hills surrounding Lucca to sample the area’s excellent wines. Connect with a winemaker at a boutique winery for a relaxed tour through the vineyards and cellar, with plenty of time to ask questions about the history and production of the local vintages. Then relax on the terrace overlooking the rolling countryside to sample the estate’s wines and olive oil while enjoying the view.Head to the Tuscan hills for a vineyard visit and wine tasting with your own private guide. Perfect if you don’t have much free time while in Lucca, this customizable experience can be tailored around your plans. Start with a pickup from Lucca, Pisa Airport, or Livorno Port, then travel in a private vehicle with your guide to a Tuscan vineyard where local wine, cheese, salami, and time-honored traditions await.Taste authentic Tuscan wine straight from the source on a relaxing half-day trip from Lucca. Travel by minivan through a serene landscape of rolling hills and vineyards, stopping at both a big-name winery and an organic family-run estate. Sample red, white and sweet wines, along with local products like extra-virgin olive oil. Learn about traditional wine production methods and see all the work that goes into making some of the world’s most coveted vino.",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22342.65947469313!2d10.520432496895603!3d43.90412893730051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5839a50ed08ef%3A0x792a2692654dd9e1!2zNTUxMDAg0JvRg9C60LrQsCwg0JjRgtCw0LvQuNGP!5e0!3m2!1sru!2sge!4v1677605947312!5m2!1sru!2sge"
    },

    {
        img: ["GardalAndVerona (1).jpg", "GardalAndVerona (2).jpg", "GardalAndVerona (3).jpg", "GardalAndVerona (4).jpg"],
        title: "Gardal and Verona",
        price: 60,
        day: "TO BE DECIDED",
        persons: [2,4],
        text: "Discover the best of the Italian Alps on this full-day Dolomites tour from Lake Garda. Hop into your air-conditioned coach from a range of different pickup points around Lake Garda, then spin into the pretty Dolomites with a guide. Visit traditional mountain towns like Moena or Cavalese, and take the Pordoi pass for fine views over peaks such as Catinaccio, Marmolada, and Sella. During your 11-hour tour, enjoy free time in the Alpine town of Ortisei and soak up the atmosphere among the peaks and valleys.Get a feel for the atmosphere of Verona on this short walking tour that covers the city center’s highlights. In addition to navigating, your guide offers trivia and stories often missed by visitors about each landmark on the itinerary, from one of the largest amphitheaters in Italy to the balcony that inspired Shakespeare’s Romeo and Juliet. Discover Verona’s gastronomy and the city highlights during this half-day tour. Stroll down the quaint streets of the historic city center and learn about the history and traditions of Verona. Tours are modified for each season and you visit historic eateries, wine bars, and restaurants. You also take a ride on the funicular to the highest part of the city for a stunning view of Verona.",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44802.6459368537!2d10.973301900468895!3d45.42616764938617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5f68699be0e3%3A0x53f85a636882595b!2z0JLQtdGA0L7QvdCwLCDQmNGC0LDQu9C40Y8!5e0!3m2!1sru!2sge!4v1677605988841!5m2!1sru!2sge"
    },

    {
        img: ["Pisa&Lucca (1).jpg", "Pisa&Lucca (2).jpg", "Pisa&Lucca (3).jpg", "Pisa&Lucca (4).jpg",],
        title: "Pisa & Lucca",
        price: 70,
        day: "TO BE DECIDED",
        persons: 5,
        text: "Get a comprehensive tour of Miracle Square on this walking excursion in Pisa. With a guide leading the way, you'll follow a carefully curated itinerary that ensures you hit all the landmarks such as the Cathedral and the Baptistery. This tour includes valuable skip-the-line entry to the Leaning Tower of Pisa, saving you tons of vacation time.Visit the interior of the Cathedral and Baptistery. Skip-the-line access to the Leaning Tower of Pisa. Experience the beauty of one of Italy’s most famous and photographed destinations on a small-group tour from Lucca to the colorful seaside villages of Cinque Terre. Admire the dramatic contours of the Ligurian coastline as you travel by train and boat between terraced fishing towns that spill down the rocky hillside to the shore. See for yourself why the entire area has been listed as a World Heritage site by UNESCO. Group size is limited for a more personalized tour.Small-group tour from Lucca to the UNESCO-listed villages of Cinque Terre Travel by train or by boat along the spectacular Ligurian coastline Stroll through picturesque seaside villages including Riomaggiore, Vernazza and Manarola.",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27437.5016167137!2d10.381448148819416!3d43.71029773185826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5919af0f6598f%3A0xaab80fb5a78478c8!2z0J_QuNC30LAsINCY0YLQsNC70LjRjw!5e0!3m2!1sru!2sge!4v1677606009825!5m2!1sru!2sge"
    },

    {
        img: ["venezia (1).jpg", "venezia (2).jpg","venezia (3).jpg","venezia (4).jpg"],
        title: "Venice",
        price: 25,
        day: "TO BE DECIDED",
        persons: [10, 20],
        text: "Just a few steps from some of the world’s greatest sights, Splendid Venice is a charming luxury hotel, as elegant as Venice itself. In the sixteenth century, it was an inn; today, it is a residence of rare refinement overlooking the canals and the Mercerie, the age-old streets, or calli, that link Piazza San Marco and the Rialto bridge. The sun sets on the Bridge of Sighs / the Ponte dei Sospiri . The gondolas glide by at the window. The old cafés in St Mark's Square /Piazza San Marco fill with life. A stay at the Splendid Venice offers this and so much more, with an atmosphere as intimate as a stately home, with spaces created for conversation, relaxation and contemplating Venice in all its splendor, in all its hidden corners. After a day exploring the countless wonders of this unique city, Splendid Venice is the ideal refuge; cosy, welcoming and, above all, suffused with warm, authentic, impeccable Italian hospitality. With a private mooring for boats, the hotel nestles in a central yet quiet location just a short stroll from some of the city's iconic landmarks. The 165 rooms and suites offer Venetian elegance at its finest. Many vaunt ",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58063.13913242562!2d12.36105428459465!3d45.463759220629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1daf1d63d89%3A0x7ba3c6f0bd92102f!2z0JLQtdC90LXRhtC40Y8sINCY0YLQsNC70LjRjw!5e0!3m2!1sru!2sge!4v1677606034538!5m2!1sru!2sge"
    },
]