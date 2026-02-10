import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AdminNav from './AdminNav'
import { useState } from 'react';
import styles from './Admin.module.css'
import AdminGrape from './AdminGrape';
import AdminWine from './AdminWine';
const AdminAccounts = () => {

  type Account  = {
    id:string,
    firstName:string,
    lastName:string,
    email:string,
  }

  const [openDelete, setDelete] = useState(false);

  const [accounts, setAccounts] = useState<Account[]>([
    { id : "asd-01", firstName: "John", lastName: "Doe", email: "john@example.com"},
    { id : "asd-02", firstName: "Jane", lastName: "Smith", email: "jane@example.com"},
    { id : "asd-01", firstName: "John", lastName: "Doe", email: "john@example.com"},
    { id : "asd-02", firstName: "Jane", lastName: "Smith", email: "jane@example.com"},
    { id : "asd-01", firstName: "John", lastName: "Doe", email: "john@example.com"},
    { id : "asd-02", firstName: "Jane", lastName: "Smith", email: "jane@example.com"},
    { id : "asd-01", firstName: "John", lastName: "Doe", email: "john@example.com"},
    { id : "asd-02", firstName: "Jane", lastName: "Smith", email: "jane@example.com"},
    { id : "asd-01", firstName: "John", lastName: "Doe", email: "john@example.com"},
    { id : "asd-02", firstName: "Jane", lastName: "Smith", email: "jane@example.com"},
    { id : "asd-01", firstName: "John", lastName: "Doe", email: "john@example.com"},
    { id : "asd-02", firstName: "Jane", lastName: "Smith", email: "jane@example.com"}
  ]);

  return (

    <div>
    
   <div  className={styles.WineMain}>
        <h1>Accounts</h1>
     <div className={`${styles.ButtonHeader} ${styles.DeleteHeader}`}>
        <button className={`${styles.ToggleButton}`} onClick={() => {setDelete(!openDelete)}}>Delete ⤵️</button>
        </div>
            {openDelete && 
            <div className={styles.DeleteDiv}>
        <TableContainer sx={{ maxHeight: '40vh' }}>
       <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }} >
          <TableHead>
            <TableRow>
              <TableCell>firstName</TableCell>
              <TableCell>lastName</TableCell>
              <TableCell>email</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

              {accounts.map((row) =>(
                <TableRow>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell><button>❌</button></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
            </div>}  
      <AdminGrape></AdminGrape>
      <AdminWine></AdminWine>


    </div>
      
     

    </div>
  )
}

export default AdminAccounts