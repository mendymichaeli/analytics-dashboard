import Chart from "../../components/Chart/Chart"
import FeaturedCard from "../../components/featuredCard/FeaturedCard"
import NewMembers from "../../components/NewMembers/NewMembers"
import LastTransactions from "../../components/LastTransaction/LastTransactions"
import "./Home.css"

export default function Home() {
    return (
        <div className="home">
            <div className="FeaturedCardInfo">
                <FeaturedCard />
            </div>
            <div className="chartInfo">
                <Chart />
            </div>
            <div className="usersInfo">
                <NewMembers className="usersInfoNewMembers" />
                <LastTransactions className="usersInfoLastTransactions" />
            </div>
        </div>
    )
}
