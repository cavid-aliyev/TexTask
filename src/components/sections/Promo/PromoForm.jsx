'use client';

import CheckIcon from '@assets/icons/check.svg';
import {useState} from "react";
import Button from "@ui/Button.jsx";

const PromoForm = ({isModal, label}) => {
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const promoInput = document.getElementById('promo-input');
    const promoValue = promoInput.value.trim();
    if (promoValue === 'ALPHA2021') {
      setIsPromoApplied(true);
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className='promo-form'>
      <label htmlFor='promo-input' className='promo-form__label'>
        {label}
      </label>
      <div className='promo-form__wrapper'>
        <div className='promo-form__wrapper-input'>
          <input
            name='promo-input'
            id='promo-input'
            type='text'
            className='promo-form__input'
            placeholder='Enter your code here'
          />
          {isPromoApplied && (
            <span className='promo-form__message'>
              <img src={CheckIcon} alt="Checked"/>
            </span>
          )}
        </div>
        <Button
          className='promo-form__wrapper-btn'
          onClick={(e) => e.preventDefault()}
          type={isModal ? 'submit' : 'button'}
        >
          Apply
        </Button>
      </div>
    </form>
  );
};

export {PromoForm};