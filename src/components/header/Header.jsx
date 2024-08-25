import './Header.css';
import Navigation from '../navigation/Navigation'; 

export default function () {
    return (
        <div className="header">
            <Navigation />
            <div className='flex'>
                <div className="circle">
                    <h1 className="master-text text-white">TOURS TO</h1>
                    <h2 className=" master-text color-red">JAPAN</h2>
                </div>
                <div className='slave-text'>
                    <div>
                        <p>all educational tours in <br></br> Japan from studio arigami</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}