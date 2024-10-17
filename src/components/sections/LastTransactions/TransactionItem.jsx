import {transactionStatus} from "@constants/transactionStatus.js";
import TransactionData from "./TransactionData.jsx";
import {formatTransactionDate} from "@utils/formatTransactionDate.js";

const TransactionItem = ({
                           companyIcon,
                           operationStatus,
                           transactionNumber,
                           withdraw,
                           paymentDate,
                           amountPayed,
                         }) => {
  return (
    <li className='transaction'>
      <div className='transaction__top'>
        <img
          src={companyIcon}
          alt='Company'
        />
        <div className='transaction__top-status-wrapper'>
          <span
            style={{color: transactionStatus[operationStatus]}}
            className='transaction__top-status'>
            {operationStatus}
          </span>
          <span className='transaction__top-label'>
            Operation Status
          </span>
        </div>
      </div>
      <div className='transaction__bottom'>
        <div className='transaction__bottom-withdrawel'>
          <div className='transaction__bottom-icon'>
            <img
              src={companyIcon}
              alt='Company'
            />

          </div>
          <TransactionData
            label='Withdraw'
            value={withdraw}
          />
        </div>
        <TransactionData
          label='Transaction Number'
          value={transactionNumber}
        />
        <TransactionData
          label='Payment Date'
          value={formatTransactionDate(paymentDate)}
        />
        <TransactionData
          label='Amount Payed'
          value={amountPayed}
        />
        <div className='transaction__status'>
          <TransactionData
            label='Operation Status'
            value={operationStatus}
            style={{color: transactionStatus[operationStatus]}}
          />
        </div>
      </div>
    </li>
  );
};

export {TransactionItem};