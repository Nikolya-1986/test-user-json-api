import { createFeatureSelector } from "@ngrx/store";
import { adminReduser } from "./admin.reducer";
import AppAdminState from "./admin.state";

export const selectAuthState = createFeatureSelector<AppAdminState>('admin');

export const getAdminSelector = {
    selectAuthState,
    admin: adminReduser,
}