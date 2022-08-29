import React, {useState} from 'react'
// import Login from '../components/Login'
// import {LandingPage} from '../components/LandingPage'
import {Home} from '../components/Home'
// import './styles/Home.css';
import './styles/LandingPage.css'; // importo los styles
import swal from 'sweetalert'


// export const PaginaLogin = () => {
export default function Login(){

    const comprobarSesion = () =>{
        var sesion = localStorage.getItem("miLogin");
        if (sesion){
            return JSON.parse(sesion); // igual q si pongo TRUE
        } else {            
            return false;
        }
    }    
    const [miLogin, setMiLogin] = useState(comprobarSesion()); // permite control constante si esta iniciada la sesion
    const [usu, setUsu] = useState("");
    const [pas, setPas] = useState("");

        function iniciarSesion(e){
            //evito que se cargue la pagina por error
            e.preventDefault();
            //aca capturo lo que tengo en la caja de input            
            var txtusu = document.getElementById("txtusu").value;
            var txtpass = document.getElementById("txtpass").value;
            if (txtusu.length===0 || txtpass.length===0){
                // alert("Usuario o contraseña Faltante!!!")
                if (txtusu.length===0 || txtpass.length>0) swal("Usuario Faltante!!!") 
                if (txtusu.length>0 || txtpass.length===0) swal("Contraseña Faltante!!!")
                if (txtusu.length===0 && txtpass.length===0) swal("Usuario y Contraseña Faltante!!!") 
                // setMiLogin(false);
                //aca defino el pass y el usuario aprobado para el login               
            } else {
                if(usu.toUpperCase() == "ADMIN" && pas== "123" || usu.toUpperCase() == "SOTELO" && pas== "123"){                                
                    setMiLogin(false);
                    localStorage.setItem("miLogin", true);
                    localStorage.setItem("usu",usu);
                    //con esto oculto el formulario de inicio de sesion
                    document.getElementById("form_login").style.display="none";
                } else {                   
                    setMiLogin(true);
                    swal("Error de Usuario i/o Contraseña")
                    //limpio los input de usuario y pass
                    document.getElementById("txtusu").value = "";
                    document.getElementById("txtpas").value ="";
                    //volvemos a poner el foto en usuario
                    document.getElementById("txtusu").focus();

                }
            }     
        }   

  return (   
    
      <div className="container" style={{ background: "white", marginTop: 20, padding: 20 }}>      
        { miLogin === true ?
          <form id="form_login">
            <div>
            <img height="70" src={require('./images/logoMuni.png')} alt="to home"/> 
             <label className='blanco'> ----------------- </label>
             
                <img height="90" src={require('./images/logo redondo muni.png')} alt="to home"/>                
                         
             <br/>
            {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" /> */}
            <img src={require('./images/separadorpagina.png')}/><br/>
            <h1 className='colorLetras'>SECCIÓN DE LOGIN</h1>  
                  {/* <h1 style={{ color: "blue", textalign: "center" }}>LOGIN</h1> */}
                  <label htmlFor="txtusu"><strong>Username</strong></label>
                  <input type="text" id="txtusu" style={{ textAlign: "center" }} className="form-control" onChange={(e) => setUsu(e.target.value)} required />
              </div>
              <div>
                  <label htmlFor="txtpas"><strong>Password</strong></label>
                  <input type="password" id="txtpass" style={{ textAlign: "center" }} className="form-control" onChange={(e) => setPas(e.target.value)} required />
              </div><br />
              <img src={require('./images/separadorpagina.png')}/><br/>
              <input type="submit" className="btn btn-primary" value="Login" onClick={iniciarSesion} />
          </form>
            : 
            swal("Bienvenido", usu.toUpperCase(), "success") && <Home/>
            }            
      </div>    
  )
}


// import React from 'react';
// import {Link} from 'react-router-dom';
// import { Button, Tablet, Container } from 'reactstrap'
// import './styles/LandingPage.css'; // importo los styles de mi landinpage.css
// import { useNavigate } from 'react-router-dom';



// export default function PaginaLogin(){
//     const navigate = useNavigate();
//     const user = "";
//     const password="";
//     function handleSubmit(p) {
//         p.preventDefault(); 
//         if (user==="Marcos" && password==="123"){
//         alert ("Contraseña o Usuario Incorrecto")
//         navigate('/');         
//         }else{            
//                 navigate('/LandingPage');
//         }
//     } 
//     return(
//         <div>
//             <br/>
//             <img height="90" src={require('./images/logoMuni.png')} alt="to home"/> 
//             <label className='blanco'> ----------------- </label>
//             <img height="110" src={require('./images/logo redondo muni.png')} alt="to home"/>
//             <br/>
//             {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" /> */}
//             <h1 className="colorLetrasbordenegro">- SECCIÓN DE LOGIN  -</h1>            
//             <img src={require('./images/separadorpagina.png')}/><br/>
//             <br /> <br />  <br />   

//             <ul>
                
//             </ul>         
//             {/* <form onSubmit={(p) => handleSubmit(p)}> */}
//             {/* <form action="http://localhost:3000/LandingPage" method="get" > */}
//             <form onSubmit={(p) => handleSubmit(p)}>
//                 <div className="">
//                     <input 
//                     type="text" 
//                     id="user" 
//                     name="user" 
//                     // value=""
//                     // onChange={}
//                     placeholder='USUARIO' required>                        
//                     </input>
//                 </div>
//                 <br /> <br />
//                 <div className="">
//                     <input 
//                     type="password"
//                     id=""
//                     name="password"
//                     // value=""
//                     // onChange={}
//                     placeholder='CONTRASEÑA' required>
//                     </input>
//                 </div>
//                 <br /> <br /> <br /> 
//                 <input
//                 type="submit"
//                 value="INGRESO">                    
//                 </input>
//             </form>
//             {/* <Button color='primary' src='/login'>INGRESAR</Button>             */}
//             <br />          
//             <img src={require('./images/separadorpagina.png')}/>
//             <br/><br/>
//             <br/>
//             <a href="tel: 080055556864"><img src={require('./images/Muni-pie-pagina.png')}/></a>
//             <a target="_blank" href="https://www.google.com/maps/place/25+de+Mayo+1178,+W3400+BCO,+Corrientes/@-27.4643245,-58.8359019,19z/data=!4m5!3m4!1s0x94456ca5cf8581b3:0xc800c5930b7d65f0!8m2!3d-27.4645143!4d-58.835628"><img src={require('./images/Muni-pie-pagina2.png')}  /></a>           
//             <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>            
//             {/* <p><a href="https://www.linkedin.com/in/Marcos-Dacunda/" target="_blank">WebMaster: Marcos A. Dacunda G.</a></p>             */}
//         </div>
//     )}