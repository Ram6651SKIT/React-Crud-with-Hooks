import React, { useState } from 'react';
import UserTable from './components/UserTable';
import EditUserForm from './components/EditUserForm';
import AddUserForm from './components/AddUserForm';

const New =() =>{
    const userData=[
        {id:1,firstname:"Ram",lastname:"Yaragarla",age:"23",gender:"male",dateofjoining:"04-12-2018"},
        {id:2,firstname:"Sandy",lastname:"SK",age:"23",gender:"male",dateofjoining:"04-12-2018"},
        {id:3,firstname:"Naga",lastname:"naidu",age:"43",gender:"male",dateofjoining:"04-12-2018"},
      ]
  const [users,setUsers]=useState(userData)

  const addUser=user=>{
    user.id=users.length+1;
    setUsers([...users,user])
  }

  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }

  const [ editing, setEditing ] = useState(false)
  const initialFormState = { id: null, firstname: '', lastname: '' ,age:'',gender:'',dateofjoining:''}
  const [ currentUser, setCurrentUser ] = useState(initialFormState)

  const editRow = user => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, 
                     firstname: user.firstname, 
                     lastname: user.lastname ,
                     age:user.age,
                     gender:user.gender,
                     dateofjoining:user.dateofjoining})
                      }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return(
    <div className="container">
    {/* <h4 className="h4">React CRUD Application </h4> */}
    <div className="row">
    <div className="col-md-6">
    <div className="flex-large">
  {editing ? (
    <div>
      <h4 className="edituser">Edit User</h4>
      <EditUserForm
        editing={editing}
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
      <UserTable users={users} editRow={editRow} />
    </div>
  ) : (
    <div>
      <h4 className="adduser">Add User</h4>
      <AddUserForm addUser={addUser} />
    </div>
  )}
</div>
    </div>
    <div className="col-md-9">
    {/* <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/> */}
    </div>
    </div>
    
    </div>
  )
}



export default New;
