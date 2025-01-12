
export default function TourBlock({ header, text, onClick, image }) {
    return (
      <div
        className="tour-block"
        onClick={onClick}
        style={{ backgroundImage: `url(${image})` }} // Устанавливаем фоновое изображение
      >
        <div className="text-tours d-flex justify-content-center align-items-end">
          <div className="text-align">
            <p className="block-text">{header}</p>
            <p className="block-text text-red">{text}</p>
          </div>
        </div>
      </div>
    );
  }
