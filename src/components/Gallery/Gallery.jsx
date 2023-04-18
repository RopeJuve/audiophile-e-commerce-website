import "./_Gallery.scss";

const Gallery = ({ first, second, third }) => {
  return (
    <div className="gallery__container">
      <img className="image1" src={first} alt="" />
      <img className="image2" src={second} alt="" />
      <img className="image3" src={third} alt="" />
    </div>
  )
};

export default Gallery;
