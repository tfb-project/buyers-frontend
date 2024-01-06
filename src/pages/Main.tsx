import axios from "axios";
import React, {useEffect, useState} from "react";
import {Button, Card, Text, Loader} from '@gravity-ui/uikit';


export interface Buyer {
    id: number,
    name: string,
    link: string,
}

const Main = () => {
    const [buyers, setBuyers] = useState<Buyer[]>([])
    const [buyerId, setBuyerId] = useState<number>(0)
    useEffect(() => {
        if (buyers.length > 0) return
        axios.get('https://toadabroad.kfirsov.com/api/buyers').then(({data: buyers}: { data: { buyers: Buyer[] } }) => {
            setBuyers(buyers.buyers)
        }).catch((err) => {
            console.log(err)
        })
    })

    const onclk = (event: any) => {
        setBuyerId((buyerId + 1) % buyers.length);
    };

    if (buyers.length === 0) return <div className="h-dvh flex justify-center items-center"><Loader size="m" /></div>

    return (
        <div className="h-dvh flex justify-center items-center">
            <div className="flex flex-col gap-10">
                <div className="flex justify-center items-center gap-10">
                    <img className="rounded-t-[7px] max-w-20"
                         src="./logo512.jpg" alt="" draggable={false}/>
                    <Text variant="display-3">Toad Abroad</Text>
                </div>
                <div className="flex justify-center items-center">
                    <div className="handle">
                        <Card className="text-center">
                            <img className="rounded-t-[7px] max-w-xl"
                                 src="https://mygardenia.ru/uploads/pers1.jpg" alt="" draggable={false}/>
                            <p>{buyers[buyerId].name}</p>
                            <p>{buyers[buyerId].link}</p>
                        </Card>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <Button view="outlined-info" size="l" onClick={onclk}>Дальше</Button>
                </div>
            </div>
        </div>

    )
}

export default Main;