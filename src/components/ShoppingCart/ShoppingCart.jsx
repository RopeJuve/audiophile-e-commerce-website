import './_ShoppingCart.scss'
import Button from '../Button/Button'
import AddToCart from '../AddToCart/AddToCart'

const ShoppingCartItem = ({item}) => (
    <div className='f-row items'>
        <img src={item.img} alt='' />
        <div className='f-col'>
            <h6 className='h-cart'>{item.name}</h6>
            <p className='cl-black'>{item.price}</p>
        </div>
        <AddToCart price='' variant='cart' />
    </div>
)

const ShoppingCart = () => {
    return (
        <div className='shoppingCart__container'>
            <div className='shoppingCart__wrapper'>
                <div className='f-row'>
                    <h6>Cart</h6>
                    <Button variant='delete'>Remove all</Button>
                </div>
                <ShoppingCartItem item={{
                    name: 'XX99 MK II',
                    price: '$ 2,999',
                    img: './assets/cart/image-xx99-mark-two-headphones.jpg'
                }} />
                <ShoppingCartItem item={{
                    name: 'XX99 MK II',
                    price: '$ 2,999',
                    img: './assets/cart/image-xx99-mark-two-headphones.jpg'
                }} />
                <ShoppingCartItem item={{
                    name: 'XX99 MK II',
                    price: '$ 2,999',
                    img: './assets/cart/image-xx99-mark-two-headphones.jpg'
                }} />
                <div className='checkout__container'>
                    <div className='f-row'>
                        <p className='cl-black'>Total</p>
                        <strong>$ 0</strong></div>
                    <Button variant='checkout'>Checkout</Button>
                </div>

            </div>
        </div>
    )
}

export default ShoppingCart