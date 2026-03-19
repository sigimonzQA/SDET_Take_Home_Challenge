import { endpoint } from "../base/endpoint.ts";
import ENV from "../base/env.ts";
export default class WebsiteEndpoint extends endpoint {
  readonly headers = {
    Authorization: "mysecrettoken",
    "Content-Type": "application/json",
  };
  public async getUsers() {
    const response = await this.getRequest(`${ENV.BASE_API_URL}/users`, this.headers);
    return response;
  }
  public async createUser(user: any) {
    const response = await this.postRequest(
      `${ENV.BASE_API_URL}/users`,
      user,
      this.headers,
    );
    return response;
  }
  public async getUserByEmail(email: string) {
    const response = await this.getRequest(
      `${ENV.BASE_API_URL}/users/${email}`,
      this.headers,
    );
    return response
  }
  public async updateUsersEmail(email: string) {
    const response = await this.putRequest(
      `${ENV.BASE_API_URL}/users/${email}`,
      "",
      this.headers,
    );
  }
  public async deleteUserByEmail(email: string) {
    const response = await this.deleteRequest(
      `${ENV.BASE_API_URL}/users/${email}`,
      "",
      this.headers,
    );
  }
}
