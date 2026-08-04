import jwt from "jsonwebtoken";

export const generateJWTToken = (userId) => {
  try {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    return token;
  } catch (error) {
    throw new Error("Failed to generate JWT token");
  }
};
