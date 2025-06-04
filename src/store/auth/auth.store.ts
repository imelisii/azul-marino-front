import { create, StateCreator } from "zustand"

import { devtools, persist } from "zustand/middleware"
import { AuthService } from "../../shared/auth/auth.service"
import { AuthStatus, Usuario } from "../../shared/interfaces/usuarios"

export interface AuthState {
    status: AuthStatus
    token?: string
    user?: Usuario
    loginUser: (email: string, password: string) => Promise<void>
    logout: () => void
    checkStatus: () => Promise<void>
}


const storeApi: StateCreator<AuthState> = (set) => ({
    status: "pending",
    token: undefined,
    user: undefined,

    loginUser: async (email: string, password: string) => {
        try {
            const { token, ...user } = await AuthService.login(email, password);
            set({ status: "autorized", token, user });
        } catch (err) {
            set({ status: "unauthorized", token: undefined, user: undefined });
            throw "unauthorized"
        }
    },
    checkStatus: async () => {
        try {
            const { token, ...user } = await AuthService.checkStatus()
            set({ status: "autorized", token, user });
        } catch (err) {
            set({ status: "unauthorized", token: undefined, user: undefined });
            throw "unauthorized"
        }
    },
    logout: () => {
        set({ status: "unauthorized", token: undefined, user: undefined });
    }
})



export const useAuthStore = create<AuthState>()(
    devtools(
        persist(storeApi, { name: "auth-store" })
    )
);
