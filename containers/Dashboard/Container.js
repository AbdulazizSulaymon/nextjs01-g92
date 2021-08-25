import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Album, Group, Home, LowPriority, Menu, Photo } from '@material-ui/icons';
import InboxIcon from '@material-ui/icons/Inbox';
import { Slide } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';
import Link from "next/link";
import { toggleSidebar } from '../../redux/actions/globalActions';
import ContainerWrapper from './ContainerWrapper';

const menus = [
    { to: "/", icon: <Home />, title: "Home" },
    { to: "/users", icon: <Group />, title: "Users" },
    { to: "/todos", icon: <LowPriority />, title: "Todos" },
    { to: "/photos", icon: <Photo />, title: "Photos" },
    { to: "/posts", icon: <InboxIcon />, title: "Posts" },
    { to: "/albums", icon: <Album />, title: "Albums" },
]

const Container = ({ children }) => {
    const isSidebarShow = useSelector(state => state.global.isSidebarShow);

    return (
        <ContainerWrapper>
            <div className={`sidebar ${isSidebarShow ? "show" : ""}`}>
                <h2>Menu</h2>
                <List>
                    {menus.map((v, i) => <Link href={v.to}>
                        <a>
                            <Slide delay={100 * i}>
                                <ListItem button>
                                    <ListItemIcon>{v.icon}</ListItemIcon>
                                    <ListItemText primary={v.title} />
                                </ListItem>
                            </Slide>
                        </a>
                    </Link>)}
                </List>
            </div>

            <div className="rightside">
                <header className="shadow p-3 mb-3">
                    <Button onClick={toggleSidebar}>
                        <Menu />
                    </Button>
                    <img src={"/vercel.svg"} className="logo me-3" alt="logo" />
                </header>
                <div className="content">
                    {children}
                </div>
            </div>

        </ContainerWrapper>
    )
}

export default Container;
