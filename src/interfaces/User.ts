export interface User {
  email: string; // User's email address
  emailVerified: boolean; // Whether the email is verified
  name: string; // Full name of the user
  profile: string; // Profile type (e.g., "Student")
  sub: string; // Unique identifier (Cognito sub)
}
