import React from 'react';
import { Box, Typography, Avatar, IconButton, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EditIcon from '@mui/icons-material/Edit';
import Tejas from "../../images/Tejas.jpg"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const username = "Tejas Bariya";
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                padding: '20px',
                backgroundColor: '#F8F8F8',
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '10px',
                    padding: '20px',
                }}
            >
                <Box sx={{ position: 'relative' }}>
                    <Avatar
                        src={Tejas} // Replace with the path to the user's image
                        sx={{
                            width: '100px',
                            height: '100px',
                            border: '4px solid #7F3DFF',
                        }}
                    />
                    <IconButton
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            backgroundColor: '#FFFFFF',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            borderRadius: '50%',
                            padding: '5px',
                        }}
                    >
                        <EditIcon sx={{ color: '#7F3DFF' }} />
                    </IconButton>
                </Box>
                <Typography
                    variant="h6"
                    sx={{ marginTop: '10px', fontWeight: 'bold' }}
                >
                    {username}
                </Typography>
            </Box>

            <List sx={{ marginTop: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon
                            sx={{
                                backgroundColor: '#F3EFFF',
                                borderRadius: '12px',
                                minWidth: '40px',
                                padding: '8px',
                                paddingRight:'initial',
                                marginRight: '16px',
                            }}
                        >
                            <AccountCircleIcon sx={{ color: '#7F3DFF' }} />
                        </ListItemIcon>
                        <ListItemText primary="Account" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton  onClick={()=>{navigate('/settings')}}>
                        <ListItemIcon
                            sx={{
                                backgroundColor: '#F3EFFF',
                                borderRadius: '12px',
                                minWidth: '40px',
                                padding: '8px',
                                paddingRight:'initial',
                                marginRight: '16px',
                            }}
                        >
                            <SettingsIcon sx={{ color: '#7F3DFF' }} />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon
                            sx={{
                                backgroundColor: '#F3EFFF',
                                borderRadius: '12px',
                                minWidth: '40px',
                                padding: '8px',
                                paddingRight:'initial',
                                marginRight: '16px',
                            }}
                        >
                            <CloudUploadIcon sx={{ color: '#7F3DFF' }} />
                        </ListItemIcon>
                        <ListItemText primary="Export Data" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon
                            sx={{
                                backgroundColor: '#FFEDED',
                                borderRadius: '12px',
                                minWidth: '40px',
                                padding: '8px',
                                paddingRight:'initial',
                                marginRight: '16px',
                            }}
                        >
                            <ExitToAppIcon sx={{ color: '#FF5353' }} />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};

export default Profile;
