import z from "zod";

const emailSchema = z.preprocess((val) => {
  if (typeof val === "string") {
    return val.trim().toLowerCase();
  }
  return val;
}, z.email("Invalid email address"));

export const signupSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Minimum name length is 3")
    .max(20, "Maximum name length is 20"),

  email: emailSchema,

  password: z
    .string()
    .min(8)
    .max(30)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/,
      {
        message:
          "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
      },
    ),
});

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
});
