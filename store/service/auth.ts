import { TYPE_WEBSITE_DEFAULT } from "@/const/app.const"
import { LoginClient } from "../api"
import { IRequestLogin, IResponseLogin } from "../types"
export default {
    //login
    login(request: IRequestLogin): Promise<IResponseLogin> {
        const url = '/login'
        return LoginClient.post(url, { ...request, type: TYPE_WEBSITE_DEFAULT })
    }
}