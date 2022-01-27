import "./Navbar.css";
import { Message, Language, Settings, PowerSettingsNew } from '@mui/icons-material';

export default function Navbar() {
    return (
        <div className="navbar">
            <h1 className="navbarTitle">WD Technolegies LTD.</h1>
            <div className="navbarIcons">
                <div className="navbarIconsMessage icon">
                    <span className="alert">2</span>
                    <Message />
                </div>
                <div className="navbarIconsLanguage icon">
                    <span className="alert">3</span>
                    <Language />
                </div>
                <div className="navbarIconsSettings icon">
                    <Settings />
                </div>
                <div className="navbarIconsPowerSettingsNew icon">
                    <PowerSettingsNew />
                </div>
                <div className="navbarImgDiv">
                    <img className="navbarImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg/1024px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg" alt="" />
                </div>
            </div>

        </div>
    )
}
