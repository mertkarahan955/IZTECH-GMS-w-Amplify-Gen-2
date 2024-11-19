import { fetchUserAttributes, signIn, signOut } from "@aws-amplify/auth";
import { User } from "../interfaces/User";

/**
 * Fetch user attributes from AWS Cognito.
 * @returns {Promise<User>} A promise that resolves to the user's data.
 */
export async function fetchUser(): Promise<User> {
  try {
    const attributes = await  fetchUserAttributes();
    
    const userData: User = {
      email: attributes.email || '',
      emailVerified: true,
      name: attributes.name || '',
      profile: attributes.profile || '',
      sub: attributes.sub || ''
   }

    return userData;
  } catch (error) {
    console.error("Error fetching user attributes:", error);
    throw error; // Re-throw the error to handle it in the UI
  }
}

export async function login(username: string, password: string)  {
  try {
    const user = await signIn({
      username: username,
      password: password,
    }); // Sign in with AWS Cognito
    console.log("Sign in successful:", user);
    alert("Sign in successful!");
    console.log(user);
  } catch (err: any) {
    console.error("Sign in error:", err);
    alert(err.message || "An error occurred during sign-in.");
  }
}

export async function logout() {
  try {
    await signOut();
    window.location.href = "/";
  } catch (error) {
    alert(error);
  }
}
