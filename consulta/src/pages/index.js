import Footer from '../components/Footer';
import sample from '../videos/videokeep.mp4';
import especialista from '../imgs/especialista.png';
import { Link } from 'react-router-dom'

var logo="https://cdn-icons-png.flaticon.com/512/88/88096.png"

function Index(){
return(
    <div>
        <div className='backgroundHandler'>
            <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
        </div>
        <div className='indexContainer'>
            <div className="imgHolder"><img src={logo} alt="" srcSet="" /><h1>KEEP Medicina</h1></div>
            <div className='botoesIndex'>
            <h2 >Como podemos te ajudar hoje?</h2>
            <Link to="/login"><button className="whitebutton"> <i class="fa-solid fa-right-to-bracket"></i><h3> Acesso dos associados</h3></button> </Link>
            <Link to="/consultar"><button className="whitebutton"><i class="fa-solid fa-calendar-check"></i><h3> Marcar uma consulta</h3></button> </Link>
            </div>
            <div className='faleComUmEspecialista'>
                <button className="greenbutton">
                    <img src={especialista}></img>
                     <h1>FALE COM UM <span>ESPECIALISTA!</span></h1> 
                </button>
            </div>
        </div>
        <Footer />
    </div>
)
}


export default Index