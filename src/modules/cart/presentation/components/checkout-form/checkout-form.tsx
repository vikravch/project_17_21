import React, {useState} from 'react';
import styles from './checkout-form.module.css';
import OrderSummary from "../order-summary/order-summary";
import {TOption, TUserOrderInfo} from "../../types";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import ReactSelect from 'react-select'
import {options} from "../../mock-api/data";

const getValue = (value: string) => {
  return value ? options.find((option) => option.value === value) : ''
}
const CheckoutForm = () => {
  const {register, handleSubmit, reset, formState: {errors}, control} = useForm<TUserOrderInfo>({
    mode: 'onChange',
  });
  const [radioSelected, setRadioSelected] = useState('credit');
  const onSubmit:SubmitHandler<TUserOrderInfo> = (data) => {
    data.payment_method = radioSelected;
    console.log(data)
    reset();
  }
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target) {
      setRadioSelected(event.target.value);
    }
  }
  const typeErrors = (fieldName: string | undefined) => {
    return <div className={styles.errors}>{fieldName}</div>
  }

  return (
<div className={styles.container_wide}>
  <div className={styles.form_container}>
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.form_block}>
        <p className={styles.form_contact_header}>Contact Information</p>
        <div className={styles.form_container_for_narrow_inputs}>
          <div className={styles.narrow_input_container}>
            <label className={styles.form_label} htmlFor="firstName">FIRST NAME</label>
            <input className={`${styles.narrow_input} ${styles.input}`}
                   {...register('firstName')}
                   type="text"
                   id="firstName"
                   placeholder="First name"
            />
          </div>
          <div className={styles.narrow_input_container}>
            <label className={styles.form_label} htmlFor="lastName">LAST NAME</label>
            <input className={`${styles.narrow_input} ${styles.input}`}
                   {...register('lastName')}
                   type="text"
                   id="lastName"
                   placeholder="Last name"
            />
          </div>
        </div>
        <div className={styles.input_container}>
          <label className={styles.form_label} htmlFor="phoneNumber">Phone Number</label>
          <input className={`${styles.wide_input} ${styles.input}`}
                 {...register('phoneNumber')}
                 type="number"
                 id="phoneNumber"
                 placeholder="Phone Number"
          />
        </div>
        <div className={styles.input_container}>
          <label className={styles.form_label} htmlFor="email">Email address</label>
          <input className={`${styles.wide_input} ${styles.input}`}
                 {...register('email', {
                   pattern: {
                     value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                     message: 'Please enter valid email'
                   }
                 })}
                 type="text"
                 id="email"
                 placeholder="Your Email"
          />
          {errors?.email && (
            typeErrors(errors.email.message)
          )}
        </div>
      </fieldset>
      <fieldset className={styles.form_block}>
        <p className={styles.form_contact_header}>Shipping Address</p>
        <div className={styles.input_container}>
          <label className={styles.form_label} htmlFor="street">Street Address *</label>
          <input className={`${styles.wide_input} ${styles.input}`}
                 {...register('street', {
                   required: "Street is required field"
                 })}
                 type="text"
                 id="street"
                 placeholder="Street Address"
          />
          {errors?.street && (
            typeErrors(errors.street.message)
          )}
        </div>
        <div className={styles.input_container}>
          <label className={styles.form_label} htmlFor="country">Country *</label>
          <Controller
            control={control}
            name={'country'}
            rules={{required: "Country is required field"}}
            render={
            ({field: {onChange, value}, formState: {errors}}) => <>
              <ReactSelect
                placeholder='Country'
                options={options}
                value={getValue(value)}
                onChange={(newValue) => onChange((newValue as TOption).value)}
              />
              {errors?.country && (
                typeErrors(errors.country.message)
              )}
            </>
          }/>
        </div>
        <div className={styles.input_container}>
          <label className={styles.form_label} htmlFor="city">Town / City *</label>
          <input className={`${styles.wide_input} ${styles.input}`}
                 {...register('city', {
                   required: "City is required field"
                 })}
                 type="text"
                 id="city"
                 placeholder="Town / City"
          />
          {errors?.city && (
            typeErrors(errors.city.message)
          )}
        </div>
        <div className={styles.form_container_for_narrow_inputs}>
          <div className={styles.narrow_input_container}>
            <label className={styles.form_label} htmlFor="state">state</label>
            <input className={`${styles.narrow_input} ${styles.input}`}
                   {...register('state')}
                   type="text"
                   id="state"
                   placeholder="State"
            />
          </div>
          <div className={styles.narrow_input_container}>
            <label className={styles.form_label} htmlFor="zipCode">Zip code</label>
            <input className={`${styles.narrow_input} ${styles.input}`}
                   {...register('zipCode')}
                   type="number"
                   id="zipCode"
                   placeholder="Zip Code"
            />
          </div>
        </div>
      </fieldset>
      <fieldset className={styles.form_block}>
        <p className={styles.form_payment_header}>Payment method</p>
        <div className={styles.radio_inputs_container}>
          <div className={styles.radio_container}>
            <div className={styles.cart_summary_delivery}>
              <div>
                <label htmlFor="credit" className={styles.radio_descr}>
                  <input type="radio"
                         name="credit"
                         id="credit"
                         value="credit"
                         checked={radioSelected === 'credit'}
                         onChange={e => {handleRadioChange(e)}}
                  />
                  <span className={styles.custom_radio}></span>
                  Pay by Credit Card</label>
              </div>
            </div>
          </div>
          <div className={styles.radio_container}>
            <div className={styles.cart_summary_delivery}>
              <div>
                <label htmlFor="paypal" className={styles.radio_descr}>
                  <input type="radio"
                         name="paypal"
                         id="paypal"
                         value="paypal"
                         checked={radioSelected === 'paypal'}
                         onChange={e => {handleRadioChange(e)}}
                  />
                  <span className={styles.custom_radio}></span>
                  Paypal</label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.input_container}>
          <label className={styles.form_label} htmlFor="cardNumber">Card Number</label>
          <input className={`${styles.wide_input} ${styles.input}`}
                 {...register('cardNumber')}
                 type="text"
                 id="cardNumber"
                 placeholder="1234 1234 1234 1234"
          />
        </div>
        <div className={styles.form_container_for_narrow_inputs}>
          <div className={styles.narrow_input_container}>
            <label className={styles.form_label} htmlFor="expDate">Expiration date</label>
            <input className={`${styles.narrow_input} ${styles.input}`}
                   {...register('expDate')}
                   type="text"
                   id="expDate"
                   placeholder="MM/YY"
            />
          </div>
          <div className={styles.narrow_input_container}>
            <label className={styles.form_label} htmlFor="cvc">CVC</label>
            <input className={`${styles.narrow_input} ${styles.input}`}
                   {...register('cvc')}
                   type="number"
                   id="cvc"
                   placeholder="CVC Code"
            />
          </div>
        </div>
      </fieldset>
      <div className={styles.narrow_screen}>
        <OrderSummary/>
      </div>
      <div className={`${styles.button_container} ${styles.place_order_button}`}>
        <button type="submit" className={styles.checkout_button}>Place Order</button>
      </div>

    </form>
  </div>
  <div className={styles.wide_screen}>
    <OrderSummary/>
  </div>
</div>
  );
};

export default CheckoutForm;

