import '../../styles/hero.css';
import Image from 'next/image';
import pizza from '../assets/pizza.png';
import child from '../assets/child.png';
const Hero = () => {
  return (
    <div className='hero-container'>
      <section className='hero-left'>
        <div>
          <button className='welcome-fresh'>Welcome to Fresh Harvest</button>
          <h1 className='hero-title'>Fresh Fruit and Vegetables</h1>
          <p className='hero-details'>
            At Fresh GHarvest we are about providing you with the freshest and
            most favourful fruit and vegetables
          </p>
          <button className='shop-now'>Shop now</button>
        </div>

        <div className='special-offer'>
          <div>
            <h5 className='s-title'>Special Offer</h5>
            <h3 className='s-main-title'>Fresh Salad</h3>
            <p className='up-to'>
              up to <span>70% off</span>
            </p>
          </div>
          <div>
            <Image
              src={pizza}
              width={70}
              height={70}
              alt='Picture of the author'
            />
          </div>
        </div>
      </section>
      <section className='hero-right'></section>
      <div className='hero-image'>
        {/* <Image
          src={child}
          width={700}
          height={700}
          alt='Picture of the author'
        /> */}
      </div>
    </div>
  );
};

export default Hero;
