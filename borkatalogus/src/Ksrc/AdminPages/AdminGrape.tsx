import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './Admin.module.css'
import { useEffect, useState } from 'react'
import { GetDbData } from './AdminFetch';

const AdminGrape = () => {

  type Grape = {
    id:number,
    name :string,
    color: string
  }

  useEffect(()=>{
    const fetchGrapes = async () => {
      try {
        const data = await GetDbData("api/grape")
        if (Array.isArray(data)) {
          setGrapes(data as Grape[])
        } else if (data && Array.isArray((data as any).result)) {
          setGrapes((data as any).result as Grape[])
        } else {
          console.warn('Unexpected grape data format:', data)
        }
      } catch (err) {
        console.error('Failed to fetch grapes', err)
      }
    }

    fetchGrapes()

  },[])
  const [grapes, setGrapes] = useState<Grape[]>([
  ])

  const [openDelete, setDelete] = useState(false);
  const [openPost, setPost] = useState(false);
  return (
    <div>

     <div  className={styles.WineMain}>
      <h1 className={styles.AdminTitles}>Grapes</h1>
      <div className={`${styles.ButtonHeader} ${styles.PostHeader}`}>
        <button className={`${styles.ToggleButton}`} onClick={() => {setPost(!openPost)}}>Post ⤵️</button>
        </div>
            {openPost && 
            <div className={styles.WinePost}>
              
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
            </div>}
      

      <div className={`${styles.ButtonHeader} ${styles.DeleteHeader}`}>
        <button className={`${styles.ToggleButton}`} onClick={() => {setDelete(!openDelete)}}>Delete ⤵️</button>
        </div>
            {openDelete && 
            <div className={styles.WinePost}>

            <TableContainer sx={{ maxHeight: '60vh' }}>
          <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }} >
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

            </div>}    
  </div>

    </div>
  )
}

export default AdminGrape