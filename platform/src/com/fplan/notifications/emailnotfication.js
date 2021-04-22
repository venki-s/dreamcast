const nodemailer = require("nodemailer");

const emailProcess = () => {
  let transport = nodemailer.createTransport({
    host: "gmail",
    auth: {
      user: "svd.kumar@gmail.com",
      pass: "xxxxxxxxx",
    },
  });

  const message = {
    from: "svd.kumar@gmail.com",
    to: "kumar.svd@email.com",
    subject: "Successfully registered with My Portfolio Home",
    text:
      "Your registration is almost complete. To avail all the feautres, click on the below link to complete the registration",
  };
  const info = transport.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

module.exports = emailProcess;
