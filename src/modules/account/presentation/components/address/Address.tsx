import React from 'react';
import styles from "./adress.module.css";
import edit from "../../../../account/images/edit.webp";
import EditAddressForm from "../editAddressForm/EditAddressForm";
import {useAppDispatch, useAppSelector} from "../../../../../general/redux/hooks";
import {updateBillingAddress, updateShippingAddress} from "../../../redux/accountSlice";
import {TBillingAddress, TShippingAddress} from "../../../redux/types";




const Address = () => {
    const [isEditingBilling, setIsEditingBilling] = React.useState<boolean>(false);
    const [isEditingShipping, setIsEditingShipping] = React.useState<boolean>(false);
    const {billingAddress,shippingAddress} = useAppSelector(state=> state.account);
    const dispatch = useAppDispatch();


    const handleEditBillingAddress = () => {
        setIsEditingBilling(true);
    };

    const handleEditShippingAddress = () => {
        setIsEditingShipping(true);
    };
    const handleSaveBillingAddress = (updatedAddress:TBillingAddress) => {
        dispatch(updateBillingAddress({ billingAddress: updatedAddress }));
        setIsEditingBilling(false);
    };

    const handleSaveShippingAddress = (updatedAddress:TShippingAddress) => {
        dispatch(updateShippingAddress({ shippingAddress: updatedAddress }));
        setIsEditingShipping(false);
    };


    return (
        <section className={styles.addressContent}>
            <h2 className={styles.addressTitle}>Address</h2>
            {isEditingBilling ? (
                <EditAddressForm
                    address={billingAddress}
                    onSave={handleSaveBillingAddress}
                    onCancel={() => setIsEditingBilling(false)}
                    type="billing"
                />
            ) : isEditingShipping ? (
                <EditAddressForm
                    address={shippingAddress}
                    onSave={handleSaveShippingAddress}
                    onCancel={() => setIsEditingShipping(false)}
                    type="shipping"
                />
            ) : (
                <div className={styles.boxAddress}>
                    <div className={styles.contentBox}>
                        <header className={styles.headerContent}>
                            <h3 className={styles.cardTitle}>Billing Address</h3>
                            <button onClick={handleEditBillingAddress}><img src={edit} alt="icon-edit"/>Edit</button>
                        </header>
                        <address className={styles.contentAddress}>
                            <div>{billingAddress.name}</div>
                            <div>{billingAddress.phone}</div>
                            <div>{billingAddress.address}</div>
                        </address>
                    </div>
                    <div className={styles.contentBox}>
                        <header className={styles.headerContent}>
                            <h3 className={styles.cardTitle}>Shipping Address</h3>
                            <button onClick={handleEditShippingAddress}><img src={edit} alt="icon-edit"/>Edit</button>
                        </header>
                        <address className={styles.contentAddress}>
                            <div>{shippingAddress.name}</div>
                            <div>{shippingAddress.phone}</div>
                            <div>{shippingAddress.address}</div>
                        </address>
                    </div>
                </div>)}
        </section>

    );
};

export default Address;