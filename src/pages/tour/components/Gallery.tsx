import {useState} from "react";


const Gallery = ({img}: { img: string[] }) => {

    const [imageNumber, setImageNumber] = useState<number>(0)
    const [galleryView, setGalleryView] = useState<boolean>(false)

    function openGal(){
        setGalleryView(true)
    }

    function setMainImg(index: number){
        setImageNumber(index)
    }

    function closeGallery(){
        setGalleryView(false)
    }

    function prevImage(){
        if (imageNumber>0){
            setImageNumber(imageNumber-1)
        }
    }

    function nextImage(){
        if (imageNumber<img.length-1){
            setImageNumber(imageNumber+1)
        }
    }


    return (
        <div className="gallery">
            <div className="galleryBlock">
                <div className="img">
                    <img
                        onClick={openGal}
                        src={require("../../../FakeApi/images/" + img[imageNumber])}
                        alt=""/>
                </div>


                <div className="galleryItems grid4">
                    {img.map((item, index) =>
                        <div key={item} className="galleryItems__item">
                            <img
                                key={item}
                                onClick={() => setMainImg(index)}
                                src={require("../../../FakeApi/images/" + item)}
                                alt={item}/>
                        </div>
                    )}
                </div>
            </div>





            {/*open gallery*/}

            {galleryView &&
                <div className="galleryFixed">

                    <div className="galleryFixed__imgBlock">
                        <div onClick={closeGallery} className="close"></div>
                        <img src={require("../../../FakeApi/images/"+img[imageNumber])} alt=""/>
                    </div>


                    <div className="navigation">
                        <div
                            onClick={prevImage}
                            className={"prev"+(imageNumber===0?" disabled":"")}>
                        </div>
                        <div
                            onClick={nextImage}
                            className={"next"+(imageNumber===img.length-1?" disabled":"")}>
                        </div>




                    </div>


                </div>}

        </div>
    )

};

export default Gallery;