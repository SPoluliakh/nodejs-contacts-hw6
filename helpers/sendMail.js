const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, SENDGRID_EMAIL } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);
const sendMail = async (data) => {
  try {
    const email = { ...data, from: SENDGRID_EMAIL };
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};
module.exports = sendMail;

// const email = {
//   to: "S_Poluliakh@ukr.net",
//   from: "passverify@meta.ua",
//   subject: " Email`s verify",
//   html: "<a target='_blank' href='' >Go to verify email</a>",
// };

// sgMail.send(email).then().catch();
