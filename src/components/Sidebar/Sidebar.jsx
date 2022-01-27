import "./Sidebar.css"  
import {
    HomeOutlined,
    InsightsOutlined,
    MonetizationOnOutlined,
    AssignmentIndOutlined,
    CategoryOutlined,
    AccountBalanceOutlined,
    EmailOutlined,
    ThumbUpAltOutlined,
    RateReviewOutlined,
    ManageAccountsOutlined,
    AccountTreeOutlined,
    SummarizeOutlined
} from "@mui/icons-material"



export default function Sidebar() {
    return (
        <div className="sidebar">

            <div className="dashboardList">
                <span className="ListTitle">Dashboard</span>
                <ul className="ListGroup">
                    <li className="listName"><HomeOutlined  className="menuIcon"/> Home</li>
                    <li className="listName"><InsightsOutlined className="menuIcon"/> Analytics</li>
                    <li className="listName"> <MonetizationOnOutlined className="menuIcon"/>    Sales</li>
                </ul>
            </div>
            <div className="quickMenuList">
                <span className="ListTitle">Quick Menu</span>
                <ul className="ListGroup">
                    <li className="listName"><AssignmentIndOutlined className="menuIcon"/> Users</li>
                    <li className="listName"><CategoryOutlined className="menuIcon"/> Products</li>
                    <li className="listName"><AccountBalanceOutlined className="menuIcon"/> Transactions</li>
                </ul>
            </div>
            <div className="notifictionsList">
                <span className="ListTitle">Notifictions</span>
                <ul className="ListGroup">
                    <li className="listName"> <EmailOutlined className="menuIcon"/> Mail</li>
                    <li className="listName"> <ThumbUpAltOutlined className="menuIcon"/> Feedback</li>
                    <li className="listName"><RateReviewOutlined className="menuIcon"/> Messages</li>
                </ul>
            </div>
            <div className="staffList">
                <span className="ListTitle">Staff</span>
                <ul className="ListGroup">
                    <li className="listName"><ManageAccountsOutlined className="menuIcon"/> Manage</li>
                    <li className="listName"><AccountTreeOutlined className="menuIcon"/> Analytics</li>
                    <li className="listName"><SummarizeOutlined className="menuIcon"/> Reports</li>
                </ul>
            </div>

        </div>
    )
}
