import "./_InBox.scss";

const BoxItem = ({ quantity, itemName }) => (
  <div className="box-item">
    <p className="quantity">{quantity}x</p>
    <p className="item">{itemName}</p>
  </div>
);

const InBox = ({ box }) => {
  return (
    <div className="in-box__container">
      <h6>in the box</h6>
      {box.map((item, i) => (
        <BoxItem key={i} quantity={item.quantity} itemName={item.item} />
      ))}
    </div>
  );
};

export default InBox;
