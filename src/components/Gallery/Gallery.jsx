import "./_Gallery.scss";

const Gallery = ({ first, second, third }) => {
  return (
    <div className="gallery__container">
      <img src={first} alt="" />
      <img src={second} alt="" />
      <img src={third} alt="" />
    </div>
  );
};

export default Gallery;
