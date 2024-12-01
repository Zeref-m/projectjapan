"use client";

import "./Gallery.css";
import TourBlock from "@/components/TourBlock/TourBlock.jsx";
import { useInView } from "react-intersection-observer";
import Modal from "@/components/ModalGallery/modal.jsx";
import {useState} from "react";
import context from "react-bootstrap/esm/AccordionContext";

export default function () {
    const { ref, inView, entry } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    let {setShow} = useContext(context)

    return (
        <section ref={ref} id="gallery" className="gallery">
            <div className="text-center w-100 main-text" onClick={}>
                <h1>the most popular tours</h1>
                {inView}
            </div>

            <div className={inView ? "tour-blocks" : "d-none"}>
                <TourBlock className="tokio-block" onClick={openModal}>
                    <p className="block-text">TOUR 01</p>
                    <p className="block-text text-red">TOKIO</p>
                </TourBlock>

                <TourBlock className="kyoto-block" onClick={openModal}>
                    <p className="block-text">TOUR 02</p>
                    <p className="block-text text-red">KYOTO</p>
                </TourBlock>

                <TourBlock className="fuji-block" onClick={openModal}>
                    <p className=" block-text">TOUR 03</p>
                    <p className="block-text text-red">MOUNT FUJIYAMA</p>
                </TourBlock>
                <TourBlock className="kamakura-block" onClick={openModal}>
                    <p className=" block-text">TOUR 04</p>
                    <p className="block-text text-red">KAMAKURA</p>
                </TourBlock>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div d-flex>
                        <div className='product-card'></div>
                        <h1></h1>
                        <p></p>
                        <button>book a tour</button>
                    </div>
                    
                </Modal>
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
