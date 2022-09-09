import React, {useState} from 'react';
import './Cart.css'

function Cart () {
    const [count, setCount] = useState(1);
    function decrementBtn() {
        if(count > 0)
        setCount(prevCount => prevCount - 1);
    }
    function incrementBtn() {
        setCount(prevCount => prevCount + 1)
    }
    return(
        <section>
        <div className='cart'>

            <div className='top-cart-wrap'>

            <div className='top-cart'>
                <div className='close-btn'>
                    <img src='https://i.ibb.co/2KdK80m/Vector-2.png' alt='close'/>
                </div>
                <div className='cart-title'>
                    <span className='top-cart-title'>Keranjang</span>
                    <span className='time-icon'>Delivery time: 30 min (3.2 km away)</span>
                </div>
            </div>

            <div className='items-cart'>
                <div className='items-cart-title'>
                    <p>Bubur Yoyong</p>
                </div>
                    <div className='calc-wrap'>
                        <div className='calc'>
                            <button onClick={decrementBtn} className='decrement'><img src='https://i.ibb.co/LZP0XJ4/Vector-3.png' alt='dec'/></button> <span>{count}</span> <button onClick={incrementBtn} className='increment'><img src='https://i.ibb.co/qCNCXJq/Vector-4.png' alt='inc'/></button>
                        </div>
                            <img className='food-items' src='https://i.ibb.co/YDQTj2H/Rectangle-2.png' alt='food'/>
                            <span className='food-name'>Bubur Sarang Telor Setengah Matang</span>
                            <span className='price'>28.000</span>
                    </div>
            </div>

            <div className='subtotal'>
                <div className='subtotal-head'>
                    <span className='subtotal-title'>Subtotal</span>
                    <span className='subtotal-price'>{28000 * count}</span>
                </div>
                <div className='subtotal-desc'>
                    <span>Delivery fee akan ditampilkan setelah checkout</span>
                    <span>-</span>
                </div>
            </div>

            </div>

            <div className='items-total'>
                <div className='items-total-wrap'>
                    <div className='items-cart-title'>
                        <span>Total</span>
                    </div>
                    <span className='total-price'>{28000 * count}</span>
                </div>
                <button className='total-btn'>Login untuk lanjut checkout</button>
            </div>

        </div>
        </section>
    )
}

export default Cart;