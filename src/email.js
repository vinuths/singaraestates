import emailjs from "@emailjs/browser";

// Send contact form email
export const sendEmail = (formData) => {
  return emailjs.send(
    "service_ykcid39",       // Your EmailJS Service ID
    "template_dnjv7mp",      // Your EmailJS Template ID
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      title: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(), // optional timestamp
    },
    "OPhTsGf0NP1tNhEmT"        // Your EmailJS Public Key
  );
};
