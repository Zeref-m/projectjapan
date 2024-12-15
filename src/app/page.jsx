import Header from '../components/Header/Header.jsx';
import Gallery from "../components/Gallery/Gallery.jsx";
import About_us from "../components/About_us/About_us.jsx";
import Contacts from "../components/Contacts/contacts.jsx";
import RegistrationWindow from "@/components/Header/RegistrationWindow";
import GalleryWindow from "@/components/Gallery/GalleryWindow";

export default function Page() {
    return (
        <div>
            <Header/>
            <RegistrationWindow />
            <Gallery/>
            <GalleryWindow />
            <About_us/>
            <Contacts/>
        </div>
    )
}