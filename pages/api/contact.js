import nodemailer from 'nodemailer'

export default async (req, res) => {
    const {name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Godaddy',
        host: "smtpout.secureserver.net",  
        secureConnection: true,
        port: 465,
        auth: {
            user: process.env.user,
            pass: process.env.pass,
        },
    });

    try {
        const emailRes = await transporter.sendMail({
            from: email,
            to: 'contato@moita.me',
            subject: `Contact from ${name}`,
            html: `<p>You have a new contact form submission</p><br>
            <p><b>Name:</b> ${name}</p><br>
            <p><b>Email:</b> ${email}</p><br>
            <p><b>Message:</b> ${message}</p><br>`,
        });

        console.log('Message Sent', emailRes.messageId)
    } catch (err) {
        console.log(err)
    }
    
    res.status(200).json(req.body)
};