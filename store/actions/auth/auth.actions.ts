import {
  AddWishListItem,
  AuthTypes,
  LoginRequestSuccess,
  LogOutRequestSuccess,
  User,
  WishListItem,
} from "../../types/auth/auth";

export const loginRequestSuccess = (user: User): LoginRequestSuccess => ({
  type: AuthTypes.LOGIN_REQUEST_SUCCESS,
  user,
});

export const logOutRequestSuccess = (): LogOutRequestSuccess => ({
  type: AuthTypes.LOGOUT_REQUEST_SUCCESS,
});

export const addWishListItem = (
  wishListItem: WishListItem
): AddWishListItem => ({
  type: AuthTypes.ADD_WISHLIST_ITEM,
  wishListItem,
});
