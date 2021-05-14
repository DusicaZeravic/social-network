import { useParams } from 'react-router-dom';

// gets items from the array arr that occur at least twice in the array
function getDuplicateItems(arr) {
    return arr.filter(id => countInArray(arr, id) >= 2);
}

function countInArray(array, what) {
    return array.filter(item => item === what).length;
}

const UserInfo = ({ users }) => {
    let { id } = useParams();

    let user = users.find(user => user.id === Number(id));

    let friends = user.friends.map(friend => users.find(user => user.id === friend));

    let allFriendsOfFriendsIdsWithDuplicates = friends.map(friend => friend.friends).flat();

    let allFriendsOfFriendsIds = [...new Set(allFriendsOfFriendsIdsWithDuplicates)];

    let friendsOfFriends = allFriendsOfFriendsIds.filter(friend => !user.friends.includes(friend) && user.id !== friend).map(friend => users.find(user => user.id === friend));

    let withAtLeastTwoFriends = getDuplicateItems(allFriendsOfFriendsIdsWithDuplicates);
    let suggestedFriends = [...new Set([...withAtLeastTwoFriends])].filter(friend => !user.friends.includes(friend) && user.id !== friend).map(friend => users.find(user => user.id === friend));

    return (
        <div>
            User: {user?.firstName} {user?.surname}
            <h4>Friends</h4>
            {friends.map(friend => <p key={friend.id}>{friend.firstName} {friend.surname}</p>)}
            <h4>Friends of friends</h4>
            {friendsOfFriends.map(friend => <p key={friend.id}>{friend.firstName} {friend.surname}</p>)}
            <h4>Suggested friends</h4>
            {suggestedFriends.length !== 0 ? suggestedFriends.map(friend => <p key={friend.id}>{friend.firstName} {friend.surname}</p>) : "There's no suggested friends!"}
        </div>
    )
}

export default UserInfo
