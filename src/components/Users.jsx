import { useState } from 'react';
import User from './User';

const Users = ({ users }) => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div>
            <div><input type="text" onChange={(e) => setSearchTerm(e.target.value)} /></div>
            {users.filter(user => user.firstName.toLowerCase().includes(searchTerm.toLowerCase())).map(user => <User key={user.id} user={user} />)}
        </div>
    )
}

export default Users