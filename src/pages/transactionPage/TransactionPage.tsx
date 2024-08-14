import React from 'react'
import Transaction from '../../components/transactionComponent/Transaction.tsx';
import { ReactComponent as FilterIcon } from '../../images/filter.svg';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import './TransactionPage.css'
import CustomSelect from "../../components/select/Select.tsx";
import { Box, Button, IconButton } from '@mui/material';
import { TransactionModel } from '../../components/transactionComponent/TransactionModel.ts';
import { amountType } from '../utils/type/type.tsx';
import formatCustomDate from '../../Utilities/dateFormater.tsx';
const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const currentMonth = new Date(Date.now()).getMonth();

const TransactionPage = () => {
    const transaction: TransactionModel[] = [
        { amount: 10, category: "Shopping", date: new Date(Date.now()), description: "", type: amountType.EXPENSE },
        { amount: 10, category: "Shopping", date: new Date(new Date(Date.now()).setDate(2)), description: "", type: amountType.EXPENSE },
        { amount: 10, category: "Shopping", date: new Date(new Date(Date.now()).setDate(2)), description: "", type: amountType.EXPENSE },
        { amount: 10, category: "Shopping", date: new Date(new Date(Date.now()).setDate(2)), description: "", type: amountType.EXPENSE },
        { amount: 10, category: "Shopping", date: new Date(new Date(Date.now()).setDate(11)), description: "", type: amountType.EXPENSE },
        { amount: 10, category: "Shopping", date: new Date(Date.now()), description: "", type: amountType.EXPENSE },
    ]

    let groupedByDay: Map<number, TransactionModel[]> = transaction.reduce((acc, current) => {
        const date = current.date.getDate();
        let temp: TransactionModel[] = acc.get(date) ?? [];
        temp?.push(current);
        acc.set(date, temp);
        return acc;
    }, new Map<number, TransactionModel[]>);
    groupedByDay  = new Map([...groupedByDay.entries()].sort((a,b)=>b[0]-a[0]))
    return (
        <>
            <Box sx={{ padding: '2vh 4vw' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CustomSelect style={{ border: '1px solid rgb(207 207 235)', borderRadius: '100vw' }} options={months} defaultvalue={currentMonth}></CustomSelect>
                    <IconButton>
                        <FilterIcon></FilterIcon>
                    </IconButton>
                </Box>
                <br />
                <Box>
                    <Button style={{ backgroundColor: "#EEE5FF", borderRadius: '2vw', textTransform: 'none', width: '100%', justifyContent: 'space-between', padding: '1vh 4vw' }}>
                        <p>See your financial report</p><ArrowForwardIosRoundedIcon fontSize='small' />
                    </Button>
                </Box>
                <br />
                <Box>
                    {[...groupedByDay.values()].map((day, index) => (
                            <React.Fragment key={index}>
                            <h3 style={{textAlign:'left'}}>{formatCustomDate(day[0].date.toDateString())}</h3>
                            {day?.map((transaction,index)=>(
                                <Transaction key={index} amount={transaction.amount} category={transaction.category} description={transaction.description} type={transaction.type} date={transaction.date}></Transaction>
                            ))}
                            </React.Fragment>

                    ))}
                </Box>
            </Box>

        </>

    );
}

export default TransactionPage;
