"use client";

import "./Gallery.css";
import TourBlock from "@/components/Gallery/TourBlock.jsx";
import {useInView} from "react-intersection-observer";
import {useGalleryContext} from "@/providers/GalleryContextProvider";

export default function () {
    const {ref, inView, entry} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const {setShow} = useGalleryContext();
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    const fromDbData = [
        {id: 1, title: "Tour 01", city: "TOKIO"},
        {id: 1, title: "Tour 02", city: "KYOTO"},
        {id: 1, title: "Tour 03", city: "MOUNT FUJIYAMA"},
        {id: 1, title: "Tour 04", city: "KAMAKURA"},
    ];

    const cards = fromDbData.map(card => <TourBlock className="tokio-block" header={card.title} text={card.city}/>);

    return (
        <section ref={ref} id="gallery" className="gallery">
            <div className="text-center w-100 main-text">
                <h1>the most popular tours</h1>
                {inView}
            </div>

            <div className={inView ? "tour-blocks" : "d-none"}>
                {cards}
            </div>
            <div className="d-flex more-tours">
                <div>
                    <a className="a-in-block" href="">
                        <p className="more-tours-text">more tours</p>
                    </a>
                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <img className="arrow" src="/arrow-right.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}
