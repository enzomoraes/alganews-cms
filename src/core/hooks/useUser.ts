import {
  User,
  UserService
} from 'enzomoraes-alganews-sdk';
import { useCallback, useState } from 'react';

export default function useUser() {
  const [user, setUser] = useState<User.Detailed>();

  const fetchUser = useCallback(async function () {
    UserService.getDetailedUser(7).then(setUser);
  }, []);

  return {
    user,
    fetchUser,
  };
}
