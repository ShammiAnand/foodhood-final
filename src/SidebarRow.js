import React from 'react'
import './SidebarRow.css'
import { Avatar, IconButton } from "@mui/material";


function SidebarRow({ src, Icon, title }) {
    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src} />}
            {Icon && <Icon onClick={refreshPage} />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow