import { copyrightSign } from "../assets/icons";
import { footerLinks, socialMedia } from "../constants";
import { whiteLogo } from "../assets/icons";

const Footer = () => {
  return(
    <footer className="max-container hero-padding bg-black py-16">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
            
            <a href="/">
              <img src={whiteLogo} width={30} height={46} alt="" />
            </a>

            <p className="mt-6 text-base leading-7 font-steradian text-white-400 sm:max-w-sm">Get a custom, responsive website that fits your brand perfectly. Explore our services and get exclusive offers today!</p>

            <div className="flex items-center gap-5 mt-8">
              {
                socialMedia.map((icon)=>(
                  <a key={icon.src} className="flex justify-center items-center w-12 h-12 bg-white rounded-full" href={icon.href}>
                    <icon.src size={'1.3rem'}/>
                    {/* <img src={icon.src} alt={icon.alt}width={24} height={24}/> */}
                  </a>
                ))
              }
            </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {
                footerLinks.map((section)=> (
                  <div key={section}>
                    <h4 className="text-white font-steradian text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                    <ul>
                      {
                        section.links.map((link)=>(
                          <li key={link.name} className="mt-3 text-white-400 font-steradian text-base leading-normal hover:text-slate-gray">
                            <a href={link.link}>{link.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
            <div className="flex flex-1 justify-start items-center gap-2 font-steradian cursor-pointer">
              <img src={copyrightSign} alt="Copy right sign" width={20} height={20} className="rounded-full m-0" />

              <p>Copyright. All rights reserved.</p>
            </div>
            <p className=" font-steradian cursor-pointer">Pixel Perfect</p>
      </div>
    </footer>
  ) ;
};

export default Footer;
