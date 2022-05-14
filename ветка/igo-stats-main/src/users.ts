import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

import { db } from './base';
import { PlayerData } from './types';

const dbUsersName = 'members';
const dbUsers = collection(db, dbUsersName);

export const getUserData = (id: string): Promise<PlayerData> =>
    new Promise<PlayerData>((resolve) => {
        getDoc(doc(db, dbUsersName, id)).then((data) =>
            resolve({
                id: id,
                first_name: data.get('first_name'),
                last_name: data.get('last_name'),
                rating_rfg: data.get('rating'),
                tournaments: data.get('Tournaments'),
                city: data.get('city'),
                country: data.get('country'),
                club: data.get('club'),
            })
        );
    });

export const allUsers = (): Promise<PlayerData[]> =>
    new Promise<PlayerData[]>((resolve) => {
        getDocs(dbUsers).then((snapshot) => {
            const temp: PlayerData[] = [];
            snapshot.forEach((doc) => {
                temp.push({
                    id: doc.id,
                    first_name: doc.data().first_name,
                    last_name: doc.data().last_name,
                    rating_rfg: doc.data().rating,
                    tournaments: doc.get('Tournaments'),
                    city: doc.get('city'),
                    country: doc.get('country'),
                    club: doc.get('club'),
                });
            });
            resolve(temp);
        });
    });
export const setUserData = (id: string, test: string): Promise<PlayerData> =>
    new Promise<PlayerData>((resolve) => {
        const userRef = doc(db, dbUsersName, id);
        return setDoc(
            userRef,
            {
                club: test,
            },
            { merge: true }
        );
    });
