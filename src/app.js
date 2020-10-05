/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const nodeMailer = require('nodemailer');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/mail', async (req, res) => {
	try {
		const transporter = nodeMailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: 'julia.testing.acc@gmail.com',
				pass: 'alswl8956',
			},
		});
		const mail = {
			// to: 'wldnd5720@naver.com',
			to: 'minji6654@gmail.com',
			...req.body,
		};
		transporter.sendMail(mail, (err, response) => {
			if (err) {
				throw new Error(err);
			}
			res.send(response);
		});
	} catch (err) {
		console.log(err);
		res.status(400).send();
	}
});

const port = 3000;
// console.log(port);

app.listen(port, () => {
	console.log('Server is up on port ' + port);
});
