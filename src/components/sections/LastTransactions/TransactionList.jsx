import {transactionsHistory} from "@mocks/transactions-history.js";
import {List} from "@ui/List.jsx";
import {Fragment} from "react";
import {TransactionItem} from "./TransactionItem.jsx";

const TransactionList = () => {

  return (
    <List className='transactions__list'>
      {transactionsHistory.map((transaction) => (
        <Fragment key={transaction.id}>
          <TransactionItem
            {...transaction}
          />
        </Fragment>
      ))}
    </List>
  );
};

export {TransactionList};