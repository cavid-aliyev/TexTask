import {paymentOptions} from "@mocks/payment-options.js";
import {PaymentBlock} from "./PaymentBlock.jsx";
import {DepositModal} from "./DepositModal.jsx";

const DepositSection = () => {
  return (
    <section className='deposit' id='deposit'>
      <DepositModal />
      <div className='container'>
        <div className='deposit__inner'>
          <h1 className='deposit__title'>
            Make a deposit
          </h1>
          <p className='deposit__payment-method'>
            Choose payment method
          </p>
          {paymentOptions?.map((paymentOption, i) => (
            paymentOption?.options?.length > 0 && (
              <PaymentBlock
                key={i}
                blockTitle={paymentOption?.category}
                blocks={paymentOption?.options}
              />
            )
          ))}
        </div>
      </div>
    </section>
  );
};


export {DepositSection};