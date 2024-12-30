import { create } from 'zustand'

interface LoginState {
  loginData: any | null
  setLoginData: (data: any) => void
  isLoggedIn: boolean
}

const useLoginStore = create<LoginState>((set) => ({
  loginData: null,
  isLoggedIn: false,
  setLoginData: (data) => set({ loginData: data, isLoggedIn: true }),
}))

export default useLoginStore
