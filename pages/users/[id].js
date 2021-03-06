import { useRouter } from "next/router"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Dashboard from "../../containers/Dashboard"
import { setUser } from "../../redux/actions/usersActions";

const User = () => {
    const router = useRouter();
    const { id } = router.query;

    console.log(id);

    const user = useSelector(state => state.users.user) || {};

    useEffect(() => {
        id && setUser(id)
    }, [id])

    return (
        <Dashboard>
            <h1>User: {id}</h1>
            <div className="row">
                <div className="col-lg-6 mb-3">
                    <div className="shadow rounded p-3">
                        <p className="fw-bold">name: {user.name}</p>
                        <p className="fw-bold">username: {user.username}</p>
                        <p className="fw-bold">email: {user.email}</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="shadow rounded p-3">
                        <p className="fw-bold">phone: {user.phone}</p>
                        <p className="fw-bold">website: {user.website}</p>
                        <p className="fw-bold">company: {user.company?.name}</p>
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default User
