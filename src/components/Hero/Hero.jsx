import "./_Hero.scss";


const Hero = () => {
  return (
    <div className="hero__container">
      <img src='./assets/home/mobile/image-header.jpg' alt="hero img" />
      <div className="hero__container-prod-content">
        <div className="overline">new Product</div>
        <h2>xx99 mark ii headphones</h2>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button>See Product</button>
      </div>
    </div>
  );
};

export default Hero;
