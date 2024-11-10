export default function TourBlock({children}){
    return(
        <a className="a-in-block" href="#">
            <div className="tour-block tokio-block">
                <div className="text-tours d-flex justify-content-center align-items-end">
                    <div className="text-align block-text">
                   {children}
                    </div>
                </div>
            </div>
        </a>
    )
}