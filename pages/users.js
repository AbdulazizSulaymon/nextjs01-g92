import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { useEffect } from "react"
import { useSelector } from "react-redux";
import Dashboard from "../containers/Dashboard"
import { setUsers } from "../redux/actions/usersActions";

const Users = () => {
    const users = useSelector(state => state.users.data);

    useEffect(async () => {
        const res = await setUsers();
        console.log(res);
    }, [])

    return (
        <Dashboard>
            <h1>Users</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>username</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users?.map(v => (
                        <TableRow>
                            <TableCell>{v.id}</TableCell>
                            <TableCell>{v.username}</TableCell>
                            <TableCell>{v.email}</TableCell>
                            <TableCell>{v.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Dashboard>
    )
}

export default Users
