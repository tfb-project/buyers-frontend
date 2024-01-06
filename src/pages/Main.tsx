import axios from "axios";
import React, {useEffect, useState} from "react";
import {Button, Card} from '@gravity-ui/uikit';

import Draggable from 'react-draggable';


export interface Buyer {
    id: number,
    name: string,
    link: string,
}

const Main = () => {
    const [buyers, setBuyers] = useState<Buyer[]>([])
    const [buyerId, setBuyerId] = useState<number>(0)
    const [coords, setCoords] = useState({x: 0, y: 0});
    useEffect(() => {
        if (buyers.length > 0) return
        axios.get('https://toadabroad.kfirsov.com/api/buyers').then(({data: buyers}: { data: { buyers: Buyer[] } }) => {
            setBuyers(buyers.buyers)
        }).catch((err) => {
            console.log(err)
        })
    })

    const trackMouse = (event: any) => {
        setCoords({
            x: event.clientX,
            y: event.clientY,
        });
    };

    const onclk = (event: any) => {
        setBuyerId((buyerId + 1) % buyers.length);
    };

    const startDrag = (e: any) => {
        window.addEventListener('mousemove', trackMouse);
        console.log('start')
    }
    const stopDrag = (e: any) => {
        window.removeEventListener('mousemove', trackMouse);
        setCoords({
            x: 0,
            y: 0,

        })
        console.log('stop')
    }


    if (buyers.length === 0) return <div>Loading...</div>

    return (
        <div className="h-dvh flex justify-center items-center">
            <div className="flex flex-col gap-10">
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