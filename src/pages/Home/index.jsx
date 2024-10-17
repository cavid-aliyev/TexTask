import {DepositSection} from "@sections/Deposit/index.jsx";
import {PromoSection} from "@sections/Promo/index.jsx";
import {LastTransactionsSection} from "@sections/LastTransactions/index.jsx";
import {DepositProvider} from "@context/DepositModalContext.jsx";

const HomePage = () => {
  return (
    <main className='main'>
      <DepositProvider>
        <DepositSection />
      </DepositProvider>
      <PromoSection />
      <LastTransactionsSection />
    </main>
  );
};

export {HomePage};