import React from 'react'
import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {CircularProgressbar} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={64} text={"64%"} strokeWidth={5}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$430</p>
            <p className="desc">The React package contains all the APIs necessary to define and use components.</p>
            <div className="summery">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive ">
                        <KeyboardArrowUpOutlinedIcon/>
                        <div className="resultAmount">$15.45k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownOutlinedIcon/>
                        <div className="resultAmount">$15.45k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon/>
                        <div className="resultAmount">$15.45k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured