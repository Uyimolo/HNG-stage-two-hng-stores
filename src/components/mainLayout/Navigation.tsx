import { NavLink } from 'react-router-dom';
import Button from '../reusables/Button';
import closeNav from '../../assets/icons/close.svg';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { cn } from '../../utilities/cn';
interface NavigationProps {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navigation = ({ showNav, setShowNav }: NavigationProps) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '' },
    { label: 'Cart', path: '/cart' },
  ];

  useEffect(() => {
    isDesktop && setShowNav(false);
  }, [isDesktop, setShowNav]);

  return (
    <div
      className={cn(
        'w-[199px] border absolute  block z-10 border-primary bg-white lg:relative lg:translate-x-0 lg:top-0 lg:border-none lg:w-auto',
        showNav ? 'top-1/2 block' : 'hidden lg:block'
      )}>
      <img
        src={closeNav}
        alt=''
        className='w-full max-w-[16px] absolute top-4 right-4 lg:hidden'
        onClick={() => setShowNav(false)}
      />
      <nav className='flex flex-col items-center space-y-2 pt-16 pb-6 lg:flex-row lg:p-0  lg:space-y-0'>
        {navigationItems.map((nav) => (
          <NavLink
            key={nav.label}
            to={nav.path}
            className='w-fit'
            onClick={() => setShowNav(false)}>
            {isDesktop ? (
              <p className={nav.label === 'Cart' ? 'hidden' : 'px-4 p-[18px]'}>
                {nav.label}
              </p>
            ) : (
              <Button variant='outline'>{nav.label}</Button>
            )}
          </NavLink>
        ))}
      </nav>

      <div className='flex flex-col items-center space-y-2 py-6 border-t-2 border-yellow lg:hidden'>
        <Button variant='outline'>Log in</Button>
        <Button variant='primary'>Sign up</Button>
      </div>
    </div>
  );
};

export default Navigation;
