/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { TAuth, TUser } from '@/types';

interface TUseAuthStore {
  auth: TAuth;
  setAuth: (auth: Partial<TAuth> | null) => void;
}

interface TUseUserStore {
  user: TUser;
  setUser: (user: Partial<TUser> | null) => void;
}

const initialAuthState: TAuth = {
  isAuthorized: false,
  isLoading: false,

  accessToken: null,
  refreshToken: null,
};

const initialUserState: TUser = {
  id: null,
  nickName: null,
  email: null,
  isJoinCompleted: null,
};

export const useAuthStore = create(
  devtools<TUseAuthStore>((set) => ({
    auth: initialAuthState,
    setAuth: (payload) =>
      set((state) => ({
        auth: payload ? { ...state.auth, ...payload } : initialAuthState,
      })),
  })),
);

export const useUserStore = create(
  devtools<TUseUserStore>((set) => ({
    user: initialUserState,
    setUser: (payload) =>
      set((state) => ({
        user: payload ? { ...state.user, ...payload } : initialUserState,
      })),
  })),
);
