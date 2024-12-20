import React from 'react'
import { refreshUser } from '../redux/auth/operation'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import UserCard from '../components/userCard/UserCard'
const Profile = () => {

   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <UserCard/>
    </div>
  )
}

export default Profile
