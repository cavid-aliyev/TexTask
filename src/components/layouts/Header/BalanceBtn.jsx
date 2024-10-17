import ArrowDownIcon from "@assets/icons/arrow-down.svg";
import PlusIcon from "@assets/icons/plus.svg";

const BalanceBtn = ({balance, percent}) => {
  return (
    <div className='balance'>
      <div className='balance__info'>
        <span className='balance__amount'>
          {balance} $
        </span>
        <div className='balance__percent'>
          {percent}%
        </div>
        <button className='balance__dropdown-btn'>
          <img
            src={ArrowDownIcon}
            alt='Arrow Down'
            width='16'
            height='16'
          />
        </button>
      </div>
      <button className='balance__add'>
        <img
          src={PlusIcon}
          alt='Add funds'
          width='16'
          height='16'
        />
      </button>
    </div>
  );
};

export {BalanceBtn};