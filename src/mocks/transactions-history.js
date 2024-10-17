import MastercardIcon from "@assets/payment-methods/Mastercard.svg";
import SticpayIcon from "@assets/payment-methods/Stickpay.png";

export const transactionsHistory = [
  {
    id: 1,
    companyIcon: SticpayIcon,
    withdraw: 'by SticPay, USD',
    transactionNumber: 142354,
    paymentDate: new Date(),
    amountPayed: 23.05,
    operationStatus: 'Processing',
  },
  {
    id: 2,
    companyIcon: SticpayIcon,
    withdraw: 'by SticPay, USD',
    transactionNumber: 142754,
    paymentDate: new Date(),
    amountPayed: 123.27,
    operationStatus: 'Active',
  },
  {
    id: 3,
    companyIcon: MastercardIcon,
    withdraw: 'by Mastercard, USD',
    transactionNumber: 23561,
    paymentDate: new Date(),
    amountPayed: 45.00,
    operationStatus: 'Performed',
  }
]