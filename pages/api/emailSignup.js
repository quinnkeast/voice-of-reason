const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('app6hmJnclyWQJLPn');

export default async (req, res) => {
	return new Promise(resolve => {
		if (req.method === "POST") {
			try {
				base('Emails').create([
				  {
				    "fields": {
				      "Email": req.body.email
				    }
				  },
				], function(err, records) {
				  if (err) {
				    console.error(err);
				    res.status(400).json({error: err});
				  }
				  res.status(200).end();
				  resolve();
				});
			} catch (error) {
				console.error(error);
				res.status(400).json({error: error}).end();
				return resolve();
			}
		} else {
			res.status(405).json({error: error}).end();	
		}
	})
}