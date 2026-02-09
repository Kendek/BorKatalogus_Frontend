import axios from "axios";
import { BaseUrl } from "../Mcontext/WineContextProvider";
import type { UserType } from "../Mcomponents/SignUp";
import type { UserDataLoginType } from "../Mcomponents/SignIn";
import { header } from "motion/react-client";
axios.defaults.withCredentials = true;

export async function SetNewUserData(newUser: UserType) {
    try {
        const response = await axios.post(`${BaseUrl}/api/account/register`, newUser)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function SetUserLogin(userDataToLogin: UserDataLoginType) {
    try {
        const response = await axios.post(`${BaseUrl}/api/account/login`, userDataToLogin)

        localStorage.setItem("firstName", response.data.firstName),
        localStorage.setItem("lastName", response.data.lastName),
        localStorage.setItem("email", response.data.email),
        localStorage.setItem("token", response.data.token)
        console.log(response.data)
        window.dispatchEvent(new Event("storage"));
        return response;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function LogoutUser() {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.post(`${BaseUrl}/api/account/revoke`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (response.status == 200) {
            localStorage.removeItem("firstName"),
            localStorage.removeItem("token")
            window.dispatchEvent(new Event("storage"));
            console.log("User Loged out!")
        }

    } catch (error) {
        console.log(error);
        return null;
    }
}