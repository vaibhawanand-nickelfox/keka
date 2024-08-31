import 'react-native-get-random-values'
import { Realm } from '@realm/react'
export class Users extends Realm.Object {
    _id!: Realm.BSON.ObjectId;
    name!: string;
    email!: string;
    password!: Date;
    createdAt!: Date;
    lastLogin!: Date;
  
    
    static addUser(name: string, email: boolean, password: string) {
      return {
        _id: new Realm.BSON.ObjectId(),
        name,
        email,
        password,
        createdAt: new Date(),
        lastLogin: new Date(),
      };
    }
  static openRealm = async (): Promise<Realm> => {
    try {
      const realm = await Realm.open({
        path: 'myrealm',
        schema: [Users.schema],
      });
      console.log('Realm opened successfully');
      return realm;
    } catch (error) {
      console.error('Error opening Realm', error);
      throw error;
    }
  }
    static schema = {
      name: 'Users',
      primaryKey: 'email',
      properties: {
        _id: 'objectId',
        name: 'string',
        email: 'string',
        password: 'string',
        createdAt: 'date',
        lastLogin: 'date',
      },
    };
  }