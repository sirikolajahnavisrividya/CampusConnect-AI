function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-md">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-blue-600">
        CampusConnect AI
      </h1>

      {/* Navigation */}
      <ul className="flex gap-8 text-lg font-medium">
        <li>
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-600 transition">
            Features
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-600 transition">
            About
          </a>
        </li>

        <li>
          <a
            href="#"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;