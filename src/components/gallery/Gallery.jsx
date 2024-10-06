
"use client";
import "./Gallery.css";
import TourBlock from "./tour-block";
import { useInView } from "react-intersection-observer";


export default function () {
    const { ref, inView, entry } = useInView({threshold: .5, triggerOnce: true});

    return (
        <section ref={ref} id="gallery" className="gallery">
            <div className="text-center w-100 main-text">
                <h1>the most popular tours</h1>
                {inView}
            </div>

            <div className={inView ? "tour-blocks" : 'd-none'}>
                <TourBlock className="tokio-block">
                    <p className="block-text">TOUR 01</p>
                    <p className="block-text text-red">TOKIO</p>
                </TourBlock>

                <TourBlock className="kyoto-block">
                    <p className="block-text">TOUR 02</p>
                    <p className="block-text text-red">KYOTO</p>
                </TourBlock>

                <TourBlock className="fuji-block">
                    <p className=" block-text">TOUR 03</p>
                    <p className="block-text text-red">MOUNT FUJIYAMA</p>
                </TourBlock>
                <TourBlock className="kamakura-block">
                    <p className=" block-text">TOUR 04</p>
                    <p className="block-text text-red">KAMAKURA</p>
                </TourBlock>
            </div>
            <div className="d-flex more-tours">
                <div>
                    <a className="a-in-block" href="">
                        <p className="more-tours-text">more tours</p>
                    </a>
                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <img className="arrow" src="/arrow-right.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
