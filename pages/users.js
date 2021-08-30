import { Button, Tooltip, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Add, Delete, OpenInBrowser, Visibility } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useEffect } from "react"
import { useSelector } from "react-redux";
import { deleteUserById } from "../api";
import Dashboard from "../containers/Dashboard"
import { setUsers } from "../redux/actions/usersActions";

const Users = () => {
    const router = useRouter();

    const users = useSelector(state => state.users.data);

    useEffect(() => {
        setUsers();
    }, [])

    const deleteUser = (id) => {
        deleteUserById(id).then(res => {
            if (res) {
                alert("Successfully deleted")
                setUsers();
            }
            else alert("Error with delete function")
        })
    }

    return (
        <Dashboard>
            <h3>Users</h3>
            <div>
                <Button onClick={() => router.push(`${router.asPath}/add`)} variant="contained" color="primary"><Add /> Add</Button>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>username</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>phone</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users?.map((v, i) => (
                        <TableRow key={i}>
                            <TableCell>{v.id}</TableCell>
                            <TableCell>{v.username}</TableCell>
                            <TableCell>{v.email}</TableCell>
                            <TableCell>{v.phone}</TableCell>
                            <TableCell>
                                <Tooltip title="Open">
                                    <IconButton onClick={() => router.push(`/users/${v.id}`)}>
                                        <Visibility />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton onClick={() => { deleteUser(v.id) }}>
                                        <Delete />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Dashboard>
    )
}

export default Users
