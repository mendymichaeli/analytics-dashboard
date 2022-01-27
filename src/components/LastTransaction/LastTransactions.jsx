import "./LastTransactions.css"

export default function LastTransactions() {
    return (
        <div className="LastTransactions" >
            <h1 className="LastTransactionsTitle">Last Transactions</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="singelTansaction">
                        <th><img src="https://media.vanityfair.com/photos/5f4d3a7e1e10df7a77868a63/1:1/w_2143,h_2143,c_limit/BradPitt-GettyImages-1158782727.jpg" alt="" /></th>
                        <td>30/12/21</td>
                        <td>$1,400</td>
                        <td><button className="btn approved">Approved</button></td>
                    </tr>
                    <tr  className="singelTansaction">
                        <th><img src="https://nypost.com/wp-content/uploads/sites/2/2021/07/brad-pitt.jpg" alt="" /></th>
                        <td>12/2/21</td>
                        <td>$2,520</td>
                        <td><button className="btn pending">Pending</button></td>
                    </tr>
                    <tr  className="singelTansaction">
                        <th><img src="https://www.thelist.com/img/gallery/the-stunning-transformation-of-brad-pitt/intro-1641566784.jpg" alt="" /></th>
                        <td>12/1/21</td>
                        <td>$1,500</td>
                        <td><button className="btn rejected">Rejected</button></td>
                    </tr>
                    <tr className="singelTansaction">
                        <th><img src="https://i2-prod.mirror.co.uk/incoming/article25396155.ece/ALTERNATES/s1200c/2_Eternals-photocall-in-Rome.jpg" alt="" /></th>
                        <td>12/10/21</td>
                        <td>$1,750</td>
                        <td><button className="btn approved">Approved</button></td>
                    </tr>
                    <tr  className="singelTansaction">
                        <th><img src="https://zitoc.com/wp-content/uploads/2020/07/Angelina-Jolie-5.jpg" alt="" /></th>
                        <td>12/1/22</td>
                        <td>$1,100</td>
                        <td><button className="btn pending">Pending</button></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
}
