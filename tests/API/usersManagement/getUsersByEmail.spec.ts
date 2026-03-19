import test, { expect } from "../../../base/base.ts";
import * as testDataHelper from '../../../utilities/testDataHelper.ts'

test("[get]  /users/{email} - get a user by email - code 200 scenario", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: get users", async () => {
    const addNewUserResponse = await usersManagement.createUser(user);
    expect(addNewUserResponse.status()).toBe(201)
    const responseGetUsersByEmail = await usersManagement.getUserByEmail(user.email);
    const users = await responseGetUsersByEmail.json();
    expect(responseGetUsersByEmail.status()).toBe(200)
    expect.soft(users).not.toBe([])
    expect.soft(users.name).toBe(user.name)
    expect.soft(users.email).toBe(user.email)
    expect.soft(users.age).toBe(user.age)
  });
});
test("[get] /users/{email} - get a user by email - code 404 scenario (not existing email)", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: validate user not found", async () => {
    const addNewUserResponse = await usersManagement.createUser(user);
    expect(addNewUserResponse.status()).toBe(201)
    const responseGetUsersByEmail = await usersManagement.getUserByEmail("notAnEmail");
    const users = await responseGetUsersByEmail.json();
    expect.soft(responseGetUsersByEmail.status()).toBe(404)
    expect.soft(users.error).toBe("User not found")
  });
});
test("[get] /users/{email} - get a user by email - code 404 scenario (empty email)", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: validate user not found", async () => {
    const addNewUserResponse = await usersManagement.createUser(user);
    expect(addNewUserResponse.status()).toBe(201)
    const responseGetUsersByEmail = await usersManagement.getUserByEmail("");
    const users = await responseGetUsersByEmail.json();
    expect.soft(responseGetUsersByEmail.status()).toBe(404)
    expect.soft(users.error).toBe("User not found")
  });
});