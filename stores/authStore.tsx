/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { TAuthInfo } from '@/types';

interface TUseAuth {
  authInfo: TAuthInfo;
  setAuthInfo: (TAuthInfo: Partial<TAuthInfo> | null) => void;
}

const initialState: TAuthInfo = {
  isAuthorized: false,
  isLoading: false,
  id: null,
  nickName: null,
  email: null,
  accessToken: null,
  refreshToken: null,
  isJoinCompleted: null,
};

export const useAuthStore = create(
  devtools<TUseAuth>((set) => ({
    authInfo: initialState,
    setAuthInfo: (payload) =>
      set((state) => ({
        authInfo: payload ? { ...state.authInfo, ...payload } : initialState,
      })),
  })),
);
