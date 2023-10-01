export interface User {
  email: string;
  password: string;
  name: string;
  avatar?: string;
  role?: string;
  id: number;
  access_token?: string;
}
