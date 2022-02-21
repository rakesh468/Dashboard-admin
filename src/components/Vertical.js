import React from 'react';
import Divider from '@mui/material/Divider';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TableViewIcon from '@mui/icons-material/TableView';
import PagesIcon from '@mui/icons-material/Pages';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';


export function Vertical() {
    const col = { color: "white" };
    return (            //vertical menu bar for medium and large screen
        <div className="vertical">

            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="/" style={col}><AdminPanelSettingsIcon />SB ADMIN</a><Divider />
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" style={col}><DashboardIcon/>Dashboard</a><Divider />
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" style={col}>< GridViewIcon/>Component</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="/" style={col}><SettingsApplicationsIcon/>Utilities</a><Divider />
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" style={col}><PagesIcon/>Pages</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" style={col}><EqualizerIcon/>Chats</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" style={col}><TableViewIcon/>Table</a>
                </li>
            </ul>
        </div>
    );
}