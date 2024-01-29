const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : " border-gray-300"
      } cursor-pointer`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center sm:w-40 sm:h-40 rounded-xl'>
        <img
          src={imgURL.bigShoe}
          alt='shoe colletion'
          width={127}
          height={103.34}
          className='object-cover object-bottom w-full h-full'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
