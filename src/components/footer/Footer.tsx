import { Box, IconButton } from "@mui/material"
import React, { useEffect, useState } from "react"
import { ReactComponent as HomeIcon } from "../../images/home.svg";
import { ReactComponent as TransactionIcon } from "../../images/Transaction.svg";
import { ReactComponent as PieChartIcon } from "../../images/Pie chart.svg";
import { ReactComponent as UserIcon } from "../../images/user.svg";
import AddIcon from '@mui/icons-material/Add';
import './Footer.css'
import { useLocation, useNavigate } from "react-router-dom";
const Footer=()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, SetActiveTab] = useState(location.pathname.substring(1).toUpperCase());
    const handleTabClick=(selectedTab:string)=>{
        navigate(selectedTab);
        SetActiveTab(selectedTab.toUpperCase());
    }
    useEffect(() => {
        console.log(location.pathname.substring(1));
        SetActiveTab(location.pathname.substring(1).toUpperCase());
    }, [location.pathname]);
    return (
        <>
        <Box sx={{ backgroundColor: 'white', padding: '2vh 0', width: '100%', position: 'fixed', bottom: 0 }}>
                    <Box className="flex space-between align-center" sx={{ padding: '1vh 5vw' }}>
                        <Box className="flex space-between align-center" sx={{ width: '35%', fontSize: '0.85rem' }}>
                            <div className={activeTab=="HOME"?"active-tab":"icon"}>
                                <IconButton onClick={()=>handleTabClick("home")}>
                                    <HomeIcon ></HomeIcon>
                                </IconButton>
                                <p className="icon-label">Home</p>
                            </div>
                            <div className={activeTab.includes("TRANSACTION")?"active-tab":"icon"}>
                                <IconButton onClick={()=>handleTabClick("home/transaction")}>
                                    <TransactionIcon ></TransactionIcon>
                                </IconButton>
                                <p className="icon-label">Transaction</p>
                            </div>
                        </Box>
                        <IconButton className="add-button"><AddIcon /></IconButton>
                        <Box className="flex space-between align-center " sx={{ width: '35%', fontSize: '0.85rem' }}>
                            <div className={activeTab.includes("BUDGET")?"active-tab":"icon"}>
                                <IconButton onClick={()=>handleTabClick("home/budget")}>
                                    <PieChartIcon ></PieChartIcon>
                                </IconButton>
                                <p className="icon-label">Budget</p>
                            </div>
                            <div className={activeTab.includes("PROFILE")?"active-tab":"icon"}> 
                                <IconButton onClick={()=>handleTabClick("home/profile")}>
                                    <UserIcon></UserIcon>
                                </IconButton>
                                <p className="icon-label">Profile</p>
                            </div>
                        </Box>
                    </Box>
                </Box>
        </>
    )
}

export default Footer;