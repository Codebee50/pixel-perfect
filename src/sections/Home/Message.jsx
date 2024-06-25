import useSendEmail from "../../hooks/useSendEmail";

import { Spin, notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Message = () => {
  const { isLoading: formLoading, sendEmail } = useSendEmail();

  const makeHtmlContent = (contact, message) => {
    return `
    <html>
    <head></head>
    <body style="padding: 30px;">
        <br>
        <h1>New enquiry mail from Pixel perfect website</h1>
        <br><br>
  
        <p><b>Contact info: </b> ${contact}</p> <br>
        <p><b>Message:</b> ${message}</p> <br>
        
        <br>
    </body>
    </html>
    `;
  };

  const onEmailSent = () => {
    notification.success({
      message: "Thanks for your message, we'll be in touch shortly",
      duration: 10,
      className: "font-steradian",
    });
  };

  const onEmailError = () => {
    notification.error({
      message:
        "An error occured while trying to deliver your email, please ensure you are connected to the internet and try again.",
      duration: 7,
      className: "font-steradian",
    });
  };

  const onContactFormSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const contact = formData.get("contact");
    const message = formData.get("message");

    const htmlEmail = makeHtmlContent(contact, message);

    sendEmail({
      toEmail: "pixelperfectwork@protonmail.com",
      toName: "PixelPerfect",
      senderName: contact,
      senderEmail: "pixelperfectwork@protonmail.com",
      subject: `Pixel perfect mail from ${contact}`,
      htmlContent: htmlEmail,
      onSuccess: onEmailSent,
      onError: onEmailError,
    });
  };

  return (
    <section id="message" className="scroll-margin-top p-5 w-full hero-padding min-h-[70vh] bg-purple100 bg-[url('/src/assets/images/linebackground.svg')] bg-no-repeat bg-cover bg-center flex flex-col sm:flex-row items-center justify-center">
      <div className="flex flex-col w-full max-sm:text-center sm:w-[50%]">
        <p className="font-steradian font-bold text-[1.5rem] sm:text-4xl text-white">
          Send us a message
        </p>
        <p className="text-white-400 max-sm:text-sm mt-2 font-steradian sm:max-w-[400px]">
          {
            "Have a question or just want to say hello? Send us a message, we're always delighted to hear from you."
          }
        </p>
      </div>

      <div className="flex flex-col w-full sm:w-[50%] max-sm:mt-10 items-center justify-center">
        <form action="" className="flex flex-col w-full px-3 sm:px-10 gap-5" onSubmit={onContactFormSubmitHandler}>
          {/* <input
            type="text"
            className="bg-white px-4 py-4 max-w-[500px] rounded-lg font-steradian shadow-lg outline-purple100"
            placeholder="Your name"
          /> */}
          <input
            type="text"
            name="contact"
            className="bg-white px-4 py-4 sm:max-w-[500px] rounded-lg font-steradian shadow-lg outline-purple100"
            placeholder="Enter your phone or email"
          />
          <textarea
            name="message"
            className="bg-white px-4 py-4 sm:max-w-[500px] rounded-lg font-steradian shadow-lg outline-purple100"
            placeholder="Message"
            cols={30}
            rows={4}
            id=""
          ></textarea>

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
    </section>
  );
};

export default Message;
