class LocalStorage {
    private token: string

    constructor(){
        this.token = ""
    }

    public setToken(token: string): void {
        this.token = token;
        localStorage.removeItem("token");
        localStorage.setItem("token", this.token);
    }

    public getToken(): string {
        return localStorage.getItem("token") || "";
    }
};

export const storage = new LocalStorage();