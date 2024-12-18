function SingleBrand({ brandImg }) {
  return (
    <div className="py-8 md:px-8 px-12 h-[150px] brand-image">
      <img className="h-full w-full" src={brandImg} alt="" />
    </div>
  );
}

export default SingleBrand;
