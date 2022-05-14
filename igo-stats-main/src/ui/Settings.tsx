import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { setUserData } from '../users';

export const Settings: React.FC = () => {
    const { id } = useParams();
    const [value1, setValue1] = useState<string>('');
    const [value2, setValue2] = useState<string>('');

    return (
        <div>
            <div>Hello</div>
            <div>
                <input
                    className="input is-normal Input"
                    type="text"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                ></input>
            </div>
            <div>
                <input
                    className="input is-normal Input"
                    type="text"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                ></input>
            </div>
            <div>
                <button
                    className="button is-light is-primary"
                    onClick={async () => await setUserData(id || '', value1)}
                >
                    Save
                </button>

                <a href={'/player/' + id}>
                    <button className="button is-light ">Back</button>
                </a>
            </div>
        </div>
    );
};
