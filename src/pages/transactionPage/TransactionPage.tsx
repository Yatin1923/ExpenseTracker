import React from 'react'
import { ReactComponent as FilterIcon } from '../../images/filter.svg';
import './TransactionPage.css'
import CustomSelect from "../../components/select/Select.tsx";
const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const currentMonth = new Date(Date.now()).getMonth();

const Transaction = () => {
    return (
        <>
            <h1>Transaction Page</h1>
            <CustomSelect style={{border:'1px solid rgb(207 207 235)',borderRadius:'100vw'}} options={months} defaultvalue={currentMonth}></CustomSelect>
        </>

    );
}

export default Transaction;
