import { Box } from "@mui/material"
import React from "react"
import ShoppingImage from '../../images/Shopping.png'
import FoodImage from '../../images/Food.png'
import SubscriptionImage from '../../images/Subscription.png'
import SalaryImage from '../../images/Salary.png'
import TransportationImage from '../../images/Transportation.png'
import {amountType} from '../../pages/utils/type/type.tsx'
import './Transaction.css'
const Transaction = ({ category, amount, time, description, type }) => {
    let imageUrl: string = "";
    
    switch (category.toUpperCase()) {
        case "FOOD": imageUrl = FoodImage; break;
        case "SHOPPING": imageUrl = ShoppingImage; break;
        case "SUBSCRIPTION": imageUrl = SubscriptionImage; break;
        case "SALARY": imageUrl = SalaryImage; break;
        case "TRANSPORTATION": imageUrl = TransportationImage; break;
    }
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between',margin:'1vh 0' }}>
                <Box sx={{display: 'flex', gap: '3vw'}}>
                    <img src={imageUrl} alt="" />
                    <Box className="transaction-content" sx={{  }}>
                        <h4>{category}</h4>
                        <p style={{ opacity: 0.6 }}>{description}</p>
                    </Box>
                </Box>
                <Box className="transaction-content" sx={{alignItems:'end'}}>
                    <h4 style={{ color: 'red', textAlign: 'right' }}>{type === amountType.EXPENSE?"-":""}${amount}</h4>
                    <p>{time}</p>
                </Box>
            </Box>
        </>
    )
}
export default Transaction