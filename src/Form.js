import { createTheme, makeStyles, TextField, ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from './Context'
const useStyle=makeStyles((theme)=>({
  cont:{
    // background:'url(https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg)',
    background:'url(https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png)',
    // background:'url(https://www.wallpaperbetter.com/wallpaper/282/86/479/train-2K-wallpaper-middle-size.jpg)',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    width:'100%',
    height:'99.9vh',
  },
  form:{
     width:'500px',
     height:'550px',
     borderRadius:'10%',
     background: 'rgba(255,255,255,0.1)',
     WebkitBackdropFilter: 'blur(10px)',
     backdropFilter: 'blur(10px)',
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     flexDirection:'column',
     [theme.breakpoints.down('xs')]:{
      width:'100%',
     },
     boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
  },
  btn:{
    marginTop:'10px',
    width:'150px',
    height:'50px',
    borderRadius:'25px',
    outline:'none',
    backgroundColor:'#166bd3',
    color:'white',
    fontSize:'20px',
    cursor:'pointer',
    fontWeight:'bold',
    border:'5px solid #166bd3',
    '&:hover':{
      backgroundColor:'transparent',
      // color:'#166bd3',
      fontSize:'20px',
    }
  },
  title:{
    color:'white'
  },
  normal:{
    // border:'2px solid red',
    width:'100%',
    height:'50px',
    borderTopLeftRadius:'50px',
    borderTopRightRadius:'50px',
    display:'flex',
    alignItems:'center',
    color:'white',
    fontSize:'20px',
  },
  success:{
    // border:'2px solid red',
    width:'100%',
    height:'50px',
    borderTopLeftRadius:'50px',
    borderTopRightRadius:'50px',
    display:'flex',
    alignItems:'center',
    color:'white',
    fontSize:'20px',
    backgroundColor:'rgb(11, 218, 81)',
  },
  err:{
    // border:'2px solid red',
    width:'100%',
    height:'50px',
    borderTopLeftRadius:'50px',
    borderTopRightRadius:'50px',
    display:'flex',
    alignItems:'center',
    color:'white',
    fontSize:'20px',
    backgroundColor:'red',
  },
  btn2:{
    marginTop:'10px',
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
  radio:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'rgb(22, 107, 211,0.2)',
    padding:'5px',
    paddingLeft:'10px',
    paddingRight:'10px',
    borderRadius:'20px',
    flexDirection:'row',
    gap:'5px',
    // color:'#166bd3',
    color:'white',
    fontWeight:'bold',
  },
  radio_div:{
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
  },
  radio_selected:{
    display:'flex',
    gap:'5px',
    // justifyContent:'center',
    // alignItems:'center',
    flexDirection:'row',
    backgroundColor:'rgb(22, 107, 211,0.5)',
    padding:'5px',
    paddingLeft:'10px',
    paddingRight:'10px',
    borderRadius:'20px',
    // color:'#166bd3',
    color:'white',
    fontWeight:'bold',
  },
}))
const Form = () => {
  const darkTheme=createTheme({
    palette:{
        primary:{
            main:"#fff"
        },
        type:'dark'
    },
})
const {addUser}=GlobalContext();
const history=useNavigate();
const handleClick=()=>{
  try{
    if(!name || !email || !phone || !from || !to)
    {
      throw "Please Fill the Form Correctly"
    }
    if(phone.length<10 || isNaN(phone))
    {
      throw "Phone Number is Invalid"
    }
    if(!email.includes('@gmail.com'))
    {
      throw "Email is not Valid"
    }
    const data={name,email,phone,from,to};
    addUser(data);
    setName('');
    setPhone('');
    // setAddress('');
    setFrom('');
    setTo('');
    setEmail('');
    setError('Registered Successfully');
    setStatus(2);
    setvalue('normal');
  }
  catch(error){
    setError(error);
    setStatus(1);
  }
}
  const classes=useStyle();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [from,setFrom]=useState('');
  const [to,setTo]=useState('');
  const [phone,setPhone]=useState('');
  const [error,setError]=useState('');
  const [status,setStatus]=useState(0);
  const [value,setvalue]=useState('normal');
  useEffect(()=>{
    if(error && (status===1 || status===2))
    {
      setTimeout(()=>{
        setError('');
        setStatus(0);
      },7000)
    }
  },[error,status]);
  return (
    <div className={classes.cont}>
      {/* <h1 className={classes.title}>TICKET BOOKING</h1> */}
      <ThemeProvider theme={darkTheme}>
      <div className={classes.form}>
      <div className={`${status===0 && classes.normal} ${status===2 && classes.success} ${status===1 && classes.err}`}>
        {error && <span style={{
          marginLeft:'40px',
          flexGrow:'1',
          color:'white'
        }}>
        <i 
        style={{
          marginRight:'7px',
        }}
        className="fa-solid fa-circle-info"></i>
        {error}</span>}
        {error && <i className="fa-solid fa-xmark" style={{
          cursor:'pointer',
          marginRight:'30px'
        }}
        onClick={()=>{
          setError('');
          setStatus(0);
        }}></i>}
        
      </div>
      <div style={{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flexGrow:'1'
      }}>
      <TextField
      value={name}
        label="Name"
        variant="outlined"
        style={{
          width:"75%",
          marginTop:20,
        }}
        onChange={(e)=>{
          setName(e.target.value);
        }}
      />
      <TextField
      value={email}
        label="Email"
        variant="outlined"
        style={{
          width:"75%",
          marginTop:20,
        }}
        onChange={(e)=>{
          setEmail(e.target.value);
        }}
      />
      <TextField
      value={phone}
      type='tel'
        label="Phone Number"
        variant="outlined"
        style={{
          width:"75%",
          marginTop:20,
        }}
        onChange={(e)=>{
          setPhone(e.target.value);
        }}
      />
      <div style={{
        display:'flex',
        width:'75%',
        gap:'20px'
      }}>
      <TextField
      value={from}
        label="Addresss"
        variant="outlined"
        style={{
          width:"75%",
          marginTop:20,
          marginBottom:20
        }}
        onChange={(e)=>{
          setFrom(e.target.value);
        }}
      />
      <TextField
      value={to}
        label="Pincode"
        variant="outlined"
        style={{
          width:"75%",
          marginTop:20,
          marginBottom:20
        }}
        onChange={(e)=>{
          setTo(e.target.value);
        }}
      />
      </div>
      <button className={classes.btn}
      onClick={()=>{handleClick()}}
      >
        Register
      </button>
      </div>
      </div>
      </ThemeProvider>
    </div>
  )
}

export default Form