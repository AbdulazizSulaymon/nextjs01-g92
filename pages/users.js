import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link"

const UsersWrapper = styled.div`
    
`;

const Users = () => {
    useEffect(async () => {
        try {
            const res = await axios.post(
                "http://localhost:3000/api/user",
                { name: "John doe" }
            );
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    }, [])

    return (
        <UsersWrapper>
            <header>
                <ul className="d-flex">
                    <li>
                        <Link href="/"><a className="btn">Home</a></Link>
                    </li>
                    <li>
                        <Link href="/users"><a className="btn">Users</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a className="btn">Todos</a></Link>
                    </li>
                </ul>
            </header>

            <h1><FontAwesomeIcon icon={faUsers} /> Users page</h1>

            <Link href="/users/1">
                <a className="me-3"><Button>user: 1</Button></a>
            </Link>
            <Link href="/users/2">
                <a className="me-3"><Button>user: 2</Button></a>
            </Link>

        </UsersWrapper>
    )
}

export default Users
