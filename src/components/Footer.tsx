import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
function Footer() {
  const [links] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);
  const [icons] = useState(["facebook", "twitter", "instagram"]);
  return (
    <section className="bg-[#0c1524] pt-[350px] md:pt-[200px] pb-[200px] text-white">
      <div className="container">
        <a href="/">
          <img
            src="/src/assets/svg/logo.svg"
            alt="logo-img"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src="/src/assets/svg/icon-location.svg"
              alt="location-image"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              nostrum reprehenderit quas, ut excepturi ab consequuntur magni
              neque blanditiis dolores{" "}
            </p>
          </div>
          <div>
            <div className="flex  items-center gap-[15px] mb-[15px]">
              <img
                src="/src/assets/svg/icon-phone.svg"
                alt="phone-image"
                className="w-[18px] h-[18px] object-contain"
              />
              <p>+963 9957 252 292</p>
            </div>
            <div className="flex  items-center gap-[15px]">
              <img
                src="/src/assets/svg/icon-email.svg"
                alt="phone-image"
                className="w-[18px] h-[18px] object-contain"
              />
              <a href="mailto:hakamha8@gmail.com">hakamha8@gmail.com</a>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-primaryColor transition-colors duration-200 text-base"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {icons.map((icon) => (
              <li key={icon}>
                <a href={icon} className="group">
                  <div className="w-[40px] h-[40px] element-center  border border-white rounded-[50%]">
                    {icon === "facebook" ? (
                      <FaFacebookF className="group-hover:text-primaryColor transition-all duration-200"/>
                    ) : icon === "twitter" ? (
                      <FaTwitter className="group-hover:text-primaryColor transition-all duration-200"/>
                    ) : (
                      <FaInstagram className="group-hover:text-primaryColor transition-all duration-200"/>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
