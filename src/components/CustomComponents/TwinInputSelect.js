import React from 'react'
import { Input, Select, } from 'antd';

const { Option } = Select

const styles = {
    display: 'inline-block',
}


export default function TwinInputSelect({ placeholder, onChange, required, id, value, list, ...props }) {
    const [data, setData] = React.useState(null);

    const getSelection = (item) => {
        setData({ ...data, prefix: item });
    }

    React.useEffect(() => {
        onChange && onChange(data)
    }, [data, onChange])

    return <Input.Group compact size="large" style={{ width: '100%' }}>
        <Select style={{ borderRadius: '5px' }} defaultValue={list && list[0]} onChange={getSelection}>
            {
                list && list.map(option => (
                    <Option key={option} value={option}>{option}</Option>
                ))
            }
        </Select>
        <Input style={{ maxWidth: '70%', borderRadius: '5px' }} placeholder={placeholder || ''} required={required} onChange={(event) => setData({ ...data, value: event.target.value })} />
    </Input.Group>
}
