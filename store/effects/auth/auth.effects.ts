import { AppDispatch } from "../..";
import { loginService } from "../../../services/auth.service";
import {
  addWishListItem,
  logOutRequestSuccess,
  loginRequestSuccess,
} from "../../actions/auth/auth.actions";
import { WishListItem } from "../../types/auth/auth";

export const loginEffect = (loginData: any, navigation: any): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await loginService(loginData);

      dispatch(loginRequestSuccess(result));
      navigation.navigate("Categories");
    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };
};

export const logOutEffect = (navigation: any): any => {
  return async (dispatch: AppDispatch, navigate: any) => {
    try {
      dispatch(logOutRequestSuccess());
      navigation.navigate("Login");
    } catch (error: any) {
    } finally {
    }
  };
};

export const addWishListItemEffect = (item: WishListItem): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(addWishListItem(item));
    } catch (error: any) {
    } finally {
    }
  };
};
