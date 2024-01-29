import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex items-center max-xl:flex-col-reverse gap-10 max-xl:gap-16 max-container'>
      <div className='flex-1 relative'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
        Are you looking for a great bargain on shoes? Then you’ve come to the right place. In our special offer section, you can find amazing deals on a wide range of footwear.
        </p>
        <p className='mt-6 info-text'>
        You can save up to 50% off the regular price in our special offer section. But hurry, these offers won’t last long. Shop now and enjoy free shipping and returns on all orders. Don’t miss this opportunity to get your dream shoes at a fraction of the cost.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
