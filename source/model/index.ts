type User = {
  _id: string;
  email: string;
  name: string;
  token: string;
};
export interface AppState {
  user: User | null;
}
