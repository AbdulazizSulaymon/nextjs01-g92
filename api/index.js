import axios from "axios"

export const getUsers = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=12");
        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);
        return { success: false }
    }
}

export const getUserById = async (id) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);
        return { success: false }
    }
}

export const deleteUserById = async (id) => {
    try {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}