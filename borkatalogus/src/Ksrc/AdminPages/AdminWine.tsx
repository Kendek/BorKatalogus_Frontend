import AdminNav from './AdminNav'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './Admin.module.css'
import { useState } from 'react';

const AdminWine = () => {

  const [openDelete, setDelete] = useState(false);
  const [openPatch, setPatch] = useState(false);
  const [openPost, setPost] = useState(false);

  const Toggle = (type:string) =>{
    switch (type) {
      case "Delete":
        setDelete(!openDelete)    
        break;
      case "Post":
        setPost(!openPost)
        break;
      case "Patch":
        setPatch(!openPatch)
        break;
      default:
        break;
    }
  }


  return (
    <div>
      <div  className={styles.WineMain}>
    <h1>Wines</h1>
        <div className={`${styles.ButtonHeader} ${styles.PostHeader}`}>
        <button className={`${styles.ToggleButton}`} onClick={() => {Toggle("Post")}}>Post ⤵️</button>
        </div>
            {openPost && 
            <div className={styles.WinePost}>
              
            </div>}

        <div className={`${styles.ButtonHeader} ${styles.PatchHeader}`}>
        <button className={`${styles.ToggleButton}`} onClick={() => {Toggle("Patch")}}>Patch ⤵️</button>
        </div>
            {openPatch && 
            <div className={styles.WinePost}>
              
            </div>}

        <div className={`${styles.ButtonHeader} ${styles.DeleteHeader}`}>
        <button className={`${styles.ToggleButton}`} onClick={() => {Toggle("Delete")}}>Delete ⤵️</button>
        </div>
            {openDelete && 
            <div className={styles.WinePost}>
              
            </div>}        
      </div>
    </div>
  )
}

export default AdminWine