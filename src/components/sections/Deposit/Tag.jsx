const Tag = ({children, bgColor}) => {
  return (
    <div
      className='payment-option__tag'
      style={{backgroundColor: bgColor}}>
      {children}
    </div>
  );
};

export {Tag};