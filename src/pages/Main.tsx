import axios from "axios";
import React, {useEffect, useState} from "react";
import {Button, Table, withTableSelection} from '@gravity-ui/uikit';
import CustomTable from "./CustomTable";

const SubmitButton = <Button view="action" size="l"/>;

export interface Buyer {
    id: number,
    name: string,
    link: string,
}

const Main = () => {
    const [buyers, setBuyers] = useState<Buyer[]>([])
    useEffect(() => {
        if (buyers.length > 0) return
        axios.get('https://education.kfirsov.com/tfb/buyers').then(({data: buyers}: { data: { buyers: Buyer[] } }) => {
            setBuyers(buyers.buyers)
        }).catch((err) => {
            console.log(err)
        })
    })

    // for table
    const MyTable = withTableSelection(Table);
    const columns = [
        {id: 'Имя'},
        {id: 'Ссылка'},
    ];
    const [selectedIds, setSelectedIds] = useState<string[]>(["1"]);
    const data = [];
    for (let buyer of buyers) {
        data.push({"Имя": buyer.name, "Ссылка": buyer.link})
    }


    return (
        <div className="w-full flex justify-center items-center">
            <MyTable
                 data={data}
                 columns={columns}
                 selectedIds={selectedIds}
                 onSelectionChange={setSelectedIds}
            />
        </div>
    )
}

export default Main;