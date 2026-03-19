import test, { expect } from "../../../base/base.ts";
import * as testDataHelper from '../../../utilities/testDataHelper.ts'

test("[Post] /users - create a new user - code 201 scenario", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: Create a new user", async () => {
    const response = await usersManagement.createUser(user);
    expect(response.status()).toBe(201)
    expect.soft((await response.json()).name).toBe(user.name)
    expect.soft((await response.json()).email).toBe(user.email)
    expect.soft((await response.json()).age).toBe(user.age)
  });
});
test("[Post] /users - create a new user - code 400 scenario (empty age)", async ({ usersManagement }) => {
   const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: ""
  }
  await test.step("Step 001: Create a new user", async () => {
    const response = await usersManagement.createUser(user);
    expect.soft(response.status()).toBe(400)
    expect.soft((await response.json()).error).toBe("User not found")
  });
});
test("[Post] /users - create a new user - code 400 scenario (invalid age)", async ({ usersManagement }) => {
   const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: "InvalidAge"
  }
  await test.step("Step 001: Create a new user", async () => {
    const response = await usersManagement.createUser(user);
    expect.soft(response.status()).toBe(400)
    expect.soft((await response.json()).error).toBe("User not found")
  });
});
test("[Post] /users - create a new user - code 400 scenario (empty email)", async ({ usersManagement }) => {
   const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: "",
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: Create a new user", async () => {
    const response = await usersManagement.createUser(user);
    expect.soft(response.status()).toBe(400)
    expect.soft((await response.json()).error).toBe("User not found")
  });
});
test("[Post] /users - create a new user - code 400 scenario (empty name)", async ({ usersManagement }) => {
   const user = {
    name: "",
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: Create a new user", async () => {
    const response = await usersManagement.createUser(user);
    expect.soft(response.status()).toBe(400)
    expect.soft((await response.json()).error).toBe("User not found")
  });
});
test("[Post] /users - create a new user - code 409 scenario", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: Create a new user", async () => {
    await usersManagement.createUser(user);
    const response = await usersManagement.createUser(user);
    expect.soft(response.status()).toBe(409)
    expect.soft((await response.json()).error).toBe("User not found")
  });
});