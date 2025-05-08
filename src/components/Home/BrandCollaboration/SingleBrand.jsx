function SingleBrand({ brandImg }) {
  return (
    <div className="md:py-8 py-4 md:px-8 px-6 h-[90px] md:h-[150px] brand-image">
      <img className="h-full w-full" src={brandImg} alt="" />
    </div>
  );
}

export default SingleBrand;
