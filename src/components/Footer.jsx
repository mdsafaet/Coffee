import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold text-green-400 mb-3">
              Book Vibe
            </h2>

            <p className="text-gray-300 leading-7">
              Discover thousands of books, create your personal reading list,
              and keep track of your favorite reads all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/listedbooks"
                  className="hover:text-green-400 transition"
                >
                  Listed Books
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-green-400 transition"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-green-500 transition flex items-center justify-center"
              >
              <FaFacebook />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-green-500 transition flex items-center justify-center"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-green-500 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-green-500 transition flex items-center justify-center"
              >
                <FaGithub />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} <span className="text-green-400 font-semibold">Book Vibe</span>. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};