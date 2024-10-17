import SearchIcon from '@assets/icons/search.svg';
import GiftIcon from '@assets/icons/gift.svg';
import NotificationIcon from '@assets/icons/bell.svg';

export const navBtns = [
  {
    id: 1,
    alt: 'Search',
    icon: SearchIcon,
    onClick: () => console.log('Search')
  },
  {
    id: 2,
    alt: 'Gifts',
    icon: GiftIcon,
    onClick: () => console.log('Gifts')
  },
  {
    id: 3,
    alt: 'Notifications',
    icon: NotificationIcon,
    onClick: () => console.log('Notifications')
  }
]