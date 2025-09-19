import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import { RiMenu3Line, RiMenu4Fill } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import ProductList from "../ProductsList/ProductList";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Load searchTerm from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("search") || "";
    setSearchTerm(query);
  }, [location.search]);

  // Update suggestions
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
    } else {
      const matches = ProductList.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(matches.slice(0, 5));
    }
  }, [searchTerm]);

  const handleMenu = () => setShowMenu(!showMenu);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    // Update recent searches
    setRecentSearches((prev) => {
      const updated = [searchTerm, ...prev.filter((t) => t !== searchTerm)];
      return updated.slice(0, 5);
    });

    navigate(`/all_products?search=${searchTerm}`);
    setDropdownVisible(false);
  };

  const handleSuggestionClick = (title) => {
    setSearchTerm(title);
    navigate(`/all_products?search=${title}`);
    setDropdownVisible(false);

    // update recent searches
    setRecentSearches((prev) => {
      const updated = [title, ...prev.filter((t) => t !== title)];
      return updated.slice(0, 5);
    });
  };

  return (
    <section>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="flex justify-between items-center md:h-20 h-15 fixed top-0 left-0 right-0 max-w-[1400px] mx-auto bg-white">
          {/* Logo */}
          <div className="flex justify-between h-14 items-center px-4">
            <p className="text-3xl font-semibold tracking-wider">
              Gr<span className="uppercase font-semibold text-orange-600">o</span>cify
            </p>
          </div>

          {/* Desktop Menu */}
          <ul className="md:flex gap-x-13 tracking-wider hidden">
            <li><a href="" className="text-base text-orange-600">Home</a></li>
            <li><a href="" className="text-base hover:text-orange-600">About Us</a></li>
            <li><a href="" className="text-base hover:text-orange-600">Process</a></li>
            <li><a href="" className="text-base hover:text-orange-600">Contact Us</a></li>
          </ul>

          {/* Search + suggestions */}
          <div className="md:flex items-center justify-between gap-3 hidden relative">
            <form onSubmit={handleSearchSubmit} className="rounded-full w-fit border-2 border-orange-500 flex items-center p-1 relative">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 focus:outline-none focus:ring-0 text-black"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setDropdownVisible(true);
                }}
                onFocus={() => setDropdownVisible(true)}
              />
              <button className="bg-orange-500 flex justify-center items-center ml-auto p-3 rounded-full text-white font-bold cursor-pointer">
                <FaSearch />
              </button>

              {/* suggestions / recent searches dropdown */}
              {dropdownVisible && (suggestions.length > 0 || recentSearches.length > 0) && (
                <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-md z-50">
                  {searchTerm.trim() === "" ? (
                    recentSearches.map((term, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                        onClick={() => handleSuggestionClick(term)}
                      >
                        {term}
                      </li>
                    ))
                  ) : (
                    suggestions.map((item) => (
                      <li
                        key={item.id}
                        className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                        onClick={() => handleSuggestionClick(item.title)}
                      >
                        {item.title}
                      </li>
                    ))
                  )}
                </ul>
              )}
            </form>

            <div className="flex justify-center items-center gap-3 text-2xl">
              <FaHeart />
              <FaShoppingCart />
            </div>
          </div>

          {/* Mobile Menu */}
          <ul className={`flex flex-col bg-orange-500/15 backdrop-blur-3xl p-12 absolute top-30 -left-full transform -translate-x-1/2 gap-y-9 rounded-2xl tracking-wider md:hidden transition-all duration-500 ${showMenu ? "left-1/2" : ""}`}>
            <li><a href="" className="text-base text-orange-600">Home</a></li>
            <li><a href="" className="text-base hover:text-orange-600">About Us</a></li>
            <li><a href="" className="text-base hover:text-orange-600">Process</a></li>
            <li><a href="" className="text-base hover:text-orange-600">Contact Us</a></li>

            <li className="rounded-full w-fit border-2 border-orange-500 flex items-center p-1 relative">
              <form onSubmit={handleSearchSubmit} className="flex items-center w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="p-2 focus:outline-none focus:ring-0 text-black"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setDropdownVisible(true);
                  }}
                  onFocus={() => setDropdownVisible(true)}
                />
                <button className="bg-orange-500 flex justify-center items-center ml-auto p-3 rounded-full text-white font-bold cursor-pointer">
                  <FaSearch />
                </button>

                {dropdownVisible && (suggestions.length > 0 || recentSearches.length > 0) && (
                  <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-md z-50">
                    {searchTerm.trim() === "" ? (
                      recentSearches.map((term, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                          onClick={() => handleSuggestionClick(term)}
                        >
                          {term}
                        </li>
                      ))
                    ) : (
                      suggestions.map((item) => (
                        <li
                          key={item.id}
                          className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                          onClick={() => handleSuggestionClick(item.title)}
                        >
                          {item.title}
                        </li>
                      ))
                    )}
                  </ul>
                )}
              </form>
            </li>
          </ul>

          <button className="text-3xl md:hidden block" onClick={handleMenu}>
            {showMenu ? <RiMenu4Fill /> : <RiMenu3Line />}
          </button>
        </nav>
      </header>
    </section>
  );
};

export default NavBar;
