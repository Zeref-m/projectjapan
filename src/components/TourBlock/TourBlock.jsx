export default function TourBlock({children}){
    return(
        <a className="a-in-block" href="@/components/TourBlock/tour-block.jsx#">
            <div className="tour-block tokio-block">
                <img src="@/components/TourBlock/tour-block.jsx" alt="" />
                <div className="text-tours d-flex justify-content-center align-items-end">
                    <div className="text-align block-text">
                   {children}
                    </div>
                </div>
            </div>
        </a>
    )
}