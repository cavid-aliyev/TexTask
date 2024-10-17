import {useDepositModal} from "@context/DepositModalContext.jsx";
import ArrowLeftIcon from "@assets/icons/arrow-left.svg";
import CloseModalIcon from "@assets/icons/close-m.svg";
import {user} from "@mocks/user.js";
import {DepositModalDropdown} from "./DepositModalDropdown.jsx";
import {DepositAmount} from "./DepositAmount.jsx";
import Button from "@ui/Button.jsx";
import {PromoForm} from "../Promo/PromoForm.jsx";

const DepositModal = () => {
  const {isModalOpen, closeModal} = useDepositModal();

  return (
    <div className={`modal ${isModalOpen ? 'modal--active' : 'modal--disabled'}`}>
      <div onClick={closeModal}
           className={`modal__overlay ${isModalOpen ? 'modal__overlay--active' : 'modal__overlay--disabled'}`}></div>
      <div className={`modal__inner ${isModalOpen ? 'modal__inner--active' : 'modal__inner--disabled'}`}>
        <div className='modal__top'>
          <button type='button' onClick={closeModal} className='modal__back'>
            <img src={ArrowLeftIcon} alt="Close modal"/>
            Back to Payment Method
          </button>
          <button className='modal__close' onClick={closeModal}>
            <img src={CloseModalIcon} alt="Close modal"/>
          </button>
        </div>
        <div className='modal__balance'>
          Current balance: <span>${user.balance}</span>
        </div>
        <DepositModalDropdown/>
        <h6 className='modal__amount'>
          Amount
        </h6>
        <DepositAmount/>
        <PromoForm
          isModal={false}
          label='Promo Code'
        />
        <Button
          type='button'
          onClick={closeModal}
          className='modal__button'
        >
          Deposit
        </Button>
      </div>
    </div>
  );
};

export {DepositModal};