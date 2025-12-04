import axios from "axios"

let token = "";
// Check if running in the browser environment before accessing document
if (typeof document !== 'undefined') {
    let cookie = document.cookie;
    let data = cookie.replace(" ","").split(";");
    token = (data[1]) ? data[1].split("=")[1] : "";
}

axios.defaults.headers.common['authorization'] = "Bearer " + token;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default class base_service {

    responseApi = {
        statusCode: 200,
        data: null as any,    
    }

    post = async (pathUrl:string, body: any) =>  axios.post(pathUrl, body)
    .then((response: { data: any; }) => {
        let data = response.data
        this.responseApi.statusCode = 200
        this.responseApi.data = data
        return this.responseApi
    }).catch((error: { response: any; }) => {
        let resp = error.response
        if (resp === undefined) {
            this.responseApi.statusCode = 0
            this.responseApi.data = { message: "Please check your network connection" }
        } else {
            if(resp.status){
                this.responseApi.statusCode = resp.status
                this.responseApi.data = resp.data
            }
        }

        return this.responseApi
    });

    get = async (pathUrl:string) =>  axios.get(pathUrl)
    .then((response: { data: any; }) => {
        let data = response.data
        this.responseApi.statusCode = 200
        this.responseApi.data = data
        return this.responseApi
    }).catch((error: { response: any; }) => {
        let resp = error.response
        if (resp === undefined) {
            this.responseApi.statusCode = 0
            this.responseApi.data = { message: "Please check your network connection" }
        } else {
            if(resp.status){
                this.responseApi.statusCode = resp.status
                this.responseApi.data = resp.data
            }
        }

        return this.responseApi
    });
}