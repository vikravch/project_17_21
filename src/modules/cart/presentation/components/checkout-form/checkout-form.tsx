import React, {FormEvent, useRef, useState} from 'react';
import './checkout-form.css';
import OrderSummary from "../order-summary/order-summary";
type TUserOrderInfo = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string
  street: string;
  country: string;
  city: string;
  state?: string;
  zipCode?: string;
  cardNumber?: string
  expDate?: string
  cvc?: string
}
const CheckoutForm = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const [userOrderInfo, setUserOrderInfo] = useState<TUserOrderInfo>({
    city: "",
    country: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    state: "",
    street: "",
    zipCode: "",
    cardNumber: "",
    expDate: "",
    cvc: ""
  })
  const [radioSelected, setRadioSelected] = useState('credit');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target) {
      setRadioSelected(event.target.value);
    }
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setUserOrderInfo({
      ...userOrderInfo,
      [name]: value
    })
  }
  const onChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e)
    e.preventDefault();
  }
  return (
<div className="container_wide">
  <div className="form_container">
    <form className="form" onSubmit={handleSubmit}>
      <fieldset className="form_block">
        <p className="form_contact_header">Contact Information</p>
        <div className="form_container_for_narrow_inputs">
          <div className="narrow_input_container">
            <label className="form_label" htmlFor="firstName">FIRST NAME</label>
            <input className="narrow_input input"
                   type="text"
                   id="firstName"
                   placeholder="First name"
                   onChange={(e) => onChange(e)}
                   name="firstName"
                   value={userOrderInfo.firstName}
            />
          </div>
          <div className="narrow_input_container">
            <label className="form_label" htmlFor="lastName">LAST NAME</label>
            <input className="narrow_input input"
                   type="text"
                   id="lastName"
                   placeholder="Last name"
                   onChange={(e) => onChange(e)}
                   name="lastName"
                   value={userOrderInfo.lastName}
            />
          </div>
        </div>
        <div className="input_container">
          <label className="form_label" htmlFor="phoneNumber">Phone Number</label>
          <input className="wide_input input"
                 type="number"
                 id="phoneNumber"
                 placeholder="Phone Number"
                 onChange={(e) => onChange(e)}
                 name="phoneNumber"
                 value={userOrderInfo.phoneNumber}
          />
        </div>
        <div className="input_container">
          <label className="form_label" htmlFor="email">Email address</label>
          <input className="wide_input input"
                 type="email"
                 id="email"
                 placeholder="Your Email"
                 onChange={(e) => onChange(e)}
                 name="email"
                 value={userOrderInfo.email}
          />
        </div>
      </fieldset>
      <fieldset className="form_block">
        <p className="form_contact_header">Shipping Address</p>
        <div className="input_container">
          <label className="form_label" htmlFor="street">Street Address *</label>
          <input className="wide_input input"
                 type="text"
                 id="street"
                 placeholder="Street Address"
                 onChange={(e) => onChange(e)}
                 name="street"
                 value={userOrderInfo.street}
                 required={true}
          />
        </div>
        <div className="input_container">
          <label className="form_label" htmlFor="country">Country *</label>
          <select className="wide_input input"
                  onChange={(e) => onChangeCountry(e)}
                  id="country"
                  name="country"
                  value={selectedOption}
                  required={true}
          >
            <option value="">Country</option>
            <option value="USA">USA</option>
            <option value="Israel">Israel</option>
            <option value="France">France</option>
            <option value="Ireland">Ireland</option>
            <option value="Portugal">Portugal</option>
          </select>
        </div>
        <div className="input_container">
          <label className="form_label" htmlFor="city">Town / City *</label>
          <input className="wide_input input"
                 type="text"
                 id="city"
                 placeholder="Town / City"
                 onChange={(e) => onChange(e)}
                 name="city"
                 value={userOrderInfo.city}
                 required={true}
          />
        </div>
        <div className="form_container_for_narrow_inputs">
          <div className="narrow_input_container">
            <label className="form_label" htmlFor="state">state</label>
            <input className="narrow_input input"
                   type="text"
                   id="state"
                   placeholder="State"
                   onChange={(e) => onChange(e)}
                   name="state"
                   value={userOrderInfo.state}
            />
          </div>
          <div className="narrow_input_container">
            <label className="form_label" htmlFor="zipCode">Zip code</label>
            <input className="narrow_input input"
                   type="number"
                   id="zipCode"
                   placeholder="Zip Code"
                   onChange={(e) => onChange(e)}
                   name="zipCode"
                   value={userOrderInfo.zipCode}
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="form_block">
        <p className="form_payment_header">Payment method</p>
        <div className="radio_inputs_container">
          <div className="radio_container">
            <div className="cart_summary_delivery">
              <div>
                <label htmlFor="credit" className="radio_descr">
                  <input type="radio"
                         name="credit"
                         id="credit"
                         value="credit"
                         checked={radioSelected === 'credit'}
                         onChange={e => {handleRadioChange(e)}}
                  />
                  <span className="custom_radio"></span>
                  Pay by Credit Card</label>
              </div>
            </div>
          </div>
          <div className="radio_container">
            <div className="cart_summary_delivery">
              <div>
                <label htmlFor="paypal" className="radio_descr">
                  <input type="radio"
                         name="paypal"
                         id="paypal"
                         value="paypal"
                         checked={radioSelected === 'paypal'}
                         onChange={e => {handleRadioChange(e)}}
                  />
                  <span className="custom_radio"></span>
                  Paypal</label>
              </div>
            </div>
          </div>
        </div>
        <div className="input_container">
          <label className="form_label" htmlFor="cardNumber">Card Number</label>
          <input className="wide_input input"
                 type="number"
                 id="cardNumber"
                 placeholder="1234 1234 1234 1234"
                 onChange={(e) => onChange(e)}
                 name="cardNumber"
                 value={userOrderInfo.cardNumber}
          />
        </div>
        <div className="form_container_for_narrow_inputs">
          <div className="narrow_input_container">
            <label className="form_label" htmlFor="expDate">Expiration date</label>
            <input className="narrow_input input"
                   type="month"
                   min="2024-01"
                   max="2030-01"
                   id="expDate"
                   placeholder="MM/YY"
                   onChange={(e) => onChange(e)}
                   name="expDate"
                   value={userOrderInfo.expDate}
            />
          </div>
          <div className="narrow_input_container">
            <label className="form_label" htmlFor="cvc">CVC</label>
            <input className="narrow_input input"
                   type="number"
                   id="cvc"
                   placeholder="CVC Code"
                   onChange={(e) => onChange(e)}
                   name="cvc"
                   value={userOrderInfo.cvc}
            />
          </div>
        </div>
      </fieldset>
      <div className="narrow_screen">
        <OrderSummary/>
      </div>
      <div className="button_container place_order_button">
        <button type="submit" className="button">Place Order</button>
      </div>

    </form>
  </div>
  <div className="wide_screen">
    <OrderSummary/>
  </div>
</div>
  );
};

export default CheckoutForm;

