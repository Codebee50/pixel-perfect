import { useState } from "react";

const useSendEmail = () => {
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail({
    toEmail,
    toName,
    senderName = "sender",
    senderEmail = "sender@example.com", //default values
    subject = "Email",
    htmlContent,
    onSuccess = () => {},
    onError = () => {},
    onFinished = () => {},
  }) {
    if (!toEmail || !toName || !htmlContent) return;

    fetch("https://api.sendinblue.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": `${import.meta.env.VITE_SEND_IN_BLUE_API}`,
        "content-type": "application/json",
        "X-Sib-Sandbox": "drop",
      },
      body: JSON.stringify({
        sender: {
          name: senderName,
          email: senderEmail,
        },
        to: [
          {
            email: toEmail,
            name: toName,
          },
        ],
        subject: subject,
        htmlContent: htmlContent,
        headers: {
          "X-Mailin-custom":
            "custom_header_1:custom_value_1|custom_header_2:custom_value_2|custom_header_3:custom_value_3",
          charset: "iso-8859-1",
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          onError();
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error))
      .finally(onFinished);
  }

  return {
    isLoading,
    sendEmail
  };
};

export default useSendEmail;
