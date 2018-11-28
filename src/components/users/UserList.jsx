import React from 'react'
import UserCard from './UserCard';

const UserList = (props) => {
  return (
    <div className="UserList row justify-content-center">
      <div className="col-12 col-md-12 col-lg-8">
        <div className="row justify-content-center">
        { props.users.map((user, index) => 
          <div className="col-6 col-sm-6 col-md-4 col-lg-4 mb-4">
            <UserCard 
              userIndex = {index}
              user={user} 
              userID={user.id} 
              userName={user.name} 
              userAvatar={user.avatar_urls['96']} 
              colorTitle="text-white" colorSubTitle="text-orange" 
            />
          </div>
          )
        }
        </div>
      </div>
    </div>
  )
}

export default UserList