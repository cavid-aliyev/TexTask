const TransactionData = ({value, label, style = {}}) => {
  return (
    <div className='transaction-data'>
      <span style={style} className='transaction-data__value'>
        {value}
      </span>
      <span className='transaction-data__label'>
        {label}
      </span>
    </div>
  );
};

export default TransactionData;