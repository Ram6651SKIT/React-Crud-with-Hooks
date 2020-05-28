import React, {useState}from 'react'
import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddUserForm = props => {
    const initialFormState ={id:null,firstname:'',lastname:'',age:'',gender:'',dateofjoining:''}
    const [user,setUser]=useState(initialFormState)

const handleInputChange = event => {
    const { name, value } = event.target
  
    setUser({ ...user, [name]: value })
  }

  
  
  
    
  return (
      <Form onSubmit={event => {
        event.preventDefault()
        if (!user.firstname || !user.lastname) return
    
        props.addUser(user)
        setUser(initialFormState)
      }}>
          <FormGroup>
              <Label for="firstname">First Name</Label>
              <Input type="text" required name="firstname" placeholder="Enter First Name"  value={user.firstname} onChange={handleInputChange}/ >
            </FormGroup>
            <FormGroup>
              <Label for="lastname">Last Name</Label>
              <Input type="text"  required name="lastname" placeholder="Enter the  Last Name" value={user.lastname}  onChange={handleInputChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input type="number"  required name="age" placeholder="Enter Age" value={user.age}  onChange={handleInputChange}/>
            </FormGroup>

            <FormGroup>
              <Label for="gender">Gender *****</Label>
              <Input type="text"  required name="gender" placeholder="Male || Female" value={user.gender}  onChange={handleInputChange}/>
            </FormGroup>

            <FormGroup>
              <Label for="dateofjoining">Date of joining</Label>
              
     
              <Input type="date"  required name="dateofjoining"  value={user.dateofnpjoining}  onChange={handleInputChange}/>
            </FormGroup>
          
           

            <Button color="success">Add User</Button>
      </Form>
   
  )
}

export default AddUserForm;
