import BitcoinIcon from "@assets/payment-methods/Bitcoin.svg";
import EthereumIcon from "@assets/payment-methods/Ethereum.svg";
import TetherIcon from "@assets/payment-methods/Tether.svg";
import MastercardIcon from "@assets/payment-methods/Mastercard.svg";
import VisaIcon from "@assets/payment-methods/Visa.svg";
import SkrillIcon from "@assets/payment-methods/Skrill.svg";
import PMIcon from "@assets/payment-methods/PM.svg";
import PiastrixIcon from "@assets/payment-methods/Piastrix.svg";
import SticpayIcon from "@assets/payment-methods/Stickpay.png";

export const paymentOptions = [
  {
    category: "Cards, e-money, PIN",
    options: [
      {
        id: 4,
        label: 'Mastercard',
        option: 'MASTERCARD',
        preview: MastercardIcon,
        commission: 5,
        tag: 'POPULAR',
      },
      {
        id: 5,
        label: 'Visa',
        preview: VisaIcon,
        option: 'VISA',
        commission: 5,
        tag: 'TRUSTED',
      },
      {
        id: 6,
        label: 'Skrill',
        preview: SkrillIcon,
        commission: 0,
        option: 'SKRILL',
        tag: 'SECURE',
      },
      {
        id: 7,
        label: 'Perfect Money, EUR',
        preview: PMIcon,
        commission: 0,
        option: 'PERFECT_MONEY_EUR',
      },
      {
        id: 8,
        label: 'Perfect Money, USD',
        preview: PMIcon,
        commission: 5,
        option: 'PERFECT_MONEY_USD',
      },
      {
        id: 9,
        label: 'Piastrix, EUR',
        preview: PiastrixIcon,
        commission: 10,
        option: 'PIASTRIX_EUR',
      },
      {
        id: 10,
        label: 'Piastrix, USD',
        preview: PiastrixIcon,
        commission: 15,
        option: 'PIASTRIX_USD',
      },
      {
        id: 11,
        label: 'Sticpay',
        preview: SticpayIcon,
        commission: 2,
        option: 'STICPAY',
      }
    ]
  },
  {
    category: "Cryptocurrency",
    options: [
      {
        id: 1,
        label: 'Bitcoin',
        option: 'BITCOIN',
        preview: BitcoinIcon,
        tag: 'POPULAR',
        commission: 0,
      },
      {
        id: 2,
        label: 'Ethereum',
        option: 'ETHEREUM',
        preview: EthereumIcon,
        commission: 0,
      },
      {
        id: 3,
        label: 'Tether',
        option: 'TETHER',
        preview: TetherIcon,
        commission: 0,
      },
    ],
  },

]