import { useRealm, useQuery } from '@realm/react'
import { Users } from 'database'
export const useSignupModel = () => {
    const realm = useRealm();
    const registerUser = async (params: any) => {
        try {

            realm.write(() => {
                realm.create("Users", Users.addUser(params.name, params.email, params.password));
            })
            return { success: true, message: 'User created successfully' };
        } catch (error) {
            console.error('Error creating user', error);
            // Return failure response
            return { success: false, message: 'Failed to create user' };

        }

    }
    return { registerUser }
}