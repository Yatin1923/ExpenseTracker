import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, styled } from "@mui/material"
import React, { useEffect, useState } from "react"
import './Home.css'
import ReactEcharts from "echarts-for-react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CustomSelect from "../../components/select/Select.tsx";
import IncomeImage from "../../images/Income.png";
import ExpenseImage from "../../images/Expense.png";
import { ReactComponent as HomeIcon } from "../../images/home.svg";
import { ReactComponent as TransactionIcon } from "../../images/Transaction.svg";
import { ReactComponent as PieChartIcon } from "../../images/Pie chart.svg";
import { ReactComponent as UserIcon } from "../../images/user.svg";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Transaction from "../../components/transaction/Transaction.tsx";
import { amountType } from "../utils/type/type.tsx";
import { useNavigate } from "react-router-dom";
const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const currentMonth = new Date(Date.now()).getMonth();


const Home = () => {
    let lastScrollTop = 0;
    // let isScrollingDown =true;
   
    const [activeChip, SetActiveChip] = useState("TODAY")
    const [activeTab, SetActiveTab] = useState("HOME")
    const [showChart, SetShowChart] = useState(true)
    const navigate = useNavigate();
    const handleTabClick=(selectedTab:string)=>{
        console.log(selectedTab)
        SetActiveTab(selectedTab.toUpperCase());
        navigate('/profile');
    }
    const handleChipClick = (event) => {
        SetActiveChip(event.target.textContent.toUpperCase());
    };
    const option = {
        color: 'rgb(139,20,255,0.24)',
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            show: false,
            boundaryGap: false,
            left: 0
        },
        yAxis: {
            type: 'value',
            show: false
        },
        grid: [{
            top: 10,
            left: 0,
            right: 0,
            bottom: 0,
            show: false,
            z: 0,
            containLabel: false,
            backgroundColor: 'rgba(0,0,0,0)',
            borderWidth: 1,
            borderColor: '#ccc',
        }],
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'line',
                smooth: true,
                showSymbol: false,
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(139, 80, 255, 0.24)' // Start color
                            },
                            {
                                offset: 1,
                                color: 'rgba(255, 255, 255, 1)' // End color (white with zero opacity)
                            }
                        ],
                    },
                },
                lineStyle: {
                    width: 8,
                    color: '#7F3DFF'
                }
            }
        ]
    };
    useEffect(()=>{
        const handleScroll = ()=>{
            const isScrollingDown = window.scrollY<lastScrollTop;
            lastScrollTop = window.scrollY;
            console.log(isScrollingDown,lastScrollTop);
            SetShowChart(isScrollingDown);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])
    return (
        <>
            <Box>
                {/* header */}
                <Box sx={{zIndex:100,backgroundColor:'white', backgroundImage: 'linear-gradient(rgb(255,246,229,1),rgb(248,237,216,0.35))', borderBottomLeftRadius: '10%', borderBottomRightRadius: '10%', padding: '1vh 5vw', paddingBottom: '4vh',position: 'sticky', top: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                        <IconButton>
                            <AccountCircleIcon style={{ color: '#7F3DFF', fontSize: '2rem' }}></AccountCircleIcon>
                        </IconButton>
                        <FormControl>
                            <CustomSelect options={months} defaultvalue={currentMonth}></CustomSelect>
                        </FormControl>
                        <IconButton>
                            <NotificationsIcon style={{ color: '#7F3DFF', fontSize: '2rem' }}></NotificationsIcon>
                        </IconButton>
                    </Box>
                    <Box sx={{ margin: '1.5vh 0' }}>
                        <span style={{ opacity: 0.4, fontSize: '0.8rem', marginBottom: '0px !important' }}>Account balance</span>
                        <h1 style={{ marginTop: '10px' }}>$9400</h1>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: 'space-between', gap: '3vw', marginTop: '4vh' }}>
                        <div className="income">
                            <img src={IncomeImage} alt="" />
                            <div>
                                <p>Income</p>
                                <h2>$5000</h2>
                            </div>
                        </div>
                        <div className="expense">
                            <img src={ExpenseImage} alt="" />
                            <div>
                                <p>Expense</p>
                                <h2>$1200</h2>
                            </div>

                        </div>
                    </Box>
                </Box>
                {/* Chart */}
                <Box className={showChart?"chart":"chart collapse"} sx={{ width: '100%', textAlign: 'left' }}>
                    <h3 style={{ padding: '1vh 5vw' }}>Spend Frequency</h3>
                    <ReactEcharts option={option} style={{ width: "100%", maxHeight: '200px' }} />
                    <Stack direction="row" spacing={0} sx={{ padding: '0 5vw', justifyContent: 'space-between' }}>
                        <Chip label="Today" className={activeChip == "TODAY" ? "period-chip-active" : "period-chip"} onClick={handleChipClick} />
                        <Chip label="Week" className={activeChip == "WEEK" ? "period-chip-active" : "period-chip"} onClick={handleChipClick} />
                        <Chip label="Month" className={activeChip == "MONTH" ? "period-chip-active" : "period-chip"} onClick={handleChipClick} />
                        <Chip label="Year" className={activeChip == "YEAR" ? "period-chip-active" : "period-chip"} onClick={handleChipClick} />
                    </Stack>
                </Box>
                {/* Recent Transaction */}
                <Box>
                    <Box sx={{ padding: '2vh 5vw', display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                        <h3 style={{ textAlign: 'left' }}>Recent Transaction</h3>
                        <Chip label="See All" className="see-all-chip" onClick={()=>handleTabClick("transaction")} />
                    </Box>
                    <Box sx={{padding:'0 5vw'}}>
                        <Transaction category="Shopping" amount={10} description={"Buy some grocery"} time={"10:00 AM"} type={amountType.EXPENSE}></Transaction>
                        <Transaction category="Shopping" amount={10} description={"Buy some grocery"} time={"10:00 AM"} type={amountType.EXPENSE}></Transaction>
                        <Transaction category="Shopping" amount={10} description={"Buy some grocery"} time={"10:00 AM"} type={amountType.EXPENSE}></Transaction>
                        <Transaction category="Shopping" amount={10} description={"Buy some grocery"} time={"10:00 AM"} type={amountType.EXPENSE}></Transaction>
                        <Transaction category="Shopping" amount={10} description={"Buy some grocery"} time={"10:00 AM"} type={amountType.EXPENSE}></Transaction>
                    </Box>
                </Box>
                {/* Footer */}
                <Box sx={{ backgroundColor: 'white', padding: '2vh 0', width: '100%', position: 'sticky', bottom: 0 }}>
                    <Box className="flex space-between align-center" sx={{ padding: '1vh 5vw' }}>
                        <Box className="flex space-between align-center" sx={{ width: '35%', fontSize: '0.85rem' }}>
                            <div className={activeTab=="HOME"?"active-tab":"icon"}>
                                <IconButton onClick={()=>handleTabClick("home")}>
                                    <HomeIcon ></HomeIcon>
                                </IconButton>
                                <p className="icon-label">Home</p>
                            </div>
                            <div className={activeTab=="TRANSACTION"?"active-tab":"icon"}>
                                <IconButton onClick={()=>handleTabClick("transaction")}>
                                    <TransactionIcon ></TransactionIcon>
                                </IconButton>
                                <p className="icon-label">Transaction</p>
                            </div>
                        </Box>
                        <IconButton className="add-button"><AddIcon /></IconButton>
                        <Box className="flex space-between align-center " sx={{ width: '35%', fontSize: '0.85rem' }}>
                            <div className={activeTab=="BUDGET"?"active-tab":"icon"}>
                                <IconButton onClick={()=>handleTabClick("budget")}>
                                    <PieChartIcon ></PieChartIcon>
                                </IconButton>
                                <p className="icon-label">Budget</p>
                            </div>
                            <div className={activeTab=="PROFILE"?"active-tab":"icon"}> 
                                <IconButton onClick={()=>handleTabClick("profile")}>
                                    <UserIcon></UserIcon>
                                </IconButton>
                                <p className="icon-label">Profile</p>
                            </div>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}



export default Home