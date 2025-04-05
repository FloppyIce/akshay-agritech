const readline = require('readline');
const nodemailer = require('nodemailer');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for recipient email
rl.question("Enter recipient email: ", function(userEmail) {
    // Ask for feedback message
    rl.question("Enter your feedback: ", function(userFeedback) {
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'amalendukumar55@gmail.com', // Your email
                pass: 'xhmi ioqf gabq rith' // Your app password
            }
        });

        let mailOptions = {
            from: 'your-email@gmail.com',
            to: userEmail, // User-provided email
            subject: 'User Feedback',
            text: userFeedback // User-provided feedback
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log('❌ Error sending email:', error);
            } else {
                console.log('✅ Email sent: ' + info.response);
            }
            rl.close();
        });
    });
});
