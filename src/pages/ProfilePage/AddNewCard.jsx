import Form from 'components/Form/Form'
import FormRow from 'components/Form/FormRow';
import FormInput from 'components/Form/FormInput';
import FormGroup from 'components/Form/FormGroup';
import FormCheckbox from 'components/Form/FormCheckbox';
import FormLabel from 'components/Form/FormLabel';
import Button from 'components/Button';
import ArrowLeftIcon from  "assets/icons/arrow-left.svg";

import './ProfilePage.scss'

export default function AddNewCard({ setOpen }) {

    return (
        <div className="row gy-3 gy-md-2">
            <div className="col-12">
                <h2 className="profile-info__heading">
                    <p className="profile-info__heading-link" onClick={() => setOpen(false)}>
                        <img src={ArrowLeftIcon} alt="" className="icon" />
                        Add credit or debit card
                    </p>
                </h2>

                <Form onSubmit={() => { setOpen(false); }} className="profile__form">
                    <FormRow className='profile__form-row'>
                        <FormInput
                            className='profile__form-row'
                            label='First Name'
                            labelClass='profile__form-label'
                            name='firstName'
                            id='firstName'
                            errMessage='The name can only contain letters!'
                            pattern='[A-Za-z]+'
                            placeholder='First Name'
                            required={true}
                        />

                        <FormInput
                            className='profile__form-row'
                            label='Last Name'
                            labelClass='profile__form-label'
                            name='lastName'
                            id='lastName'
                            errMessage='The name can only contain letters!'
                            pattern='[A-Za-z]+'
                            placeholder='Last Name'
                            required={true}
                        />
                    </FormRow>

                    <FormRow className='profile__form-row'>
                        <FormInput
                            className='profile__form-group'
                            labelClass='profile__form-label'
                            label='Card Information'
                            pattern="\d{16}"
                            name="cardNumber"
                            id="cardNumber"
                            placeholder="Card Number"
                            required={true}
                            errMessage='The card number is a string 16 numbers!'
                        />
                        <FormInput
                            className='profile__form-group'
                            labelClass='profile__form-label'
                            label='Expiration Date'
                            pattern="(0[1-9]|1[0-2])([\/\|])\d{2}"
                            type="text"
                            name="expirationDate"
                            id="expirationDate"
                            placeholder="MM/YY"
                            required={true}
                            errMessage='Must enter flowing the format MM|YY'
                        />
                    </FormRow>

                    <FormRow className='profile__form-row'>
                        <FormInput
                            className='profile__form-group'
                            label='CVV'
                            labelClass='profile__form-label'
                            pattern="\d+"
                            type="text"
                            name="cvv"
                            id="cvv"
                            placeholder="123"
                            required={true}
                            errMessage='The CVV must be numbers!'
                        />

                        <FormInput
                            className='profile__form-group'
                            label='Phone Number'
                            labelClass='profile__form-label'
                            pattern="\d{10}"
                            type="tel"
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="Phone Number"
                            required={true}
                            errMessage='Invalid phone number!'
                        />
                    </FormRow>

                    <FormGroup className='profile__form-group'>
                        <FormLabel className='profile__form-label--bottom profile__form-label' label='Card Preferences' />
                        <FormCheckbox label='Set as default card' name='default' />
                    </FormGroup>

                    <div className="form__control profile__form-control">
                        <Button onClick={() => setOpen(false)} className="btn--text profile__form-btn">Cancel</Button>
                        <Button type='submit' className="btn--primary btn--rounded profile__form-btn">Save Card</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
