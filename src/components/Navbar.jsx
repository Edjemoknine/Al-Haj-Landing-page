const Navbar = () => {
  return (
    <header className="bg-backg text-white py-6">
      <nav className="container mx-auto px-8 flex justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl  font-bold ">
            <a to="/">Ziyara</a>
          </h1>
        </div>
        <ul className="flex gap-4">
          <a href="#">Home</a>
          <a href="#">Haj</a>
          <a href="#">Omra</a>
          <a href="#">Packages</a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
