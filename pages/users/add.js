import { Button, TextField } from "@material-ui/core"
import { Add, Cancel } from "@material-ui/icons"
import { useRouter } from "next/router"
import Dashboard from "../../containers/Dashboard"

const AddPage = () => {
    const router = useRouter();

    return (
        <Dashboard>
            <h1>Add new User</h1>
            <form noValidate autoComplete="off">
                <div className="row">
                    <div className="col-sm-6 col-md-4 mb-3">
                        <TextField label="Name" className="w-100" />
                    </div>
                    <div className="col-sm-6 col-md-4 mb-3">
                        <TextField label="Username" className="w-100" />
                    </div>
                    <div className="col-sm-6 col-md-4 mb-3">
                        <TextField label="Email" className="w-100" />
                    </div>
                    <div className="col-sm-6 col-md-4 mb-3">
                        <TextField label="Name" className="w-100" />
                    </div>
                    <div className="col-sm-6 col-md-4 mb-3">
                        <TextField label="Username" className="w-100" />
                    </div>
                    <div className="col-sm-6 col-md-4 mb-3">
                        <TextField label="Email" className="w-100" />
                    </div>
                </div>
                <div className="mt-3 d-flex justify-content-end">
                    <Button variant="contained" color="primary" className="me-2"><Add /> Add </Button>
                    <Button variant="contained" color="secondary" onClick={() => router.push("/users")}><Cancel /> Cancel </Button>
                </div>
            </form>
        </Dashboard>
    )
}

export default AddPage
