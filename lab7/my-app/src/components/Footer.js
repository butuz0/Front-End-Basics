import React, { useState } from "react";

function Footer() {
    const [imageWidth, setImageWidth] = useState(1000);
    const imageZoomIn = () => {
        setImageWidth((prevWidth) => prevWidth + 100);
    };
    const imageZoomOut = () => {
        setImageWidth((prevWidth) => prevWidth - 100);
    };

    const [imageVisible, setImageVisible] = useState(true);
    const imageDelete = () => {
        setImageVisible(false);
    };
    const imageAdd = () => {
        setImageVisible(true);
    };
    return (
        <div>
            <p>
                Гданськ — культурний, науковий та господарчий центр, а також потужний транспортний вузол Північної
                Польщі. Місто є великим портом на Балтійському морі, центр промисловості, зокрема нафтохімічної і
                машинобудування (розвинені суднобудування і судноремонт). Населення — 463 тисячі мешканців (6-те за
                розміром у Польщі). Разом із Гдинею і Сопотом утворює міську агломерацію — так зване Тримісто (пол.
                Trójmiasto, Труймясто) з населенням понад 1 мільйон мешканців. Історія міста налічує понад 1000 років,
                його ідентичність формувалася під впливом різних культур. Гданськ відомий як місто, з якого почалася
                Друга світова війна і розпочався занепад комунізму в Центральній Європі.
            </p>
            <div>
                <button onClick={imageAdd}>Додати</button>
                <button onClick={imageZoomIn}>Збільшити</button>
                <button onClick={imageZoomOut}>Зменшити</button>
                <button onClick={imageDelete}>Видалити</button>
            </div>

            <a href="https://www.gdansk.uw.gov.pl/" target="_blank" rel="noreferrer">
                {imageVisible && (
                    <img
                        src="https://zakavto.com.ua/images/data/Gdansk-1.jpg"
                        alt="Gdansk"
                        style={{ width: `${imageWidth}px` }}
                    />
                )}
            </a>
        </div>
    );
}

export default Footer;
