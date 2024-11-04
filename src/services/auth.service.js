import { api } from "./api";

// TODO: replace with state/context
export class AuthService {
    /**
     * @param { {login:string, password:string, rememberMe:boolean} } loginData - information needed to do login
     * @returns {Promise<{user: {name: string}, token:string}>} - whether or not the login was sucessful
     */
    async login({ login, password, rememberMe }) {
        try {
            const result = await api.post("auth/login", {
                login,
                password,
                rememberMe,
            });
            return result;
        } catch (e) {
            throw e;
        }
    }
}

export const authService = new AuthService();
