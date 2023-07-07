import { Cookies } from "react-cookie"

const useCookie = () => {

    const cookies = new Cookies()

    const setCookie = (name:string, value: string, option?: any) => {
        return cookies.set(name, value, {...option})
    }

    const getCookie = (name: string) => {
        return cookies.get(name)
    }

    return {setCookie, getCookie}
}
export default useCookie