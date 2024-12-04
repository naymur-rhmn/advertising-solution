function Navbar() {
  return (
    <header className="bg-yellow-200 ">
      <div className="h-[80px] relative">
        <div className="max-w-screen-lg mx-auto p-4  bg-green-400 h-full">
          <div className="flex h-full w-full items-center">
            {/* logo */}
            <div className="pr-[100px] text-white">
              <a className="font-yatra text-[28px]" href="#">
                Hybird
              </a>
            </div>
            {/* nav */}
            <nav className="flex justify-between items-center w-full">
              <ul className="flex gap-4">
                <li>Solution</li>
                <li>Platform</li>
                <li>Semantica 360&deg;</li>
                <li>About</li>
              </ul>
              <ul className="flex pr-[60px]">
                <li>All Services</li>
              </ul>
            </nav>
          </div>
        </div>
        {/* user */}
        <div className="absolute right-10 top-0 bg-red-300 h-full  items-center md:flex hidden">
          user
        </div>
      </div>
    </header>
  );
}

export default Navbar;
