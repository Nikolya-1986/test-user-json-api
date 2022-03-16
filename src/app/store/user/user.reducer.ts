import { ActionReducerMap, createReducer, on } from "@ngrx/store";

import * as fromUserActions from "./user.actions";
import AppUserState, {initialUserState} from "./user.state";

const _userReduserInternal = createReducer (
    initialUserState,
    on(fromUserActions.loadStart, state => ({
        ...state,
        loadCouter: state.loadCouter + 1,
    })),
    on(fromUserActions.loadEnd, state => ({
        ...state,
        loadCouter: state.loadCouter - 1,
    })),
    on(fromUserActions.getFail, (state, action) => ({
        ...state,
        errorMessage: action.message,
    })),
    on(fromUserActions.loadUsersRequest, state => ({
        ...state
    })),
    on(fromUserActions.loadUsersSuccess, (state, action) => ({
        ...state,
        userDTO: [...action.users],
    })),
    on(fromUserActions.loadUserRequest, (state, { userId }) => ({
        ...state,
    })),
    on(fromUserActions.loadUserSuccess, (state, { user }) => ({
        ...state,
        userSelected: user,
    })),
    on(fromUserActions.deleteUserRequest, state => ({
        ...state,
    })),
    on(fromUserActions.deleteUserSuccess, (state, {userId}) => {
        const userIndes = state.userDTO.findIndex((item) => item.id === userId);
        const otherUsers = [...state.userDTO];
        otherUsers.splice(userIndes, 1);
        return {
            ...state,
            userDTO: otherUsers,
        }
    }),
    on(fromUserActions.editUserRequest, (state, { userEdit }) => ({
        ...state,
    })),
    on(fromUserActions.editUserSuccess, (state, { userEdit }) => {
        const userIndexEdit = state.userDTO.findIndex(index => index.id === userEdit.id);
        const editUser = [...state.userDTO];
        editUser[userIndexEdit] = userEdit;
        return {
            ...state,
            userDTO: editUser
        }
    }),
    on(fromUserActions.createUserRequest, (state, { userCreate }) => ({
        ...state,
    })),
    on(fromUserActions.createUserSuccess, (state, { userCreate }) => ({
        ...state,
        userDTO: [userCreate, ...state.userDTO]
    })),
);

export const userReducer: ActionReducerMap<AppUserState> = {
    user: _userReduserInternal,
}