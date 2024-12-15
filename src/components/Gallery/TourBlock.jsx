export default function TourBlock({header, text}) {
    return (
        <div className="tour-block tokio-block">
            <div className="text-tours d-flex justify-content-center align-items-end">
                <div className="text-align">
                    <p className="block-text">{header}</p>
                    <p className="block-text text-red">{text}</p>
                </div>
            </div>
        </div>
    )
}