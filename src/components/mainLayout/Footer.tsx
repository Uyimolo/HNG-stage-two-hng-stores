import Logo from '../Logo';
import paypal from '../../assets/images/paypal.svg';
import masterCard from '../../assets/images/logos_mastercard.svg';
import visaCard from '../../assets/images/visa.svg';

import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';
import instagram from '../../assets/images/instagram.svg';
import linkedIn from '../../assets/images/linkedIn.svg';

const categoriesList = [
  { category: 'Electronics' },
  { category: 'Shorts' },
  { category: 'Shirts' },
  { category: 'Phones and gadgets' },
  { category: 'Cooking utensils' },
  { category: 'Gaming' },
  { categroy: 'Sneakers' },
  { category: 'Health' },
  { category: 'Cars' },
];

const helpSection = [
  { name: 'Contact Us' },
  { name: 'Chat With Us' },
  { name: 'Help Center' },
];

const paymentSection = [
  { platform: 'paypal', icon: paypal, path: '' },
  { platform: 'master card', icon: masterCard, path: '' },
  { platform: 'visa', icon: visaCard, path: '' },
];

const SocialsSection = [
  { platform: 'facebook', icon: facebook, path: '' },
  { platform: 'twitter', icon: twitter, path: '' },
  { platform: 'instagram', icon: instagram, path: '' },
  { platform: 'linkedIn', icon: linkedIn, path: '' },
];

const footerParagraph =
  'text-white text-[8px] xs:text-[10px] md:text-xs lg:text-base ';

const headingClass =
  'mb-3 text-xs font-bold font-nunito text-white xs:text-base md:text-xl lg:text-2xl';

const Footer = () => {
  return (
    <footer className='bg-primary'>
      {/* footer info */}
      <div className=' px-4 py-12 grid grid-cols-[40%,1fr] lg:px-12 xl:px-16'>
        {/* logo and address*/}
        <div className='space-y-2'>
          <Logo variant='footer' />
          <p className='text-white text-[7.5px] xs:text-[10px] md:text-base lg:text-2xl '>
            4 Banana Street,
            <br /> Yaba Lagos State, Nigeria.
          </p>
        </div>

        {/* other information */}
        <div className='grid grid-cols-2 lg:grid-cols-3'>
          {/* categories */}
          <div className=''>
            {/* heading */}
            <h5 className={headingClass}>Categories</h5>
            {/* content */}
            <div className=''>
              {categoriesList.map((category) => (
                <p className={footerParagraph}>{category.category}</p>
              ))}
            </div>
          </div>

          {/* need help */}
          <div>
            {/* heading */}
            <h5 className={headingClass}>Need help?</h5>
            {/* content */}
            <div className=''>
              {helpSection.map((help) => (
                <p className={footerParagraph}>{help.name}</p>
              ))}
            </div>
          </div>

          <div className='space-y-6'>
            {/* payment */}
            <div className=''>
              {/* heading */}
              <h5 className={headingClass}>Payment</h5>
              {/* content */}
              <div className='flex gap-2'>
                {paymentSection.map((paymentPlatform) => (
                  <img
                    src={paymentPlatform.icon}
                    alt={paymentPlatform.platform}
                    className='w-[11px] lg:w-4'
                  />
                ))}
              </div>
            </div>

            {/* socials (shows only on large screens)*/}
            <div className='hidden lg:block'>
              <p className={headingClass}>Follow Us</p>
              <div className='flex gap-2'>
                {SocialsSection.map((social) => (
                  <img
                    src={social.icon}
                    alt={social.platform}
                    className='w-[11px] lg:w-4'
                  />
                ))}
              </div>
            </div>
          </div>

          {/* socials */}
          <div className='lg:hidden'>
            <p className={headingClass}>Follow Us</p>
            <div className='flex gap-2'>
              {SocialsSection.map((social) => (
                <img
                  src={social.icon}
                  alt={social.platform}
                  className='w-[11px]'
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* closing remarks lol */}
      <div className='border-t-2 border-yellow py-4 flex justify-between px-4 lg:px-12 xl:px-16'>
        <p className={footerParagraph + 'font-bold'}>
          2024 HNG Stores{' '}
          <span className='font-normal'>All rights reserved</span>
        </p>

        <div className='flex space-x-4 lg:space-x-8 '>
          <p className={footerParagraph}>Privacy Policy</p>
          <p className={footerParagraph}>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
