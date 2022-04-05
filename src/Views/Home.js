import NavComponent from "../Components/NavComponent";
import doctor from './../../public/img/doc.jpg';

export default function Home (){
    return(
        <div >
            <NavComponent />
            <h1>BIENVENIDO!</h1>
            <img src={doctor} alt="Doctor" width="100%" height="70%"/>
        </div>
    )
}