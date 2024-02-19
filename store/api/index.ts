'use client'
import { ACCESS_TOKEN, BASE_URL, EMAIL, ENVIRONMENT, HEADER_DATA_FORM_FILE, HEADER_DEFAULT, TIMEOUT } from '@/const/api.const'
import axios, { AxiosRequestConfig, AxiosResponse, HttpStatusCode } from 'axios'
import { DEFAULT_ROUTER_WITHOUT_AUTHENTICATED } from '@/const/path.const'

class HttpService {
    axios: any
    getCredential: any
    constructor(axios: any, getCredential: any) {
        this.axios = axios
        this.getCredential = getCredential
    }
    request(config?: AxiosRequestConfig) {
        config = this.getCredential(config)
        return this.axios.request(config)
    }
    get(url: string, config?: AxiosRequestConfig) {
        config = this.getCredential(config)
        return this.axios.get(url, config)
    }
    post(url: string, data?: any, config?: AxiosRequestConfig) {
        config = this.getCredential(config)
        return this.axios.post(url, data, config)
    }
    put(url: string, data?: any, config?: AxiosRequestConfig) {
        config = this.getCredential(config)
        return this.axios.put(url, data, config)
    }
    patch(url: string, data?: any, config?: AxiosRequestConfig) {
        config = this.getCredential(config)
        return this.axios.patch(url, data, config)
    }
    delete(url: string, config?: AxiosRequestConfig) {
        config = this.getCredential(config)
        return this.axios.delete(url, config)
    }
}

const defaultConfig = (headers: any) => ({
    baseURL: BASE_URL,
    headers: { ...headers },
    timeout: TIMEOUT,
})

const getCredentialWithAccessToken = (config: any = {}) => {
    let accessToken: string = ''
    if (ENVIRONMENT === 'development') {
        accessToken = localStorage.getItem(ACCESS_TOKEN) || ''
    }
    if (!accessToken) return config
    return {
        ...config,
        headers: {
            ...(config.headers || {}),
            Authorization: 'Bearer ' + accessToken,
        },
    }
}

const configInterceptors = (axiosClient: any) => {
    axiosClient.interceptors.response.use(
        (res: AxiosResponse) => res.data,
        (res: any) => {
            const status = res?.response?.status
            if (status === HttpStatusCode.Unauthorized) {
                localStorage.removeItem(ACCESS_TOKEN)
                localStorage.removeItem(EMAIL)
                window.location.href = DEFAULT_ROUTER_WITHOUT_AUTHENTICATED
            } else {
                return Promise.reject(
                    res?.response?.data?.errors || { status: status || 0 }
                )
            }
        }
    )
    return axiosClient
}

const axiosClient = configInterceptors(
    axios.create(defaultConfig(HEADER_DEFAULT))
)
const axiosClientFormFile = configInterceptors(
    axios.create(defaultConfig(HEADER_DATA_FORM_FILE))
)

const ApiClientWithToken = new HttpService(
    axiosClient,
    getCredentialWithAccessToken
)

export const ApiClientFormFile = new HttpService(
    axiosClientFormFile,
    getCredentialWithAccessToken
)

const loginConfigInterceptors = (axiosClient: any) => {
    axiosClient.interceptors.response.use(
        (res: AxiosResponse) => res.data,
        (res: any) => Promise.reject(res.response?.data)
    )
    return axiosClient
}

export const LoginClient = loginConfigInterceptors(
    axios.create(defaultConfig(HEADER_DEFAULT))
)

export default ApiClientWithToken
