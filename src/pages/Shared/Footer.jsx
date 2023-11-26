const Footer = () => {
  return (
    <footer className="bg-gray-100 py-5 space-y-3">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <img src="https://i.ibb.co/nnHbDZS/H.png" alt="" className="w-[80px]"/>
            <h6 className="text-xl font-semibold">About HeartBond</h6>
            <p className="text-sm mt-2">
              HeartBond is dedicated to helping individuals find their life
              partners.
            </p>
          </div>
          <div>
            <h6 className="text-xl font-semibold">Useful Links</h6>
            <p className="text-sm mt-2">
              <a href="#" className="block mb-2">
                Home
              </a>
              <a href="#" className="block mb-2">
                Biodatas
              </a>
              <a href="#" className="block mb-2">
                About Us
              </a>
              <a href="#" className="block mb-2">
                Contact Us
              </a>
            </p>
          </div>
          <div>
            <h6 className="text-xl font-semibold">Contact</h6>
            <p className="text-sm mt-2">
              Address: 1234 HeartBond St, City, Country
              <br />
              Email: info@heartbond.com
              <br />
              Phone: +1234567890
            </p>
          </div>
        </div>
        <p className="text-sm text-center mt-6">
          &copy; {new Date().getFullYear()} HeartBond Matrimony. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
