import { UserData } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    expect(new UserData()).toBeTruthy();
  });
});
