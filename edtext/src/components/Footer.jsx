import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1e35] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold text-[#00b3ff]">edtextain</h2>
          <p className="text-sm mt-2">
            Edtextain e.V. is registered as a nonprofit at the Administrative Court of Munich with the registration number VR 208721.
          </p>
          <address className="text-sm mt-2 not-italic">
            Address:<br />
            C/o Michaelzeit GmbH Bodenstedt 20<br />
            81243 München.<br />
            Phone: +49-157-40098694<br />
            Email: hello@edtextain.com
          </address>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-sm hover:text-[#00b3ff]">About us</a></li>
            <li><a href="#" className="text-sm hover:text-[#00b3ff]">Projects</a></li>
            <li><a href="#" className="text-sm hover:text-[#00b3ff]">News</a></li>
            <li><a href="#" className="text-sm hover:text-[#00b3ff]">Events</a></li>
            <li><a href="#" className="text-sm hover:text-[#00b3ff]">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-sm hover:text-[#00b3ff]">Help & FAQ</a></li>
            <li><a href="#" className="text-sm hover:text-[#00b3ff]">Pricing</a></li>
            <li><a href="#" className="text-sm hover:text-[#00b3ff]">Contact us</a></li>
            <li><a href="#" className="text-sm hover:text-[#00b3ff]">Terms of service</a></li>
            <li><a href="#" className="text-sm hover:text-[#00b3ff]">Privacy policy</a></li>
          </ul>
        </div>
      </div>

      <div className="bg-red-600 text-center text-sm py-4 mt-8">
        © 2025 All rights reserved
      </div>
    </footer>
  );
};

export default Footer;