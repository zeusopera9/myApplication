import { createRealmContext } from '@realm/react';
import Realm from 'realm';

export class User extends Realm.Object {}
User.schema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: { type: 'string', indexed: true },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    username: { type: 'string', indexed: true },
    password: { type: 'string' },
    email: { type: 'string', indexed: true },
    familyCode: { type: 'string' },
  },
};

export const RealmContext = createRealmContext({
  schema: [User],
})
