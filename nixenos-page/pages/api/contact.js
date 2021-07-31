require('dotenv').config()
const PASSWORD = process.env.password

function contact_api(req, res) {
    let nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'demo@demo.gmail',
            pass: 'password',
        },
        secure: true,
    })

    const mailData = {
        from: 'contact@mail.nixenos.ovh',
        to: 'messages@mail.nixenos.ovh',
        subject: `My website: message From ${req.body.name}`,
        text: req.body.message,
        html: <div>{req.body.message}</div>
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
    //console.log(req.body);
    res.status(200)
}

export default contact_api;

