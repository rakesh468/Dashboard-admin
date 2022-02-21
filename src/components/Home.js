import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export function Home() {



    return (
        <div className="dashboard">

            <div className="search">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="search"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2" />
                    <InputGroup.Text id="basic-addon2"><SearchIcon /></InputGroup.Text>
                </InputGroup>

            </div>
            <div className="badgegroup">
                <div className="badge">
                    <Badge badgeContent={4} color="error">
                        <NotificationsNoneIcon color="action" />
                    </Badge>
                </div>
                <div className="badge">
                    <Badge badgeContent={4} color="error">
                        <MailIcon color="action" />
                    </Badge>
                </div>
                <div className="avatar">
                    <Avatar src="/broken-image.jpg" />
                </div>
            </div>
        </div>
    );
}