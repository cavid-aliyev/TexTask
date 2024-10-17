import {PromoForm} from "./PromoForm.jsx";

const PromoSection = ({
                        label = 'Enter promo code here. It will activate a special bonus! Type ALPHA2021 to get a discount.',
                        isModal = false,
                        title = 'Have a promo code?',
                      }) => {
  return (
    <section className='promo'>
      <div className='container'>
        <div className='promo__inner'>
          <h4 className='promo__title'>
            {title}
          </h4>
          <PromoForm
            isModal={isModal}
            label={label}
          />
        </div>
      </div>
    </section>
  );
};

export {PromoSection};