export type LoginResponse = {
    success: boolean
    token: string
    user: {
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        avatar?: string
    }
};