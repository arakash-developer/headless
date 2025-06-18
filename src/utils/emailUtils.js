import emailjs from "@emailjs/browser";
export const sendConfirmationEmail = async (email, content) => {
  const serviceId = "service_1opv72v";
  const templateId = "template_42y797p";
  const publicKey = "U7BNWQ16r0A7GfYbR";
  //   const confirmationUrl = `https://4ami-client.wp1.sh/confirmemail/${email}`;
  return emailjs.send(
    serviceId,
    templateId,

    {
      email,
      to_name: "Dear",
      passcode: content,
    },
    {
      publicKey: publicKey,
    }
  );
};
