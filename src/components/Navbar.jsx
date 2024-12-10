function Navbar() {
  return (
    <nav className="bg-gray-950 shadow-sm sticky top-0 z-50">
      <ul className="flex flex-col md:flex-row justify-around items-center px-4 py-3 md:px-8">
        <li className="text-lg text-zinc-50 hover:text-sky-500 transition-colors duration-300">
          <a href="#overview">Overview</a>
        </li>
        <li className="text-lg text-zinc-50 hover:text-sky-500 transition-colors duration-300">
          <a href="#causes">Causes</a>
        </li>
        <li className="text-lg text-zinc-50 hover:text-sky-500 transition-colors duration-300">
          <a href="#diagnostics">Diagnostics</a>
        </li>
        <li className="text-lg text-zinc-50 hover:text-sky-500 transition-colors duration-300">
          <a href="#maintenance">Maintenance & Treatment</a>
        </li>
        <li className="text-lg text-zinc-50 hover:text-sky-500 transition-colors duration-300">
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
