import {getUser} from "@/actions/auth.js";
import RegistrationButton from "./RegistrationButton";
import LogoutButton from "./LogoutButton";

export default async function () {
    const user = await getUser();
    if (user) {
        return (
            <div className="profile">
                User: {user.login}
                <LogoutButton />
            </div>
        );
    }
    return <RegistrationButton/>

}