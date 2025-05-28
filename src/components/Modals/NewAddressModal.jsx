import React from 'react'
import Modal from '../../commons/Modal'
import ModalHeading from '../../commons/Modal/ModalHeading'
import ModalBody from '../../commons/Modal/ModalBody'
import { Form, FormGroup, FormInput, FormLabel, FormRow, FormTextArea } from '../Form'
import { dataSrc } from '../../data/DataSource'
import FormSelectInput from '../Form/FormSelectInput'
import ModalBottom from '../../commons/Modal/ModalBottom'
import Button from '../Button'

export default function NewAddressModal({
    open,
    setOpen,
    className = '',
}) {
    const handleCancel = (e) => {
        e.preventDefault();
        setOpen(false);
    };
    return (
        <Modal open={open} setOpen={setOpen} style={{ '--content-width': '650px' }}>
            <Form>
                <ModalHeading>Add a new address</ModalHeading>

                <ModalBody>
                    <FormRow className='form__row--sm-break'>
                        <FormInput
                            errMessage='Name must be not empty!'
                            id='firstName'
                            label='First Name'
                            labelClass='form__label--small'
                            placeholder='First Name'
                            name='firstName'
                            required={true}
                        />
                        <FormInput
                            required={true}
                            errMessage='Name must be not empty!'
                            id='lastName'
                            label='Last Name'
                            labelClass='form__label--small'
                            placeholder='Last Name'
                            name='lastName'
                        />
                    </FormRow>

                    <FormRow className='form__row--sm-break'>
                        <FormInput
                            type='tel'
                            id='phone'
                            label='Phone'
                            labelClass='form__label--small'
                            placeholder='Phone'
                            name='Phone'
                            required={true}
                            minLength='10'
                            errMessage='Phone must be at least 10 characters!'
                        />
                        <FormInput
                            type='email'
                            id='email'
                            label='Email'
                            labelClass='form__label--small'
                            placeholder='Email'
                            name='email'
                            required={true}
                            errMessage='Name must be not empty!'
                        />
                    </FormRow>

                    <FormTextArea
                        errorMessage="Address must be not empty!"
                        id='address'
                        label='Address'
                        labelClass='form__label--small'
                        name='address'
                        placeholder='Street address'
                        required={true}
                    />

                    <FormGroup>
                        <FormLabel
                            className='form__label--small'
                            htmlFor='city'
                            label='City/District/Town'
                        />

                        <FormSelectInput placeholder='City/District/Towns' options={dataSrc.provinces} />
                    </FormGroup>
                </ModalBody>

                <ModalBottom>
                    <Button
                        type="button"
                        className="btn--text modal__btn"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                    <Button
                        type='submit'
                        className="btn--primary modal__btn"
                    >
                        Save
                    </Button>
                </ModalBottom>
            </Form>

        </Modal>
    )
}
