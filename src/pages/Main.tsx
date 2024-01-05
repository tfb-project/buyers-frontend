import axios from "axios";
import {useEffect, useState} from "react";

export interface Buyer {
    id: number,
    name: string,
    link: string,
}

const Main = () => {
    const [buyers, setBuyers] = useState<Buyer[]>([])
    useEffect(() => {
        if (buyers.length > 0) return
        axios.get('https://education.kfirsov.com/tfb/buyers').then(({data: buyers}: {data: {buyers: Buyer[]}}) => {
            setBuyers(buyers.buyers)
        }).catch((err) => {
            console.log(err)
        })
    })


    return (
        <div>
            {
                buyers.map((buyer: Buyer) => {
                    return (
                        <div key={buyer.id}>
                            <p>id: {buyer.id}</p>
                            <p>name: {buyer.name}</p>
                            <a href={buyer.link}>link</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main;