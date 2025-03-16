import dbConnect from "../../utils/dbConnect";
import Form from "../../models/Forms";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      await dbConnect();

      const { firstName, lastName, email, message } = req.body;

      const formEntry = new Form({ firstName, lastName, email, message });
      await formEntry.save();

      res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to submit form" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
