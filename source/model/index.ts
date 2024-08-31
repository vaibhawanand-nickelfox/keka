type userType = {
    isKycDone: boolean
}
export interface AppState {
    user: userType|null
  userType: null | "DEALER" | "USER"
  isLogged: boolean
}