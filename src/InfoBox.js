
import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css';

function Infobox({ title, cases, isRed, active, total, ...props }) {
    return (
        <Card 
        onClick={props.onClick}
        className={`infoBox ${active && 'infoBox-selected'} ${isRed && 'infoBox-red'}`}>
            <CardContent>
                {/* Title */}
                <Typography className="infoBox_title" color="textSecondary" >{title}</Typography>             

                {/* No of cases */}
                <h2 className={`infoBox_cases ${!isRed && "infoBox_cases-green"}`}>{cases}</h2>

                {/* Total */}
                <Typography className="infoBox_total" color="textSecondary">
                    {total} Total
                </Typography>

            </CardContent>
        </Card>
    )
}

export default Infobox
