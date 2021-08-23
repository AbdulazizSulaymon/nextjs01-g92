import { useRouter } from 'next/dist/client/router'

const User = () => {
    const router = useRouter();

    const { id } = router.query;

    return (
        <div>
            <h1>User: {id}</h1>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae ex quasi sapiente autem aut, ab accusamus eius, natus doloribus, eveniet praesentium doloremque. Nobis atque natus laboriosam recusandae reiciendis! Provident!</div>
        </div>
    )
}

export default User;
