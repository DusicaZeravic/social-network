import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ user }) => {
    return (
        <Link to={`/${user.id}`}>
            <div>
                {user.firstName} {user.surname}
            </div>
        </Link>
    )
}

export default User
