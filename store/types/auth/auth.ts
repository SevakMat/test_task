export enum AuthTypes {
  LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS",
  LOGOUT_REQUEST_SUCCESS = "LOGOUT_REQUEST_SUCCESS",
  ADD_WISHLIST_ITEM = "ADD_WISHLIST_ITEM",
}

export interface WishListItem {
  id: number;
  iamge: string;
  title: string;
  price: number;
  score?: number;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  wishlist: WishListItem[];
}

export interface User {
  email: string;
  firstName: string;
  gender: string;
  id: string;
  image: string;
  lastName: string;
}

export interface LoginRequestSuccess {
  type: AuthTypes.LOGIN_REQUEST_SUCCESS;
  user: User;
}
export interface AddWishListItem {
  type: AuthTypes.ADD_WISHLIST_ITEM;
  wishListItem: WishListItem;
}

export interface LogOutRequestSuccess {
  type: AuthTypes.LOGOUT_REQUEST_SUCCESS;
}

export type AuthActionTypes =
  | LoginRequestSuccess
  | LogOutRequestSuccess
  | AddWishListItem;
