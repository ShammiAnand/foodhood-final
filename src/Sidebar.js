import { EmojiFlags, ExpandMoreOutlined } from '@mui/icons-material';
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useStateValue } from "./StateProvider";

function Sidebar() {

    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='sidebar'>
            <SidebarRow
                src={user.photoURL}
                title={user.displayName} />
            {/* <SidebarRow
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center" /> */}
            {/* <SidebarRow
                Icon={EmojiFlagsIcon}
                title="Pages" />
            <SidebarRow
                Icon={PeopleIcon}
                title="Friends" /> */}
            <SidebarRow
                Icon={PowerSettingsNewIcon}
                title="Log Out"
            />
            {/* <SidebarRow
                Icon={StorefrontIcon}
                title="My Hotels" /> */}
            {/* <SidebarRow
                Icon={VideoLibraryIcon}
                title="Videos" /> */}
            {/* <SidebarRow
                Icon={ExpandMoreOutlined}
                title="More" /> */}

        </div>
    )
}

export default Sidebar;