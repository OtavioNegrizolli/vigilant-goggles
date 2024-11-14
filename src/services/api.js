import { authService } from "./auth.service";

class Api {
    constructor() {
        this.api_url = "http://localhost:5001/api";
    }

    /**
     *
     * @param {string} path - location/endpoint of the api to call
     * @param {{[key:string]: string} | Map<string,string> | undefined } params - query params to be maped
     * @returns {Promise<object> | 'Failed' } - The response body
     */
    async get(path, params = undefined) {
        try {
            const queryParams = this.#parseQuery(params);

            const response = await fetch(
                new URL(`${this.api_url}/${path}${queryParams}`),
                {
                    headers: {
                        Authorization: authService.getToken(),
                    },
                }
            );
            // if success
            if (response.ok) {
                const body = await response.json();
                return body;
            } else {
                throw new Error("🤷‍♂️ algo deu muito errado");
            }
        } catch (e) {
            throw e;
        }
    }

    /**
     *
     * @param {string} path - location/endpoint of the api to call
     * @param {{[key:string]: string} | Map<string,string> | undefined } params - query params to be maped
     * @returns {Promise<object>} - The response body
     */
    async post(path, body) {
        try {
            if (!body) throw new Error("Must have a body!");

            // if (URL.canParse(`${this.api_url}/${path}`))
            //     throw new Error(`[Error] ${this.api_url}/${path} is not a valid URL`);

            const response = await fetch(new URL(`${this.api_url}/${path}`), {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            // if success
            if (response.ok) {
                const body = await response.json();
                return body;
            }
            else {
                const body = await response.json();
                throw body;
            }
        } catch (e) {
            throw "Failed";
        }
    }

    /**
     *
     * @param {{[key:string]: string} | Map<string, string|undefined> | undefined } params - query params to be maped
     * @returns {string} - a '?' prefixed url encoded params string
     */
    #parseQuery(params) {
        if (!params) return "";

        if (params instanceof Object) {
            params = new Map(Objec.entries(params));
        }

        if (params instanceof Map) {
            let paramsString = "";
            params.forEach((v, k) => {
                paramsString += `&${encodeURIComponent(k)}${
                    v ? `=${encodeURIComponent(v)}` : ""
                }`;
            });
            return "?" + paramsString.substring(1);
        }
    }
}

export const api = new Api();
