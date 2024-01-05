import axios from "axios";
import {useEffect, useState} from "react";

axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';

const Main = () => {
    const [buyers, setBuyers] = useState([])
    useEffect(() => {
        if (buyers.length > 0) return
        axios.get('http://158.160.139.191:50051/buyers', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                // 'Content-Type': 'application/json',
            },
            withCredentials: false,
        }).then(({data: buyers}) => {
            console.log(buyers)
            setBuyers(buyers)
        }).catch((err) => {
            console.log(err)
        })
    })

    return (
        <div>
            {buyers.map((buyer: any) => {
                return (
                    <div>
                        <p>{buyer.name}</p>
                        <p>{buyer.email}</p>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Main;