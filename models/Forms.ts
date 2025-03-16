import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for TypeScript
export interface IForm extends Document {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

// Define the schema
const FormSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: false },
  },
  { collection: "Client db" } 
);

// Export the model
export default mongoose.models.Form || mongoose.model<IForm>('Form', FormSchema);
