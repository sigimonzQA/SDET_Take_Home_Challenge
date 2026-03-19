import test, { expect } from "../../../base/base.ts";
import * as testDataHelper from '../../../utilities/testDataHelper.ts'

test("[put]  /users/{email} - update user - code 200 scenario", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  const updatedUser = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: update user information and validate response", async () => {
    const addNewUserResponse = await usersManagement.createUser(user);
    expect(addNewUserResponse.status()).toBe(201)
    const updateUserResponse = await usersManagement.updateUsersEmail(user.email, updatedUser);
    const updateUserData = await updateUserResponse.json();
    expect(updateUserResponse.status()).toBe(200)
    expect.soft(updateUserData.name).toBe(updatedUser.name)
    expect.soft(updateUserData.email).toBe(updatedUser.email)
    expect.soft(updateUserData.age).toBe(updatedUser.age)
  });
});
test("[put]  /users/{email} - update user - code 400 scenario (empty email)", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  const updatedUser = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: "",
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: update user information and validate response", async () => {
    const addNewUserResponse = await usersManagement.createUser(user);
    expect(addNewUserResponse.status()).toBe(201)
    const updateUserResponse = await usersManagement.updateUsersEmail(user.email, updatedUser);
    const updateUserData = await updateUserResponse.json();
    expect(updateUserResponse.status()).toBe(400)
    expect.soft(updateUserData.error).toBe("User not found")
  });
});
test("[put]  /users/{email} - update user - code 400 scenario (invalid email)", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  const updatedUser = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: "NotAnEmail",
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: update user information and validate response", async () => {
    const addNewUserResponse = await usersManagement.createUser(user);
    expect(addNewUserResponse.status()).toBe(201)
    const updateUserResponse = await usersManagement.updateUsersEmail(user.email, updatedUser);
    const updateUserData = await updateUserResponse.json();
    expect(updateUserResponse.status()).toBe(400)
    expect.soft(updateUserData.error).toBe("User not found")
  });
});
test("[put]  /users/{email} - update user - code 400 scenario (empty name)", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  const updatedUser = {
    name: "",
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: update user information and validate response", async () => {
    const addNewUserResponse = await usersManagement.createUser(user);
    expect(addNewUserResponse.status()).toBe(201)
    const updateUserResponse = await usersManagement.updateUsersEmail(user.email, updatedUser);
    const updateUserData = await updateUserResponse.json();
    expect(updateUserResponse.status()).toBe(400)
    expect.soft(updateUserData.error).toBe("User not found")
  });
});
test("[put]  /users/{email} - update user - code 400 scenario (empty age)", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  const updatedUser = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: ""
  }
  await test.step("Step 001: update user information and validate response", async () => {
    const addNewUserResponse = await usersManagement.createUser(user);
    expect(addNewUserResponse.status()).toBe(201)
    const updateUserResponse = await usersManagement.updateUsersEmail(user.email, updatedUser);
    const updateUserData = await updateUserResponse.json();
    expect(updateUserResponse.status()).toBe(400)
    expect.soft(updateUserData.error).toBe("User not found")
  });
});
test("[put]  /users/{email} - update user - code 400 scenario (invalid age)", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  const updatedUser = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: "not an age"
  }
  await test.step("Step 001: update user information and validate response", async () => {
    const addNewUserResponse = await usersManagement.createUser(user);
    expect(addNewUserResponse.status()).toBe(201)
    const updateUserResponse = await usersManagement.updateUsersEmail(user.email, updatedUser);
    const updateUserData = await updateUserResponse.json();
    expect(updateUserResponse.status()).toBe(400)
    expect.soft(updateUserData.error).toBe("User not found")
  });
});
test("[put]  /users/{email} - update user - code 404 scenario", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  const updatedUser = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: update user information and validate response", async () => {
    const addNewUserResponse = await usersManagement.createUser(user);
    expect(addNewUserResponse.status()).toBe(201)
    const updateUserResponse = await usersManagement.updateUsersEmail("invalidEmail@email.com", updatedUser);
    const updateUserData = await updateUserResponse.json();
    expect(updateUserResponse.status()).toBe(404)
    expect.soft(updateUserData.error).toBe("User not found")
  });
});
test("[put]  /users/{email} - update user - code 409 scenario", async ({ usersManagement }) => {
  const user = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  const secondNewUser = {
    name: `${testDataHelper.getValidName()} ${testDataHelper.getValidLastName()}`,
    email: testDataHelper.randomEmail(),
    age: testDataHelper.randomAge()
  }
  await test.step("Step 001: update user information and validate response", async () => {
    const addNewUserResponse = await usersManagement.createUser(user);
    const add2ndNewUserResponse = await usersManagement.createUser(secondNewUser);
    expect(addNewUserResponse.status()).toBe(201)
    expect(add2ndNewUserResponse.status()).toBe(201)
    const updateUserResponse = await usersManagement.updateUsersEmail(user.email, secondNewUser);
    const updateUserData = await updateUserResponse.json();
    expect(updateUserResponse.status()).toBe(409)
    expect.soft(updateUserData.error).toBe("User not found")
  });
});