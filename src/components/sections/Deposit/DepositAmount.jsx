import {depositAmounts} from "@constants/depositAmounts.js";
import {useState} from "react";

const DepositAmount = () => {
  const [amount, setAmount] = useState(30);

  const handleAmountClick = (amount) => {
    setAmount((prev) => {
      if (prev + amount >= 906) {
        return 906;
      }
      return prev + amount;
    })
  }

  const handleAmountChange = (e) => {
    const val = +e.target.value;
    if (val > 906) {
      setAmount(906);
      return;
    }
    if (val < 21) {
      setAmount(21);
      return;
    }
    setAmount(val);
  }

  return (
    <div className='deposit-amount'>
      <label htmlFor='amount-modal' className='deposit-amount__input'>
        $
        <input
          id='amount-modal'
          name='amount-modal'
          onChange={handleAmountChange}
          value={amount}
          type='number'
          placeholder='Enter amount'
        />
      </label>
      <div className='deposit-amount__buttons'>
        {depositAmounts.map((amount) => (
          <button onClick={() => handleAmountClick(amount?.amount)} key={amount.id} className='deposit-amount__button'>
            + ${amount.amount}
          </button>
        ))}
      </div>
      <p className='deposit-amount__warning'>
        From 21.00 to 906.00 USD at a time
      </p>
    </div>
  );
};

export {DepositAmount};