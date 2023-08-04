import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  name: string;
}

interface UserStore {
  user: User | null;
  token: string | null;
  setUserInfo: (userInfo: UserStore["user"]) => void;
  clearUserInfo: () => void;
  setToken: (token: UserStore["token"]) => void;
}

const useUserStore = create<
  UserStore,
  [["zustand/persist", UserStore], ["zustand/devtools", never]]
>(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUserInfo: (userInfo) => set({ user: userInfo }),
      clearUserInfo: () => set({ user: null }),
      setToken: (token) => set({ token }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export { useUserStore };
