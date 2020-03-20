const express = require("express")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/api/form", (req, res) => {
    nodemailer.createTestAccount((err, account) =>{
        const htmlEmail = `
            <h3> Contact Details </h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h3> Message </h3>
            <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", //insert email smtp
            port: 587, //smtp port number for email provider
            auth: {
                user: "", //insert your email in quotes
                pass: "" //insert password to email in quotes
            }
        })

        let mailOptions = {
            from: req.body.email,
            to: "", //insert your email in quotes
            replyTo: req.body.email,
            subject: "",
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }
            console.log("Meage sent:" %s, info.message)
            console.log("Meage sent:" %s, nodemailer.getTestMessageUrl(info))
        })
 }) 
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})