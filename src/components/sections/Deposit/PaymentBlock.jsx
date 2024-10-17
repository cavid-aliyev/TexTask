import {List} from "@ui/List.jsx";
import {PaymentOption} from "./PaymentOption.jsx";
import {Fragment} from "react";
import {tagVariants} from "@constants/tagVariants.js";
import {Tag} from "./Tag.jsx";
import {useDepositModal} from "@context/DepositModalContext.jsx";

const PaymentBlock = ({blockTitle, blocks}) => {
  const {selectPayment, openModal} = useDepositModal();

  const handlePaymentSelect = (option) => {
    selectPayment(option);
    openModal();
  }

  return (
    <div className='payment-block'>
      <h2 className='payment-block__title'>
        {blockTitle}
      </h2>
      <List className='payment-block__list'>
        {blocks.map((block) => (
          <Fragment key={block.id}>
            <PaymentOption
              {...block}
              onClick={handlePaymentSelect}
              tag={block.tag && <Tag bgColor={tagVariants[block.tag].bgColor}>{block.tag}</Tag>}
            />
          </Fragment>
        ))}
      </List>
    </div>
  );
};

export {PaymentBlock};