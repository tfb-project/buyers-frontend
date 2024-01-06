import axios from "axios";
import React, {useEffect, useState} from "react";
import {Card} from '@gravity-ui/uikit';

import Draggable from 'react-draggable';


export interface Buyer {
    id: number,
    name: string,
    link: string,
}

const Main = () => {
    const [buyers, setBuyers] = useState<Buyer[]>([])
    const [coords, setCoords] = useState({x: 0, y: 0});
    useEffect(() => {
        if (buyers.length > 0) return
        axios.get('https://education.kfirsov.com/tfb/buyers').then(({data: buyers}: { data: { buyers: Buyer[] } }) => {
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
            <Draggable
                defaultPosition={{x: 0, y: 0}}
                handle=".handle"
                scale={1}
                onStart={() => console.log('sta')}
                onDrag={ev => console.log(ev)}
            >
                <div className="handle">
                    <Card className="text-center">
                        <img className="rounded-t-[7px]"
                             src="./fiz.png" alt="" draggable={false}/>
                        <p>{buyers[0].name}</p>
                        <p>{buyers[0].link}</p>
                    </Card>
                </div>
            </Draggable>

        </div>
    )
}

export default Main;