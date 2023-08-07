import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  name: string;
}

interface UserStore {
  user: User | null;
  token: string | null;
  setUser: (userInfo: UserStore["user"]) => void;
  deleteUser: () => void;
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
      setUser: (userInfo) => set({ user: userInfo }),
      deleteUser: () => set({ user: null }),
      setToken: (token) => set({ token }),
    }),
    { name: "user", storage: createJSONStorage(() => localStorage) }
  )
);
export { useUserStore };
