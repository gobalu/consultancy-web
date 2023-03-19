import { Handler } from "@netlify/functions";
import { SMTPClient } from "emailjs";
import { lines } from "lines-builder";
import * as jsonschema from "jsonschema";
import * as dotenv from 'dotenv'
dotenv.config()

interface Enquiry {
  name: string;
  email: string;
  telephone: string;
  budget: string;
  message: string;
}

const validator = new jsonschema.Validator();

const schema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 1 },
    email: { type: "string", minLength: 1 },
    telephone: { type: "string", minLength: 1 },
    budget: { type: "string", minLength: 1 },
    message: { type: "string", minLength: 1 },
  },
  required: ["name", "email", "telephone", "budget", "message"],
};

const handler: Handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Bad Request" }),
    };
  }

  const enquiry: Enquiry = JSON.parse(event.body);
  const validation = validator.validate(enquiry, schema);

  if (validation.errors.length > 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Bad Request", errors: validation.errors }),
    };
  }

  const client = new SMTPClient({
    user: "enquiries@balu.technology",
    password: process.env.SMTP_PASSWORD,
    host: "smtp.migadu.com",
    ssl: true,
  });

  const emailBody = createEmailBody(enquiry);

  try {
    await client.sendAsync({
      text: emailBody,
      from: "Enquiries <enquiries@balu.technology>",
      to: "Balu <hello@balu.technology>",
      subject: `New Enquiry from ${enquiry.name}`,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Email failed to send" }),
    };
  } 
};

const createEmailBody = (enquiry: Enquiry) => {
  const { name, email, telephone, budget, message } = enquiry;
  const body = lines();
  body.append(`Name: ${name}`);
  body.append(`Email: ${email}`);
  body.append(`Telephone: ${telephone}`);
  body.append(`Budget: ${budget}`);
  body.append(`Message: ${message}`);
  return body.toString();
};

export { handler };

//PyX32@zyAhyJvha
