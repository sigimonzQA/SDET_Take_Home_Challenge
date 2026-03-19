import test, { expect } from "../../../base/base.ts";
import * as testDataHelper from '../../../utilities/testDataHelper.ts'

test("[DELETE] /users/{email} - DELETE user - code 204 scenario", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: DELETE user and validate", async () => {
    const response = await usersManagement.createUser(user);
    expect(response.status()).toBe(201)
    const deleteUserResponse = await usersManagement.deleteUserByEmail(user.email)
    const text = await deleteUserResponse.text()
    const deletedUserData = text ? JSON.parse(text) : [];
    expect.soft(deleteUserResponse.status()).toBe(204)
    expect.soft(deletedUserData.error).toBe("User not found")
  });
});
test("[DELETE] /users/{email} - DELETE user - code 401 scenario", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: DELETE user and validate", async () => {
    const response = await usersManagement.createUser(user);
    expect(response.status()).toBe(201)
    usersManagement.headers.Authorization = "fake authorization token"
    const deleteUserResponse = await usersManagement.deleteUserByEmail(user.email)
    const text = await deleteUserResponse.text()
    const deletedUserData = text ? JSON.parse(text) : [];
    expect.soft(deleteUserResponse.status()).toBe(401)
    expect.soft(deletedUserData.error).toBe("User not found")
  });
});
test("[DELETE] /users/{email} - DELETE user - code 404 scenario", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: DELETE user and validate", async () => {
    const response = await usersManagement.createUser(user);
    expect(response.status()).toBe(201)
    const deleteUserResponse = await usersManagement.deleteUserByEmail("fakeEmail@email.com")
    const text = await deleteUserResponse.text()
    const deletedUserData = text ? JSON.parse(text) : [];
    expect.soft(deleteUserResponse.status()).toBe(404)
    expect.soft(deletedUserData.error).toBe("User not found")
  });
});
