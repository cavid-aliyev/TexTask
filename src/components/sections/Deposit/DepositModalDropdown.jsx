import ArrowDownIcon from "@assets/icons/arrow-down.svg";
import MastercardIcon from "@assets/payment-methods/Mastercard.svg";

const DepositModalDropdown = () => {

  return (
    <div className='dropdown'>
      <div className='dropdown__selected'>
        <div className='dropdown__selected-left'>
          <img
            src={MastercardIcon}
            alt='Mastercard'
          />
          <div className='dropdown__selected-left-data'>
            <p>
              Mastercard
              <span></span>
              Commission: 3%
            </p>
            <span>
              Please notice that you will send money in the USD
            </span>
          </div>
        </div>
        <div className='dropdown__selected-right'>
          <img
            src={ArrowDownIcon}
            alt='Arrow down'
          />
        </div>
      </div>
    </div>
  );
};

export {DepositModalDropdown};