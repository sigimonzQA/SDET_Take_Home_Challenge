import { APIRequestContext } from '@playwright/test';
export class endpoint {
    constructor(private request: APIRequestContext){}
    
    public async postRequest(endpoint: string, data: any, headers?: any)
    {
        console.log(`endpoint: ${endpoint}`)
        console.log(`data: ${data}`)
        console.log(`headers: ${headers}`)
        return await this.request.post(endpoint, { data: data, headers: headers})
    }

    public async getRequest(endpoint: string, headers?: any)
    {
        console.log(`endpoint: ${endpoint}`)
        console.log(`headers: ${headers}`)
        return this.request.get(endpoint, {headers: headers})
    }

    public async putRequest(endpoint: string, data: any, headers?: any)
    {
        console.log(`endpoint: ${endpoint}`)
        console.log(`data: ${data}`)
        console.log(`headers: ${headers}`)
        return await this.request.put(endpoint, { data: data, headers: headers})
    }
     public async deleteRequest(endpoint: string, data: any, headers?: any)
    {
        console.log(`endpoint: ${endpoint}`)
        console.log(`data: ${data}`)
        console.log(`headers: ${headers}`)
        return await this.request.delete(endpoint, { data: data, headers: headers})
    }

}