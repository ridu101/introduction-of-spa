import { use } from 'react';

const Userdetails2 = ({userPromise}) => {

    const user= use(userPromise)
    const {username, email}=user;
    return (
        <div>
            <h4>{username}</h4>
            <p><small>{email}</small></p>
        </div>
    );
};

export default Userdetails2;