import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

const listId = process.env.MAILCHIMP_AUDIENCE_ID


export default async(req, res) => {
   const email = 'testuser1@testing.com';
   // const { email } = req.body;
   if(!email) {
      return res.status(400).json({ error: 'Email is equired' });
   }
   try {

      const response = await mailchimp.lists.addListMember(listId, {
         email_address: email,
         status: "subscribed",
       });
       console.log({response})

       console.log(
         `Successfully added contact as an audience member. The contact's id is ${
           response.id
         }.`
       );

       return res.status(201).json({ error: '' })
   } catch (error) {
      console.log({error})
      return res.status(500).json({ error: error.message || error.toString()})
   }
}
