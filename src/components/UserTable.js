import React from 'react'
import {Table} from 'reactstrap';
import {Button} from 'reactstrap';


 const UserTable= props =>  (
   <Table bordered>
       <thead>
           <tr>
               <th>Action</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Age</th>
               <th>Gender</th>
               <th>Date of Joining</th>
               
           </tr>
       </thead>
       <tbody>
           {props.users.length > 0 ? (
               props.users.map(user =>(
                <tr key={user.id}>
                <td>
                    <Button color="danger"  onClick={() => props.deleteUser(user.id)} >Delete</Button>
                    <Button color="primary"    onClick={() => {props.editRow(user)}} 
                             style={{margin:10}}>Edit</Button>
                    </td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.dateofjoining}</td>
                
            </tr>
               ))
           ):(
             <tr>
                 <td colSpan={6}>No users</td>
             </tr>  
           )
         }
          
       </tbody>
        
   </Table>
   
  )


export default UserTable;
