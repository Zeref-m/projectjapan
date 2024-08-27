import "./Gallery.css"

export default function () {
    return (
        <section id="gallery" className="gallery">
            <div className="text-center w-100 main-text">
                <h1>the most popular tours</h1>
            </div>

            <div className="d-flex justify-content-between tour-blocks">
                <a className="a-in-block" href="#">
                <div className="tour-block">
                    <img src="" alt="" />
                    <div className="text-tours d-flex justify-content-center align-items-end">
                        <div className="text-align block-text">
                        <p className="text-red block-text">TOUR 01</p>
                        <p>TOKIO</p>
                        </div>
                    </div>
                </div>
                </a>
            

                <a className="a-in-block" href="#">
                    <div className="tour-block">
                    <img src="" alt="" />
                    <div className="text-tours d-flex justify-content-center align-items">
                        <div className="text-align">
                        <p className="text-red block-text">TOUR 02</p>
                        <p className="block-text" >KYOTO</p>
                        </div>
                    </div>
                    </div>    
                </a>
            

                <a className="a-in-block" href="#">
                    <div className="tour-block">
                    <img src="" alt="" />
                    <div className="text-tours d-flex justify-content-center align-items-end">
                        <div className="text-align">
                        <p className="text-red block-text">TOUR 03</p>
                        <p className="block-text" >MOUNT FUJIYAMA</p>
                        </div>
                    </div>
                    </div>    
                </a>
            

                <a className="a-in-block" href="#">
                    <div className="tour-block">
                    <img src="" alt="" />
                    <div className="text-tours d-flex justify-content-center align-items-end">
                        <div className="text-align">
                        <p className="text-red block-text">TOUR 04</p>
                        <p className="block-text" >KAMAKURA</p>
                        </div>
                    </div>
                    </div>    
                </a>
            
            </div>

            <div className="d-flex more-tours">
                <div><a className="a-in-block" href=""><p className="more-tours-text">more tours</p></a></div>
                <div className="d-flex align-items-center">
                    <div><img className="arrow" src="/arrow-right.png" alt="" /></div>
                </div>
            </div>
        </section>
    )
}