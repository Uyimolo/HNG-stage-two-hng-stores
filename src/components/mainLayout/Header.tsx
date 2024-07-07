import Logo from '../Logo';
import hamburgerIcon from '../../assets/icons/ic_baseline-menu.svg';
import notificationIcon from '../../assets/icons/zondicons_notification.svg';
import Search from './Search';
import Navigation from './Navigation';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { cn } from '../../utilities/cn';
import Button from '../reusables/Button';
import cartIcon from '../../assets/icons/cart.svg';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <header
      className={cn(
        'grid  gap-6 fixed py-4 w-full top-0 left-0 px-4 z-20 bg-white lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12 xl:px-16'
        // isDesktop
        //   ? 'flex items-center justify-between gap-10 lg:px-12 xl:px-16'
        //   : 'grid-rows-2 grid-cols-2'
      )}>
      <div>
        <Logo variant='header' />
      </div>
      {/* nav component */}

      <Navigation showNav={showNav} setShowNav={setShowNav} />
      {showNav && (
        <div
          className='fixed top-0 left-0 h-screen bottom-0 w-full bg-neutral-500/10 lg:hidden'
          onClick={() => setShowNav(false)}></div>
      )}
      {/* -----icons-------- */}

      <div className='flex w-fit order-2 justify-self-end lg:order-4 space-x-2'>
        <img
          src={cartIcon}
          alt=''
          className='hidden min-w-[22px] w-[22px] lg:block'
        />

        <img
          src={hamburgerIcon}
          className='w-[22px] lg:hidden '
          alt='navigation menu toggle button'
          onClick={() => setShowNav(true)}
        />

        <img
          src={notificationIcon}
          alt='notification icon'
          className='min-w-[22px] '
        />
      </div>
      {/* search component */}
      <Search
        className={cn('', isDesktop ? 'order-3' : 'col-span-2 order-4')}
      />

      <div className=' space-x-2 items-center hidden order-5 lg:flex'>
        <Button variant='outline'>Log in</Button>
        <Button variant='primary'>Sign up</Button>
      </div>
    </header>
  );
};

export default Header;
