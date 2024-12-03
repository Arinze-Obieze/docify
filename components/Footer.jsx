import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { CiInstagram } from "react-icons/ci";

function Footer() {
  const router = useRouter();
  const currentPath = router.pathname;

  const navLinks = [
    { href: '/contact', label: 'Contact support' },
    { href: '/faq', label: 'FAQs' },
    { href: '/all-collections', label: 'Browse All Help Articles' },
  ];

  return (
    <div className="bg-gray-100 pt-12 pb-6">
      <div>
        <div className="flex max-md:flex-col max-md:place-items-center max-md:space-y-8 justify-around">
          {/* Navigation Links */}
          <div className="flex max-md:flex-col max-md:space-y-4 font-[600] max-md:text-center text-[15px] md:space-x-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`hover:text-[#4831d4] ${
                  currentPath === link.href ? 'underline text-[#4831d4]' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-2 text-gray-500 text-xl">
            <CiInstagram />
            <CiInstagram />
            <CiInstagram />
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-gray-500 pt-8 max-md:mt-4 text-[15px] text-center">
          <h4>© 2024 Docify Template for Framer</h4>
        </div>

        {/* Footer Links */}
        <div className="flex space-x-4 pt-4 justify-center w-full text-gray-500 text-[12px]">
          <h4>Terms & Conditions</h4>
          <h4>Privacy Policy</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
