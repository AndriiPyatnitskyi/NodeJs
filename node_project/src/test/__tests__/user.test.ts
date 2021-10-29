import {User} from "../../module/user/User";

test('get User name', () => {
    let name = "Garry";
    expect(new User(name).getName()).toBe(name);
});
