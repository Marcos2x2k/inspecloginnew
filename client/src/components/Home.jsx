
import React, {useState} from 'react';
import { NavLink } from "react-router-dom"
// import Button from '@material-ui/core/Button'; // importo estilo de boton
// import Button from '@mui/material/Button'; // importo estilo de boton
// import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Tablet, Container } from 'reactstrap'
import './styles/LandingPage.css'; // importo los styles de mi Home.css

// import NavBar from './NavBar';

//IMPORTO PORQUE USAMOS HOOKS
import { useEffect, Fragment } from 'react'; //  HOOK USAMOS useState es un hook (//)Fragment es como un div para envolver hijos div en app)
import { useDispatch, useSelector } from 'react-redux';
//Siempre importo las acciones nuevas 
//import {getGames, getListGenres, filterGamesByGenre, filterCreated, orderByName, getPlatforms, orderByRating, setPage} from '../actions';

//LINK nos sirve para poder movernos por nuestra aplicación
//más fácilmente en lugar de tener que cambiar la URL manualmente en el navegador.
import { Link } from 'react-router-dom';
import {ListExpediente} from '../components/ListExpediente'
import {ListInspeccion} from '../components/ListInspeccion'
import {ListIntimacion} from '../components/ListIntimacion'
import {InspecCreate} from '../components/InspecCreate' // este es multa
import {ListTicket} from '../components/ListTicket'
import {Estadisticas} from '../components/Estadisticas'

//ME IMPORTO EL COMPONENTE Card y renderizo en linea 
// import Card from './Card';
// import SearchBar from './SearchBar';
// import Paginado from './Paginado';

