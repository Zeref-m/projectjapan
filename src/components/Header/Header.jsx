import './Header.css';
import Navigation from './Navigation/Navigation';
import {RegistrationProvider} from "@/providers/RegistrationContextProvider";
import RegistrationWindow from "@/components/Header/RegistrationWindow";

export default function () {
    return (
        // <RegistrationProvider>
            <section id='header' className="header">
                <div className='flex'>
                    <div className="circle">
                        <h1 className="master-text text-white">TOURS TO</h1>
                        <h2 className=" master-text color-red">JAPAN</h2>
                    </div>
                    <div className='slave-text'>
                        <div>
                            <p>all educational tours in <br></br> Japan from studio origami</p>
                            <div>
                                <button className="button">view tours</button>
                            </div>
                        </div>
                    </div>
                    <div className="icones">
                        <img className='icone' src="/telegram.png" alt=""/>
                        <img className='icone' src="/instagram.png" alt=""/>
                        <img className='icone' src="/whatsap.png" alt=""/>
                    </div>
                </div>
                <Navigation/>
            </section>
        // <RegistrationWindow/>
        // </RegistrationProvider>
    )
}