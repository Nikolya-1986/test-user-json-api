import { createFeatureSelector } from "@ngrx/store";

import *as reduser from "./admin.reducer";
import AppAdminState from "./admin.state";

export const selectAuthState = createFeatureSelector<AppAdminState>('auth');

export const getAuthSelector = {
    selectAuthState,
    auth: reduser.adminReduser,
};
