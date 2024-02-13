import React from 'react';
import styles from '../editAddressForm/editAdressForm.module.css'

import {useForm} from "react-hook-form";
import {TBillingAddress, TShippingAddress} from "../../../redux/types";
import Button from "../button/Button";

interface FormValues {
    firstName: string;
    lastName: string;
    mobile: string;
    address: string;
}
interface EditAddressFormProps{
    name?: string;
    address: TBillingAddress | TShippingAddress;
    onSave: (updatedAddress: TBillingAddress | TShippingAddress) => void;
    onCancel: () => void;
    type: 'billing' | 'shipping';
}

const EditAddressForm: React.FC<EditAddressFormProps> = ({address, onSave, onCancel, type }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            firstName: address.name.split(' ')[0],
            lastName: address.name.split(' ').slice(1).join(' '),
            mobile: address.phone,
            address: address.address,
        }
    });
    const onSubmit = (data: FormValues) => {
        const updatedAddress = {
            ...address,
            name: `${data.firstName} ${data.lastName}`,
            phone: data.mobile,
            address: data.address,
        };
        onSave(updatedAddress as TBillingAddress | TShippingAddress);
    };

    return (
        <div className={styles.formEditAddress}>
            <h3>EDIT ADDRESS</h3>
            <p>Update your address details and all future delivery labels will appear exactly as they are below.</p>

            <form onSubmit={handleSubmit(onSubmit)}>

                <fieldset className={styles.inputContainer}>
                    <label>FIRST NAME:</label>
                    <input {...register('firstName', {required: true})} />
                    {errors.firstName && <p>This field is required.</p>}
                </fieldset>
                <fieldset className={styles.inputContainer}>
                    <label>LAST NAME:</label>
                    <input {...register('lastName', {required: true})} />
                    {errors.lastName && <p>This field is required.</p>}
                </fieldset>
                <fieldset className={styles.inputContainer}>
                    <label>MOBILE:</label>
                    <input {...register('mobile', {required: true})} />
                    {errors.mobile && <p>This field is required.</p>}
                </fieldset>
                <fieldset className={styles.inputContainer}>
                    <label>ADDRESS:</label>
                    <input {...register('address', {required: true})} />
                    {errors.address && <p>This field is required.</p>}
                </fieldset>

                <Button type={"submit"}>Save changes</Button>
                <Button type={"button"} onClick={onCancel}>Cancel</Button>

            </form>
        </div>
    );
};

export default EditAddressForm;