import { test as base } from '@playwright/test';
import usersManagement from '../endpoints/userManagement.endpoints'
type fixtures = {
    usersManagement: usersManagement
}

const test = base.extend<fixtures>({
    usersManagement: async ({ 	request }, use) => {
        await use(new usersManagement(request));
    },
});
export const expect = test.expect
export default test;