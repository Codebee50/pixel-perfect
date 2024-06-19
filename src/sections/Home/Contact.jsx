import { FaInstagram } from "react-icons/fa";
import { workTogether } from "../../assets/images";
import { FaXTwitter } from "react-icons/fa6";
import { budjetList, servicesList } from "../../constants";
import ChooseServiceButton from "../../components/ChooseServiceButton";
import ChooseButton from "../../components/ChooseButton";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, notification } from "antd";

import useSendEmail from "../../hooks/useSendEmail";

import { configurationActions } from "../../store";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Contact = () => {
  const selectedService = useSelector((state) => state.configuration.service);
  const selectedBudjet = useSelector((state) => state.configuration.budjet);

  const dispatch = useDispatch();

  const { isLoading: formLoading, sendEmail } = useSendEmail();

  const makeHtmlContent = (name, contact, description) => {
    return `
    <html>
    <head></head>
    <body style="padding: 30px;">
        <br>
        <h1>New mail from Pixel perfect website</h1>
        <br><br>
  
        <p><b>Name: </b> ${name}</p> <br>
        <p><b>Contact info: </b> ${contact}</p> <br>
        <p><b>Message:</b> ${description}</p> <br>
        <p><b>Selected service:</b> ${servicesList[selectedService].name}</p> <br>
        <p><b>Selected budjet:</b> ${budjetList[selectedBudjet]}</p> <br>
        <br>
    </body>
    </html>
    `;
  };

  const onSetSelectedIndex = (index) => {
    dispatch(configurationActions.setService({ service: index }));
  };

  const onSetSelectedBudjet = (index) => {
    dispatch(configurationActions.setBudjet({ budjet: index }));
  };

  const onEmailSent = () => {
    // openNotification(
    //   "Email sent!",
    //   "We appreciate you contacting Pixel Perfect. We have received the details of your request and a member of our team will be in touch shortly to discuss it further."
    // );

    notification.success({
      message:
        "We appreciate you contacting Pixel Perfect. We have received the details of your request and a member of our team will be in touch shortly to discuss it further.",
      duration: 10,
      className: "font-steradian",
    });
  };

  const onEmailError = () => {
    notification.error({
      message:
        "An error occured while trying to deliver youe email, please ensure you are connected to the internet and try again.",
      duration: 7,
      className: "font-steradian",
    });
  };

  const onContactFormSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const contact = formData.get("contact");
    const description = formData.get("description");

    const htmlEmail = makeHtmlContent(name, contact, description);

    sendEmail({
      toEmail: "onuhudoudo@gmail.com",
      toName: "PixelPerfect",
      senderName: name,
      senderEmail: "onuhudoudo@gmail.com",
      subject: `Pixel perfect mail from ${name}`,
      htmlContent: htmlEmail,
      onSuccess: onEmailSent,
      onError: onEmailError,
    });
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
          alt="Work with pixel perfect"
          loading="lazy"
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
                selectedIndex={selectedService}
                onSetSelectedIndex={onSetSelectedIndex}
              />
            ))}
          </div>

          <p className="text-slate-400 font-steradian mt-7">Your Budjet</p>

          <div className="flex flex-row flex-wrap justify-start">
            {budjetList.map((budjet, index) => (
              <ChooseButton
                selected={index === selectedBudjet}
                key={`choose-budjet-${budjet}`}
                name={budjet}
                onClick={onSetSelectedBudjet.bind(null, index)}
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

              <button
                type="submit"
                className={`bg-black100 text-white w-full p-4 mt-5 rounded-lg cursor-pointer font-steradian disabled:bg-green200 disabled:cursor-not-allowed`}
                disabled={formLoading}
              >
                {formLoading ? (
                  <Spin
                    indicator={
                      <LoadingOutlined
                        style={{
                          fontSize: 24,
                        }}
                        spin
                      />
                    }
                  />
                ) : (
                  <p>Submit</p>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
