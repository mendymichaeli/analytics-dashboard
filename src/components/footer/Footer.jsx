import "./Footer.css"
import { Facebook, Twitter, Instagram, LinkedIn, GitHub, YouTube } from "@mui/icons-material"

export default function Footer() {


    return (
        <div className='footerContainer'>
            <div className="FooterInternetLinks">
                <div className="icon">
                    <Instagram />
                </div>
                <div className="icon">
                    <Facebook />
                </div>
                <div className="icon">
                    <Twitter />
                </div>
                <div className="icon">
                    <GitHub />
                </div>
                <div className="icon">
                    <LinkedIn />
                </div>
                <div className="icon"   >
                    <YouTube />
                </div>
            </div>
            <div className="footerCopyRight">
               <span>{new Date().getFullYear()} Mendy Michaeli &copy;</span>
            </div>

        </div>
    );
}
