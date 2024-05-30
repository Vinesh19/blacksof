import Image from "next/image";

const Footer = () => {
  return (
    <section className="footer h-[70vh] bg-center bg-cover bg-no-repeat px-[10%] lg:px-[14%] py-[6%] flex flex-col justify-between">
      <div className="flex flex-col lg:flex-row gap-6 lg:justify-between lg:items-center">
        <div>
          <Image
            src="/smart-lights-logo.svg"
            width={200}
            height={200}
            alt="smart light logo"
          />
        </div>
        <div>
          <ul className="text-white text-lg flex flex-col lg:flex-row gap-5 lg:gap-12 items-baseline">
            <li>Product</li>
            <li>Software Services</li>
            <li>Follow Us</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="max-w-[100%] md:max-w-[70%] mb-5 bg-white" />
        <p className=" text-white flex flex-col md:flex-row gap-5">
          <span>Privacy Policy</span>
          <span className="hidden md:block">|</span>
          <span>Terms & Conditions</span>
          <span className="hidden md:block">|</span>
          <span>Cookie Policy</span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
