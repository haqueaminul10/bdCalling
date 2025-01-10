import FavoriteIcon from '@/icon/favouriteIcon';
import '../../styles/navbar.css';
import CartIcon from '@/icon/cart';
import logo from '../assets/Logo.png';
import Image from 'next/image';
import MenuIcon from '@/icon/menu';
const Navbar = () => {
  const navbarMenu = ['Home', 'Shop', 'About us', 'Blog'];
  return (
    <div className='navbar-container '>
      <section className='left-section' style={{ backgroundColor: '#f4f4f4' }}>
        <div className='logo-container'>
          <div className='logo-div'>
            <Image src={logo} width={40} height={40} alt='logo' />
          </div>
          <h1 className='company-title'>Fresh Harvests</h1>
        </div>
        <div className='menu-container'>
          {navbarMenu.length > 0 &&
            navbarMenu.map((menuItem, index) => (
              <div key={index} className='menu-list'>
                {menuItem}
              </div>
            ))}
        </div>
      </section>
      <section className='right-section' style={{ backgroundColor: '#759b40' }}>
        <div className='favourite-items hide-on-mobile'>
          <FavoriteIcon color='#FFFFFF' size='24' />
          <span className='favourite-text'>Favourite</span>
        </div>
        <div className='cart-items'>
          <CartIcon color='#FFFFFF' size='24' />
          <span className='cart-text hide-on-mobile'>Cart</span>
        </div>
        <div className='menu-icon'>
          <MenuIcon color='#FFFFFF' size='24' />
        </div>
        <div className='signin-button-container hide-on-mobile'>
          <button
            className='signin-button'
            style={{ backgroundColor: '#759b40' }}
          >
            Sign In
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
