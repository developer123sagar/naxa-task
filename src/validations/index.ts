import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(3, {
        message: "Username must be at least 3 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email",
    }),
    contact: z.string().regex(/^\d{10}$/, {
        message: "Please enter a valid contact number",
    }),
    address: z.string().min(3, {
        message: "address must be at least 3 characters.",
    }),
    photo: z.instanceof(File, {
        message: "Upload a photo",
    }),
    cv: z.instanceof(File, {
        message: "Upload a CV",
    }),
});