import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='flex justify-center py-20'>
      <UserProfile/>
    </div>
  )
}

export default Settings
