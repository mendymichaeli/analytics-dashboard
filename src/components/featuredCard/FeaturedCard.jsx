import "./FeaturedCard.css"
import {ArrowUpward, ArrowDownward} from "@mui/icons-material"

export default function FeaturedCard() {
    return (
        <div className='FeaturedCardContainer'>
            <div className="cardInfo">
                <h2 className="cardInfoTitle">Revenue</h2>
                <div className="cardInfoAmount">
                    <span className=" cardInfoAmountNumber">$ 4350.20</span>
                    <span className=" cardInfoAmountPresent">+11.5% <ArrowUpward className="arrow"/></span>
                </div>
                <p className="cardInfoCompare">Compare to last month</p>
            </div>
            <div className="cardInfo">
                <h2 className="cardInfoTitle">Sales</h2>
                <div className="cardInfoAmount">
                    <span className=" cardInfoAmountNumber">$ 15,450.20</span>
                    <span className=" cardInfoAmountPresent">-7.5% <ArrowDownward className="arrow negative"/></span>
                </div>
                <p className="cardInfoCompare">Compare to last month</p>
            </div>
            <div className="cardInfo">
                <h2 className="cardInfoTitle">Cost</h2>
                <div className="cardInfoAmount">
                    <span className=" cardInfoAmountNumber">$ 54,950.20</span>
                    <span className=" cardInfoAmountPresent">-2.5% <ArrowDownward className="arrow negative"/></span>
                </div>
                <p className="cardInfoCompare">Compare to last month</p>
            </div>
        </div>
    );
}
