import jwt, { JwtPayload } from 'jsonwebtoken';

// Your secret key (in a real app, do NOT hardcode this in the frontend)
const SECRET_KEY = 'secret-key-keka-app';

// Function to create JWT token
export const createJWT = async (name: string, email: string, id: string): Promise<string | null> => {
  try {
    // Payload for JWT
    const payload = {
        name,
        email,
        id
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '7d' });
    return token;
  } catch (error) {
    console.error('Error creating JWT:', error);
    return null;
  }
};
export const validateJWT = async (token: string): Promise<{ isValid: boolean; message: string }> => {
    try {
      if (!token) {
        return { isValid: false, message: 'Token not found' };
      }
  
      // Decode and verify the JWT
      const decodedToken = jwt.verify(token, SECRET_KEY) as JwtPayload;
  
      // Check if the token has expired
      if (decodedToken.exp && decodedToken.exp < Math.floor(Date.now() / 1000)) {
        return { isValid: false, message: 'Token has expired' };
      }
  
      return { isValid: true, message: 'Token is valid' };
    } catch (error) {
      console.error('Error validating JWT:', error);
      return { isValid: false, message: 'Invalid token' };
    }
  };