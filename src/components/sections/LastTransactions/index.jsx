import FilterIcon from '@assets/icons/filter.svg';
import {TransactionList} from "./TransactionList.jsx";
import Button from "../../ui/Button.jsx";

const LastTransactionsSection = () => {
  return (
    <section className='transactions'>
      <div className='container'>
        <div className='transactions__inner'>
          <div className="transactions__top">
            <h5 className='transactions__title--pc'>
              Last Transactions
            </h5>
            <h5 className='transactions__title'>
              Transactions
            </h5>
            <button className='transactions__filter'>
              <img
                src={FilterIcon}
                alt='Filters'
                width={16}
                height={16}
              />
            </button>
          </div>
          <TransactionList/>
          <Button
            className='transactions__button'
            type='button'>
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
};

export {LastTransactionsSection};