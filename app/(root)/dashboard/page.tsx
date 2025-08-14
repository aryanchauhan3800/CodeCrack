import React from 'react'

import Dashboard, { User } from '@/components/DashBoard/DashBoard'

const page = () => {
  const user: User = {
    name: "John Doe",
    title: "Computer Science Student",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  }
  return (
    <div>
      <Dashboard user={user} />
    </div>
  )
}

export default page