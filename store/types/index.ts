import { HttpStatusCode } from "axios"

export type ApiResponse<T = any> = {
    status: HttpStatusCode
    body: T
}

export type IRequestLogin = {
    email: string
    password: string
}

export type ITokenApi = {
    accessToken: string
    refreshToken: string
    email: string
}

export type IResponseLogin = {
    data: ITokenApi
    hasError: boolean
    message: string | null
    status: number
}
