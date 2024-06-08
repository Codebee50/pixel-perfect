import { FaInstagram } from "react-icons/fa";
import { workTogether } from "../../assets/images";
import { FaXTwitter } from "react-icons/fa6";
import { budjetList, servicesList } from "../../constants";
import ChooseServiceButton from "../../components/ChooseServiceButton";
import { useState } from "react";
import ChooseButton from "../../components/ChooseButton";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import useSendEmail from "../../hooks/useSendEmail";

const Contact = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedBudjetIndex, setSelectedBudjectIndex] = useState(0);
  const [formLoading, setformLoading] = useState(false)
  const {isLoading, sendEmail} = useSendEmail()
  
  const onSetSelectedIndex = (index) => {
    setSelectedIndex(index);
  };

  const onContactFormSubmitHandler = (event) => {
    event.preventDefault();
    setformLoading(true)
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const contact = formData.get("contact");
    const description = formData.get("description");

    console.log(name, contact, description);
  };

  return (
    <section
      className="w-full min-h-screen hero-padding pt-5 scroll-margin-top"
      id="contact"
    >
      <div className="w-full h-[200px] bg-slate-300 relative rounded-lg overflow-hidden">
        <img
          src={workTogether}
          className="w-full h-full object-cover object-center"
          alt=""
        />
        <div className="w-full h-full absolute bg-bg-overlay top-0 p-6 flex items-end">
          <p className="text-white font-bold font-steradian text-4xl">
            Work With Us
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col max-sm:gap-5 sm:flex-row pt-7 ">
        <div className="flex flex-row items-start max-sm:justify-between max-sm:gap-9 flex-wrap sm:flex-col w-full sm:w-[40%]">
          <div className="flex flex-col">
            <p className="text-slate-400 font-steradian">Contacts</p>
            <a
              className="text-black100 text-[1rem] font-steradian underline"
              href="mailto:mail@example.com"
            >
              hello@pixelperfect.com
            </a>
            <a
              className="text-black100 text-[1rem] font-steradian mt-2 underline"
              href="tel:0983822924"
            >
              +234 9382 948 594
            </a>
          </div>

          <div className="flex flex-col sm:mt-8">
            <p className="text-slate-400 font-steradian">Follow</p>
            <div className="flex flex-row gap-2 mt-2">
              <a href="">
                <FaInstagram size={"1.3rem"} />
              </a>
              <a href="">
                <FaXTwitter size={"1.3rem"} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-sm:mt-5 w-full sm:w-[60%]">
          <p className="text-slate-400 font-steradian">HIRE US</p>
          <h1 className="font-steradian text-[2rem] sm:text-[3rem] leading-[1.2] font-medium text-black100">
            Lets Get Started On Your Project!
          </h1>

          <p className="text-slate-400 font-steradian mt-7">Services</p>

          <div className="flex flex-row flex-wrap justify-start">
            {servicesList.map((service, index) => (
              <ChooseServiceButton
                service={service}
                key={`choose-service-${service.name}`}
                index={index}
                selectedIndex={selectedIndex}
                onSetSelectedIndex={onSetSelectedIndex}
              />
            ))}
          </div>

          <p className="text-slate-400 font-steradian mt-7">Your Budjet</p>

          <div className="flex flex-row flex-wrap justify-start">
            {budjetList.map((budjet, index) => (
              <ChooseButton
                selected={index === selectedBudjetIndex}
                key={`choose-budjet-${budjet}`}
                name={budjet}
                onClick={setSelectedBudjectIndex.bind(null, index)}
              />
            ))}
          </div>

          <div className="mt-5 pb-6">
            <form
              action=""
              className="w-full flex flex-col"
              onSubmit={onContactFormSubmitHandler}
            >
              <div className="grid grid-cols-1 tab-500:grid-cols-2 gap-4 items-end">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="name"
                    className="text-slate-400 font-steradian mt-7 text-sm"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border-b-2 w-full outline-none p-2 font-steradian"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label
                    htmlFor="name"
                    className="text-slate-400 font-steradian mt-7 text-sm"
                  >
                    Your email or phone number
                  </label>
                  <input
                    type="text"
                    name="contact"
                    id="contactinput"
                    className="border-b-2 w-full outline-none p-2 font-steradian"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="name"
                  className="text-slate-400 font-steradian mt-7 text-sm"
                >
                  Project Description (Optional)
                </label>
                <textarea
                  rows={3}
                  type="text"
                  name="description"
                  id="description"
                  className="border-b-2 w-full outline-none p-2 font-steradian"
                />
              </div>

              {/* <input
                type="submit"
                value="Submit"
                className="bg-black100 text-white w-full p-4 mt-5 rounded-lg cursor-pointer font-steradian"
              /> */}

              <button type="submit" className={`bg-black100 text-white w-full p-4 mt-5 rounded-lg cursor-pointer font-steradian disabled:bg-green200 disabled:cursor-not-allowed`} disabled={formLoading}>
                {
                  formLoading?    <Spin
                  indicator={
                    <LoadingOutlined
                      style={{
                        fontSize: 24,
                      }}
                      spin
                    />
                  }
                />: <p>Submit</p>

                }
             
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
