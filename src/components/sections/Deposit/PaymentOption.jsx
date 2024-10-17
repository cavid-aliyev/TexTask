'use client';

import {cloneElement} from "react";
import {useDepositModal} from "../../../context/DepositModalContext.jsx";

const PaymentOption = ({
                         option,
                         label,
                         preview,
                         tag,
                         commission,
                         onClick,
                       }) => {
  return (
    <button
      onClick={() => onClick(option)}
      className='payment-option'>
      {tag && (
        cloneElement(tag)
      )}
      <div className='payment-option__icon'>
        <img
          src={preview}
          alt={label}
          width='24'
          height='24'
        />
      </div>
      <h3 className='payment-option__label'>
        {label}
      </h3>
      <span className='payment-option__commission'>
        Comission {commission}%
      </span>
    </button>
  );
};

export {PaymentOption};