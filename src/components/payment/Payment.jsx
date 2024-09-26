import React from 'react'
import './Payment.css';
import { useSelector } from 'react-redux';
const Payment = () => {
    const price = useSelector(state=>state.priceInfo.prico);
    console.log("order page "+ price);
    return (
        <div className='cart-comp' style={{backgroundColor:'orange',height:'78vh'}}>
            <div class="preloader">
                {/* <p>Transferring you to payment</p> */}
            </div>
            <div class="container-body">
                <div className='cartt'>
                    <div class="payment-price">
                        <h1>${price}</h1>
                        {/* <p >Readymade</p> */}
                    </div>
                    <div className="payment-details">
                        <p style={{paddingLeft:'70px'}}>Credit Card Details</p>
                        <p><input type="number"  required placeholder="Account Number" /></p>
                        <select >
                            <option>Expiry Month</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                        <select >
                            <option>Expiry Year</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                        </select>
                        <input type="number"  placeholder="eg. 123" />
                        <p>3 or 4 digits found on the signature strip</p>
                        <div class="bottom-buttons">
                            <div class="proceed">
                                <button class="proceed-button">Proceed</button>
                            </div>
                            <div class="or">Or</div>
                            <div class="paypal">
                                <button class="paypal-button">Pay with <i class="fa fa-paypal paypal-icon" aria-hidden="true"></i>ayPal</button>
                            </div>
                        </div>
                </div>
                </div>
            </div>
            <div className='side-img'>
            <img src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-menu-dessert-img.png" alt="" style={{paddingTop:'150px',width:'150px',objectFit:'contain'}} />

            <img src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-menu-pizza-img.png" alt="" style={{objectFit:'contain'}}  />
            </div>
            </div>

    )
}

export default Payment
