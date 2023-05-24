// import { Document, Model, model, Schema } from "mongoose";

// export interface IShortURL extends Document {
//     fullUrl: string;
//     short: string;
//     clicks: number;
// }

const visaApplicationSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        phone: {
                type: String,
                required: true
        },
        fullName: {
                type: String,
                required: true  
        },
    },
    {
        timestamps: true
    }
);

const VisaApplication = model("VisaApplication", visaApplicationSchema);

export default VisaApplication;