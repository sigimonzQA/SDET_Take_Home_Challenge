import { APIRequestContext } from '@playwright/test';
export class endpoint {
    constructor(private request: APIRequestContext){}
    
    protected async postRequest(endpoint: string, data: any, headers?: any)
    {
        console.log(`endpoint: ${endpoint}`)
        console.log(`data: ${data}`)
        console.log(`headers: ${headers}`)
        return await this.request.post(endpoint, { data: data, headers: headers})
    }

    protected async getRequest(endpoint: string, headers?: any)
    {
        console.log(`endpoint: ${endpoint}`)
        console.log(`headers: ${headers}`)
        return this.request.get(endpoint, {headers: headers})
    }

    protected async putRequest(endpoint: string, data: any, headers?: any)
    {
        console.log(`endpoint: ${endpoint}`)
        console.log(`data: ${data}`)
        console.log(`headers: ${headers}`)
        return await this.request.put(endpoint, { data: data, headers: headers})
    }
    protected async deleteRequest(endpoint: string, data: any, headers?: any)
    {
        console.log(`endpoint: ${endpoint}`)
        console.log(`data: ${data}`)
        console.log(`headers: ${headers}`)
        return await this.request.delete(endpoint, { data: data, headers: headers})
    }

}