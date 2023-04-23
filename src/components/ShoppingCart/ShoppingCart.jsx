import './_ShoppingCart.scss'
import Button from '../Button/Button'
import AddToCart from '../AddToCart/AddToCart'

const ShoppingCartItem = ({ item }) => {



    return (
        <div className='f-row items'>
            <img src={item.imgUrl} alt='' />
            <div className='f-col'>
                <h6 className='h-cart'>{item.name}</h6>
                <p className='cl-black'>$ {item.price * item.quantity}</p>
            </div>
            <AddToCart price='' variant='cart' quantity={item.quantity} />
        </div>
    )
}

const ShoppingCart = () => {

    let total = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

    return (
        <div className='shoppingCart__container'>
            <div className='shoppingCart__wrapper'>
                <div className='f-row'>
                    <h6>Cart</h6>
                    <Button variant='delete' onClick={() => window.localStorage.setItem('cartItems', '[]')}>Remove all</Button>
                </div>
                {cartItems?.map((item, index) => (
                    <ShoppingCartItem key={index} item={item} />
                ))}
                <div className='checkout__container'>
                    <div className='f-row'>
                        <p className='cl-black'>Total</p>
                        <strong>$ {total}</strong></div>
                    <Button variant='checkout'>Checkout</Button>
                </div>

            </div>
        </div>
    )
}

export default ShoppingCart