import test, { expect } from "../../../base/base.ts";
import * as testDataHelper from '../../../utilities/testDataHelper.ts'

test("[get] /users - List of users - code 200 scenario", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: get users", async () => {
    let responseGetUsers = await usersManagement.getUsers();
    let arrayLength =  (await responseGetUsers.json()).length
    if(arrayLength == 0){ // in case there no users.
      await usersManagement.createUser(user);
    }
    responseGetUsers = await usersManagement.getUsers();
    const users = await responseGetUsers.json();
    expect.soft(responseGetUsers.status()).toBe(200)
    expect.soft(users).not.toBe([])
    for (let index = 0; index < users.length; index++) {
      expect.soft(users[index].name).not.toBe("")
      expect.soft(users[index].email).not.toBe("")
      expect.soft(users[index].age).not.toBe("")
      expect.soft(users[index].age).toBeGreaterThan(0)
      expect.soft(users[index].age).toBeLessThan(100)
      
    }
    
  });
});