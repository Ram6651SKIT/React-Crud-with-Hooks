
import React, { useState, useEffect } from 'react'
import {  Button, Form, FormGroup, Label, Input,  } from 'reactstrap';

const EditUserForm = props => {
	const [ user, setUser ] = useState(props.currentUser)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
    }

    useEffect(
        () => {
          setUser(props.currentUser)
        },
        [ props ]
      )
      

	return (
		<Form
			onSubmit={event => {
				event.preventDefault()

				props.updateUser(user.id, user)
			}}
		>
        <FormGroup>
              <Label for="firstname">First Name</Label>
              <Input type="text" name="firstname"  value={user.firstname} onChange={handleInputChange}/ >
            </FormGroup>
		

            <FormGroup>
              <Label for="lastname">Last Name</Label>
              <Input type="text" name="lastname"  value={user.lastname}  onChange={handleInputChange}/>
            </FormGroup>

            <FormGroup>
              <Label for="age">Age</Label>
              <Input type="number"  required name="age"  value={user.age}  onChange={handleInputChange}/>
            </FormGroup>

            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input type="text"  required name="gender"  value={user.gender}  onChange={handleInputChange}/>
            </FormGroup>

            <FormGroup>
              <Label for="dateofjoining">Date of joining</Label>
              <Input  required name="dateofjoining"  value={user.dateofjoining}  onChange={handleInputChange}/>
            </FormGroup>

			<Button color="primary">Update </Button>
			<Button onClick={() => props.setEditing(false)} color="danger" style={{margin:10}}>
				Cancel
			</Button>
		</Form>
	)
}

export default EditUserForm;