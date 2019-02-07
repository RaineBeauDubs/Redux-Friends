import  React from 'react';
import Friend from './Friend';

const FriendsList = props => {
  console.log(props.friends);
  return (
    <div className='friendSec'>
      {props.friends.map(friend => {
        return <Friend 
          friend={friend} 
          key={friend.id}
        />
      })}
    </div>
  );
};



export default FriendsList;