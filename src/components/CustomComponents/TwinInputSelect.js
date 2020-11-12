import { Input, Select } from 'antd';
import React from 'react'


const { Option } = Select


export default function TwinInputSelect(props) {
    const [data, setData] = React.useState(null);

    const getSelection = (item) => {
        setData({ ...data, prefix: item });
    }

    React.useEffect(() => {
        if (props.onChange != null) props.onChange(data)
    }, [data, props])
    return <Input.Group>
        <Select defaultValue={props && props.list && props.list[0]} onChange={getSelection}>
            {
                props && props.list && props.list.map(option => (
                    <Option key={option}>{option}</Option>
                ))
            }
        </Select>
        <Input placeholder={props.placeholder || ''} required={props.required} type={props.type || 'text'} onChange={(event) => setData({ ...data, value: event.target.value })} />
    </Input.Group>
}
