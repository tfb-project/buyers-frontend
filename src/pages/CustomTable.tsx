import {Table, withTableActions, withTableSelection} from '@gravity-ui/uikit';
import {useState} from "react";

const MyTable = withTableSelection(Table);
const data = [
    {id: 1, text: 'Hello'},
    {id: 2, text: 'World'},
];
const columns = [
    {id: 'Имя'},
    {id: 'Ссылка'},
];
const CustomTable = () => {
    const [selectedIds, setSelectedIds] = useState<string[]>(["1"]);
    return <MyTable
        data={data}
        columns={columns}
        selectedIds={selectedIds}
        onSelectionChange={setSelectedIds}
    />
};

export default CustomTable