export function Home() {
    const [usu, setUsu] = useState(localStorage.getItem("usu"))
    const [ListExp, setListExp] = useState("");    
    const [ListIns, setListIns] = useState(""); 
    const [ListInt, setListInt] = useState(""); 
    const [ListMulta, setListMulta] = useState("");
    const [ListTicket, setListTicket] = useState(""); 
    const [ListEst, setListEsta] = useState(""); 

    function op_ListExp(){   
        document.getElementById("caja_menu").style.display = "none";  
        // document.getElementById("caja_Expedientes").style.display = "initial"            
        setListExp("1");        
    }
    function op_ListIns(){   
        document.getElementById("caja_menu").style.display = "none";              
        setListIns("1");        
    }
    function op_ListInt(){   
        document.getElementById("caja_menu").style.display = "none";              
        setListInt("1");        
    }
    function op_ListMulta(){   
        document.getElementById("caja_menu").style.display = "none";              
        setListMulta("1");        
    }
    function op_ListTicket(){   
        document.getElementById("caja_menu").style.display = "none";              
        setListTicket("1");        
    }
    function op_ListEst(){   
        document.getElementById("caja_menu").style.display = "none";              
        setListEsta("1");        
    }

    function cerrarSesion(){
        document.getElementById("caja_menu").style.display = "none";
        document.getElementById("form_login").style.display = "block";
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
      }
      
    // const expedientes = [
    //     {
    //                     numexpediente: "0920Ñ2020",
    //                     fechainicioentrada:"20/10/2020",
    //                     estado:"P/Insp",
    //                     iniciadornomyape: "Joselo Ortiz",
    //                     domicilio:"Las Heras 2029",
    //                     adrema:"A1-888888-1",
    //                     directorobraoperitovisor:"Sosa Hernan Carlos",
    //                     destinodeobra:"Viv.Familiar",
    //                     superficieterreno:"1000",
    //                     superficieaconstruir:"500",
    //                     superficiesubsueloplantabaja:"500",
    //                     superficieprimerpisoymaspisos:"0",
    //                     zona:"A1",
    //                     observaciones:"",
    //                     permisobraoactainfrac:""
    //     },
    // ]

    return (
        <>
            <div id="caja_menu" style={{textAlign:"center"}}>
            <div>
                <a href="/"><img height="60" src={require('./images/logoMuni.png')} /></a>
                <div>
                    <div>
                        
                        {/* <a style={{color:"blue", textAlign:"text-center"}}></a> */}
                        <a className="nav-link  h5  text-center" style={{ color: "blue" }} href=" " onClick={cerrarSesion} >Usuario: {usu.toUpperCase()} / Cerrar Sesión</a>

                        {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' height="50" alt="to home" /> */}

                        <h1 className="colorLetrasamarillas">Menú del Sector de Inspección de Obras</h1>

                        {/* <Button variant="contained">CARGAR EXPEDIENTE</Button> */}
                        {/* <Link to= '/ExpedCreate'><button className="selectfont">CARGAR EXPEDIENTE</button></Link> */}

                        {/* <NavBar
                    /> */}
                        <div style={{ textAlign: "center" }}>
                        <img src={require('./images/separadorpagina.png')} />
                            <NavLink to="" className="nav-link  p  text-left"  onClick={op_ListExp }>EXPEDIENTES</NavLink>
                            <NavLink to="" className="nav-link  p  text-left"  onClick={op_ListIns }>INSPECCIONES</NavLink>
                            <NavLink to="" className="nav-link  p  text-left"  onClick={op_ListInt }>INTIMACIONES</NavLink>
                            <NavLink to="" className="nav-link  p  text-left"  onClick={op_ListMulta }>INFRACCIONES/MULTAS</NavLink>
                            <NavLink to="" className="nav-link  p  text-left"  onClick={op_ListTicket }>TICKETS</NavLink>
                            {/* <Link to='/ListExpediente'><Button color='primary'> EXPEDIENTES </Button></Link> {"   "}
                            <Link to='/ListInspeccion'><Button color='danger'>INSPECCIONES</Button></Link>  {"   "}
                            <Link to='/ListIntimacion'><Button color='primary'>INTIMACIONES</Button></Link>  {"   "}
                            <Link to='/InspecCreate'><Button color='danger'> INFRACCIONES/MULTAS </Button></Link>  {"   "}
                            <Link to='/ListTicket'><Button color='primary'> TICKETS </Button></Link> */}
                            {/* <Link to='/ExpedCreate'><Button color='danger'>CREAR EXPEDIENTE</Button></Link>  {" - "}                
                    <Link to='/TicketCreate'><Button color='danger'>CREAR TICKET</Button></Link>  {" - "} */}
                            {/* <img className='logocorrientes' src="https://muchosnegociosrentables.com/wp-content/uploads/2020/11/crear-una-constructora-guia-completa.jpg" width="600" height="300" /> */}
                            {/* <Link to='/ListInspeccion'><Button color='primary'> LISTAR INSPECCIONES </Button></Link> {" - "} */}
                            {/* <Link to='/ListInspeccion'><Button color='primary'> LISTA INSPECCIONES </Button></Link> {" - "} */}
                            {/* <br /> */}
                            
                        </div>
                        {/* <br /><br /> */}
                        {/* <br /> */}
                        {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/> */}
                    </div>
                    <div style={{ textAlign: "center" }}>
                        {/* <img className='logocorrientes' src={require('./images/constructor.jpg')} width="1100" height="280" /> */}
                        <img src={require('./images/separadorpagina.png')} />
                    {/* <br />
                    <br /> */}
                    {/* <Link to='/ListExpediente'><Button color='primary'> LISTA EXPEDIENTES </Button></Link> {" - "} */}
                    {/* <Link to='/ListInfraccion'><Button color='primary'> LISTA INFRACCIONES </Button></Link> {" - "} */}
                    {/* <Link to='/Construccion'><Button color='primary'> LISTAR INFRACCIONES </Button></Link> {" - "} */}
                    {/* <Link to='/ListTicket'><Button color='primary'> LISTAR TICKET </Button></Link> {" - "} */}
                    <Link to='/LandingPage'><Button color="success"> IR AL INICIO </Button></Link> {" - "}
                    <Link to='/Estadisticas'><Button color='warning'> Sección Estadisticas </Button></Link>
                    <br />
                    
                    </div>
                    {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/> */}
                    {/* <br /> */}
                    <div style={{ textAlign: "center" }}>
                    <a href="tel: 080055556864"><img src={require('./images/Muni-pie-pagina.png')} /></a>
                    <a target="_blank" href="https://www.google.com/maps/place/25+de+Mayo+1178,+W3400+BCO,+Corrientes/@-27.4643245,-58.8359019,19z/data=!4m5!3m4!1s0x94456ca5cf8581b3:0xc800c5930b7d65f0!8m2!3d-27.4645143!4d-58.835628"><img src={require('./images/Muni-pie-pagina2.png')} /></a>
                    {/* <img src=" https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/call_negro.png"/>            
            <img src="https://ciudaddecorrientes.gov.ar/sites/default/files/direccion_negro.png"/> */}
                    <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
                    </div>
                </div>                
            </div> 
            </div>  
            { ListExp === "1" && <ListExpediente/> }   
            { ListIns === "1" && <ListInspeccion/> } 
            { ListInt === "1" && <ListIntimacion/> } 
            { ListMulta === "1" && <InspecCreate/> }      
            { ListTicket === "1" && <ListTicket/> } 

        
        </>
    )
}