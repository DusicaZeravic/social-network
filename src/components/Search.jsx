import { useState } from 'react';

const Search = ({ users }) => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div>
            <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
            {users.filter(user => user.firstName.toLowerCase().includes(searchTerm.toLowerCase())).map(user => <div key={user.id}>{user.firstName} {user.surname}</div>)}
        </div>
    )
}

export default Search
