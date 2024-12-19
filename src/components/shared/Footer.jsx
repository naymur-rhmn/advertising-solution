function Footer() {
  return (
    <footer className="bg-white z-50 relative">
      <div className="lg-container">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4  border-t py-10">
          {/* single column */}
          <div>
            <h4 className="uppercase   mb-3">products</h4>
            <ul className="flex flex-col gap-2 text-primary  font-light">
              <li>Hybrid Platform</li>
              <li>Semantica 360&deg;</li>
              <li>TV Sync</li>
              <li>DMP</li>
            </ul>
          </div>
          {/* single column */}
          <div>
            <h4 className="uppercase  mb-3">For clients</h4>
            <ul className="flex flex-col gap-2 text-primary font-light">
              <li>Technical requirements</li>
              <li>Case Studies</li>
              <li>Blog</li>
            </ul>
          </div>
          {/* single column */}
          <div>
            <h4 className="uppercase  mb-3">Contact us</h4>
            <ul className="flex flex-col gap-2 text-primary font-light">
              <li>About Hybrid</li>
              <li>Contacts</li>
            </ul>
          </div>
          {/* single column */}
          <div>
            <h4 className="uppercase  mb-2 text-blue-500 text-2xl">
              Ready to start?
            </h4>
            <p className="pt-4 pb-6 text-primary font-light">
              Get a personalized quotation
            </p>
            <div className="">
              <button className="uppercase bg-slate-600 px-4 py-3 text-white text-sm rounded">
                work with us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EBF1F8] py-6">
        <div className="lg-container">
          <div className="flex gap-2">
            <p className="text-base w-1/3">&copy;Adaptive</p>
            <div className="flex list-none gap-1 font-light text-primary md:w-1/3">
              <li>Sitemap</li>
              <li>/</li>
              <li>Privacy policy.</li>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
