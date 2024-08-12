import React from 'react'
import { ReactComponent as FilterIcon } from '../../images/filter.svg';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import './TransactionPage.css'
import CustomSelect from "../../components/select/Select.tsx";
import { Box, Button, IconButton } from '@mui/material';
import { TransactionModel } from '../../components/transactionComponent/TransactionModel.ts';
import { amountType } from '../utils/type/type.tsx';
const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const currentMonth = new Date(Date.now()).getMonth();

const Transaction = () => {
    const transaction:TransactionModel[]=[
        {amount:10,category:"Shopping",date:new Date(Date.now()),description:"",type:amountType.EXPENSE},
        {amount:10,category:"Shopping",date:new Date(new Date(Date.now()).setDate(2)),description:"",type:amountType.EXPENSE},
        {amount:10,category:"Shopping",date:new Date(new Date(Date.now()).setDate(2)),description:"",type:amountType.EXPENSE},
        {amount:10,category:"Shopping",date:new Date(new Date(Date.now()).setDate(2)),description:"",type:amountType.EXPENSE},
        {amount:10,category:"Shopping",date:new Date(new Date(Date.now()).setDate(12)),description:"",type:amountType.EXPENSE},
        {amount:10,category:"Shopping",date:new Date(Date.now()),description:"",type:amountType.EXPENSE},
    ]
    
    const groupedByDay:Map<number,TransactionModel[]|undefined> = transaction.reduce((acc,current)=>{
        const day = current.date.getDay();
        // if (!acc[day]) {
        //     acc[day] = [];
        // }
        let temp :TransactionModel[]= acc.get(day)??[];
        temp?.push(current);
        acc.set(day,temp);
        return acc;
    },new Map<number,TransactionModel[]>);
    console.log(groupedByDay);
    return (
        <>
        <Box sx={{padding:'2vh 4vw'}}>
            <Box sx={{ display: 'flex',justifyContent:'space-between' }}>
                <CustomSelect style={{ border: '1px solid rgb(207 207 235)', borderRadius: '100vw' }} options={months} defaultvalue={currentMonth}></CustomSelect>
                <IconButton>
                    <FilterIcon></FilterIcon>
                </IconButton>
            </Box>
            <br />
            <Box>
                <Button style={{backgroundColor:"#EEE5FF",borderRadius:'2vw',textTransform:'none', width:'100%',justifyContent:'space-between',padding:'1vh 4vw' }}>
                    <p>See your financial report</p><ArrowForwardIosRoundedIcon fontSize='small' />
                </Button>
            </Box>
            <Box>
                {/* {groupedByDay.forEach(day=>{
                    day?.forEach(transaction=>{
                        <Transaction key={transaction.amount} ></Transaction>
                    })
                })} */}
            </Box>
        </Box>

        </>

    );
}

export default Transaction;
