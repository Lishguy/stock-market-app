export interface User {
  id: number;
  name: string;
}

export const ROLE = "Admin";

export default class UserService {
  getUser(id: number): User {
    return {
      id,
      name: "Michael",
    };
  }
}