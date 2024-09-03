const Footer = () => {
  return (
    <div className="mt-[2.3rem] border-[1px] bg-white">
      <div className=" w-[100%] border-t border-black">
        <div className=" py-5 w-[96%] mx-auto items-center justify-between sm:flex ">
          <p className="text-gray-400 text-center font-sans">
            © 2024 XBattery. All rights reserved.
          </p>
          <div className="flex gap-2">
          <div>Join us - </div>
          <div className="flex items-center justify-center gap-x-6 text-gray-500 mt-6 sm:mt-0">
            <a
              href="mailto:support@XBattery.energy"
              target="_blank"
              rel="noreferrer"
              aria-label="email"
            >
              <svg
                className="w-6 h-6 hover:text-black duration-150"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  d="M4 8h40a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V12a4 4 0 014-4zm0 2v1.514l20 13.253 20-13.253V10H4zm0 4.514V36h40V14.514l-20 13.253-20-13.253z"
                />
              </svg>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
