export interface LoginResponse {
    refreshToken: string;
    id: number;
    username: string;
    accessToken: string;
    email: string;
    roles: [];
    tokenType: string;
  }