import React, { useState } from 'react'
import UserTable from './components/tables/UserTable'
import AddUserForm from './components/forms/AddUserForm'
import EditUserForm from './components/forms/EditUserForm'

const App = () => {
  const usersData = [
    { id: 1, name: 'vishwa', username: 'vk2020' },
    { id: 2, name: 'sagar', username: 'sp1990' },
    { id: 3, name: 'mahesh', username: 'mp1990' },
  ]


  const [users, setUsers] = useState(usersData)
  console.log(">>>>>>>>>>>>>>>>>>>>>users >>>>>>>>>>>>>>>>>>", users);
  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)
  

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
    console.log(">>>>>>>>>>>>>>>>>>>>>user added >>>>>>>>>>>>>>>>>>", user);
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
    console.log(">>>>>>>>>>>>>>>>>>>>> deleted userid >>>>>>>>>>>>>>>>>>", id);
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
    console.log(">>>>>>>>>>>>>>>>>>>>> update user >>>>>>>>>>>>>>>>>>", user);
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    console.log(">>>>>>>>>>>>>>>>>>>>> updated user is >>>>>>>>>>>>>>>>>>", updatedUser);
  }


  return (
    <div className="container">
      <h1 className="align-center" >CRUD App with React Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App