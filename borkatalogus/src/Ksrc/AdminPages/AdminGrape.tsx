import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './Admin.module.css'
import AdminNav from './AdminNav'
import { useState } from 'react'
const AdminGrape = () => {

  type Grape = {
    id:number,
    name :string,
    color: string
  }

  const [grapes, setGrapes] = useState<Grape[]>([
    { id: 1, name: 'Cabernet Sauvignon', color: 'Red' },
    { id: 2, name: 'Chardonnay', color: 'White' },
    { id: 3, name: 'Pinot Noir', color: 'Red' }
  ])

  return (
    <div>
      <AdminNav></AdminNav>

      <div className={styles.Post}>
        <div>
            <h1>Post:</h1>        
          </div>
        <div className={styles.PostVertical}>
          <h1>Name:</h1>
          <input type="text" />
        </div>
         <div>
          <h1>Color:</h1>
          <input type="text" />
        </div>   
        <div>
            <button className={styles.Add}>Add Grape</button>   
        </div>
      </div>
    <TableContainer>
       <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {grapes.map((row) =>(
                <TableRow>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.color}</TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell><button>❌</button></TableCell>
                </TableRow>
              ))}
          </TableBody>
       </Table>
    </TableContainer>

    </div>
  )
}

export default AdminGrape