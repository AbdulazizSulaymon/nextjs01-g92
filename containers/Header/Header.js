import React from 'react'
import Link from "next/link"
import HeaderWrapper from './HeaderWrapper'

const Header = () => {
    return (
        <HeaderWrapper className="shadow py-3">
            <div className="container">
                <ul className="d-flex m-0 p-0">
                    <li><Link href="/"><a className="btn me-2">Home</a></Link></li>
                    <li><Link href="/users"><a className="btn me-2">Users</a></Link></li>
                    <li><Link href="/todos"><a className="btn me-2">Todos</a></Link></li>
                </ul>
            </div>
        </HeaderWrapper>
    )
}

export default Header
