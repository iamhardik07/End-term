import { createTheme, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory as useNavigate } from 'react-router-dom';
import { GlobalContext } from './Context'
const useStyle=makeStyles((theme)=>({
  cont:{
    // background:'url(https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg)',
    background:'url(https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    display:'flex',
    // justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    paddingTop:'150px',
    width:'100%',
    height:'99.9vh',
    // border:'2px solid red'
    // paddingTop:'30px'
  },
  table:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    width:'fit-content',
    background: 'rgba(255,255,255,0.1)',
     WebkitBackdropFilter: 'blur(10px)',
     backdropFilter: 'blur(10px)',
    [theme.breakpoints.down("xs")]:{
      width:'100%',
    }
  },
  cell:{
    paddingLeft:'50px',
    paddingRight:'50px',
    color:"white",
    fontWeight:"800",
    [theme.breakpoints.down('sm')]:{
      paddingLeft:'30px',
      paddingRight:'30px',
    },
    [theme.breakpoints.down('xs')]:{
      paddingLeft:'0px',
      paddingRight:'0px',
    }
  },
  cell1:{
    paddingLeft:'45px',
    paddingRight:'45px',
    color:"white",
    // fontWeight:"800",
    [theme.breakpoints.down('sm')]:{
      paddingLeft:'30px',
      paddingRight:'30px',
    },
    [theme.breakpoints.down('xs')]:{
      paddingLeft:'0px',
      paddingRight:'0px',
    }
  },
  btn2:{
    marginTop:'50px',
    // width:'500px',
    paddingLeft:'30px',
    paddingRight:'30px',
    height:'50px',
    borderRadius:'25px',
    outline:'none',
    backgroundColor:'#166bd3',
    color:'white',
    fontSize:'20px',
    cursor:'pointer',
    fontWeight:'bold',
    border:'5px solid #166bd3',
  },
  xmark:{
    color:'white',
    fontSize:'20px',
    cursor:'pointer',
    '&:hover':{
      color:'red'
    }
  }
}))
const User = () => {
  const darkTheme=createTheme({
    palette:{
        primary:{
            main:"#fff"
        },
        type:'dark'
    },
})
  const classes=useStyle();
  const {users,setUsers}=GlobalContext();
  const [search,setSearch]=useState('');
  const history=useNavigate();
  const handleSearch=()=>{
    return users?.filter((user)=>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.toLowerCase().includes(search.toLowerCase()) ||
      user.to.toLowerCase().includes(search.toLowerCase()) ||
      user.from.toLowerCase().includes(search.toLowerCase()) ||
      user.value.toLowerCase().includes(search.toLowerCase())
    )
  }
  const delUser=(user)=>{
    if(window.confirm("Are you sure you want to delete"))
    {
      console.log(user.name,user.email,user.phone,user.address)
      const data=users.filter((curr)=>
      curr.name!==user.name || curr.email!==user.email || curr.phone!==user.phone || curr.address!==user.address
      )
      setUsers(data);
    }
  }
  return (
    <div className={classes.cont}>
      {/* <h1 style={{color:'white',fontSize:'40px',marginTop:'70px',marginBottom:'50px'}}>Booked Tickets</h1> */}
      {!users || users.length===0?<h1 style={{color:'white',fontSize:'40px',WebkitTextStroke:'1px black'}}>No User Registered Yet</h1>:
      <div style={{
        width:'fit-content',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
      }}>
        <ThemeProvider theme={darkTheme}>
        <TextField
        className={classes.search}
            label="Search Any User...."
            variant='outlined'
            style={{
              width:'100%',
              marginTop:'10px',
              marginBottom:'30px',
              borderRadius:'20px'
            }}
            onChange={(e)=>{setSearch(e.target.value)}}
            />
        </ThemeProvider>
      {handleSearch().length>0?
      <TableContainer className={classes.table}>
        <Table>
        <TableHead style={{
          backgroundColor:'#166bd3',
        }}>
          <TableRow>
            {['Name','Email','Phone Number','From','To',''].map((head)=>{
              return (
                <TableCell className={classes.cell} key={head}>
                  {head}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {handleSearch()?.map((user)=>{
            return (
              <TableRow key={user.name}>
                <TableCell className={classes.cell1}>
                  {user.name}
                </TableCell>
                <TableCell className={classes.cell1}>
                  {user.email}
                </TableCell>
                <TableCell className={classes.cell1}>
                  {user.phone}
                </TableCell>
                <TableCell className={classes.cell1}>
                  {user.from}
                </TableCell>
                <TableCell className={classes.cell1}>
                  {user.to}
                </TableCell>
                <TableCell className={classes.cell1}>
                  {user.value}
                </TableCell>
                <TableCell>
                  <span>
                  <i className={`fa-solid fa-xmark ${classes.xmark}`}
                onClick={()=>{delUser(user)}}
                ></i>
                  </span>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
        </Table>
      </TableContainer>
      :
      <>
      <h1 style={{color:'white'}}>No Bookings found with this input keywords</h1>
      </>}
      </div>
      }
      <button className={classes.btn2}
      onClick={()=>{history('/')}}
      >
        Back To Home
      </button>
    </div>
  )
}

export default User