import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

import { db } from './base';
import { UserData } from './types';

const dbUsersName = 'members';
const dbUsers = collection(db, dbUsersName);

export const getUserData = (name: string): Promise<UserData> =>
    new Promise<UserData>((resolve) => {
        getDoc(doc(db, dbUsersName, name)).then((d) =>
            resolve({
                Admin: d.data()?.Admin || false,
                Rating: d.data()?.RFG[0].Rating || 0,
            })
        );
    });

export const allUsers = (): Promise<string[]> =>
    new Promise<string[]>((resolve) => {
        getDocs(dbUsers).then((snapshot) => {
            const temp: string[] = [];
            snapshot.forEach((doc) => {
                temp.push(doc.id);
            });
            resolve(temp);
        });
    });
