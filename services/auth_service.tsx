import base_service from "../services/base_service"

export default class AuthServices {
    
    login = async (email : string, password : string) => {
        var baseService = new base_service()
        var form = new FormData()

        form.append("email", email)
        form.append("password", password)
        
        var resp = await baseService.post("/loginApp", form)
        return resp
    }

    loginv2 = async (email : string, password : string) => {
        var baseService = new base_service()
        var form = new FormData()

        form.append("email", email)
        form.append("password", password)
        
        var resp = await baseService.post("/v2/loginApp", form)
        return resp
    }

    register = async (payload : any) => {
        var baseService = new base_service()
        let resp = await baseService.post("/register", payload)
        return resp
    }


    registerCompany = async (payload : any) => {
        var baseService = new base_service()
        let resp = await baseService.post("/register_company", payload)
        return resp
    }
    
    googleCredentialProcess = async (token : string) => {
        var baseService = new base_service()
        var resp = await baseService.get("/redirect/oauth?access_token="+token)
        return resp
    }

    forgotPasswordNotLogedIn = async (email:string) => {
        var baseService = new base_service()
        var payload = {
            email: email
        }

        var resp = await baseService.post("/forgot_password", payload)
        return resp
    }
}