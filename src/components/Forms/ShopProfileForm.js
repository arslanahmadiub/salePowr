import React from "react";
import TextArea from "../CustomComponents/TextArea"
import Button from "../CustomComponents/Button"
import Input from "../CustomComponents/Input"
import Select from "../CustomComponents/Select"
import FilePicker from "../CustomComponents/FilePicker";
import { DataContext } from '../../contexts/DataContext'
import { Col, Row, Form } from "antd";

const ShopProfileForm = props => {


    const { countryList, businessTypes } = React.useContext(DataContext);

    // const uploadFile = event => {
    //     event.preventDefault();
    // }




    const saveShopProfile = event => {
        event.preventDefault();
        event.stopPropagation();

    }


    return <Form onFinish={saveShopProfile}>


        <Row gutter={[8, 24]}>

            <Col span={{ xs: 24, sm: 12, md: 8 }} >
                <Form.Item>
                    <Input placeholder="Enter shop name" label="Business/Shop name" required />
                </Form.Item>
            </Col>

            <Col span={{ xs: 24, sm: 12, md: 8 }} >
                <Form.Item>
                    <Select list={businessTypes} placeholder="Select business type" label="Business type" required />
                </Form.Item>
            </Col>

            <Col span={{ xs: 24, sm: 12, md: 8 }}>
                <Form.Item>
                    <Select list={countryList} placeholder="Select country" label="Country" required />
                </Form.Item>
            </Col>

            <Col span={{ xs: 24, sm: 12, md: 8, }} >
                <Form.Item>
                    <Input placeholder="Enter city name" label="City" required />
                </Form.Item>
            </Col>

            <Col span={{ xs: 24, sm: 12, md: 16, }}>
                <Form.Item>
                    <Input placeholder="Enter Shop Address" label="Address" required />
                </Form.Item>
            </Col>

        </Row>

        <Row gutter={[8, 24]}>
            <Col span={{ xs: 24, sm: 10 }}>
                <Input type="tel" placeholder="Enter phone number" label="Business Phone" required />
            </Col>
            <Col span={{ xs: 24, sm: 14 }}>
                <Input type="email" placeholder="Enter Email address" label="Business email" required />
            </Col>
            <Col span={{ xs: 24, sm: 14 }}>
                <TextArea placeholder="Enter shop bio" label="Shop bio" required rows={3} />
            </Col>
            <Col span={{ xs: 24, sm: 10 }}>
                {' .'}
                <FilePicker />
            </Col>
        </Row>

        <Row gutter={[8, 24]}>

            <Col span={{ xs: 24, sm: 12, md: 6 }}>
                <Form.Item>
                    <Input placeholder="Enter username" label="Instagram" />
                </Form.Item>
            </Col>
            <Col span={{ xs: 24, sm: 12, md: 6 }}>
                <Form.Item>
                    <Input placeholder="Enter username" label="Facebook" />
                </Form.Item>
            </Col>
            <Col span={{ xs: 24, sm: 12, md: 6 }}>
                <Form.Item>
                    <Input placeholder="Enter username" label="Twitter" />
                </Form.Item>
            </Col>
            <Col span={{ xs: 24, sm: 12, md: 6 }}>
                <Form.Item>
                    <Input placeholder="Enter username" label="Whatsapp" />
                </Form.Item>
            </Col>

        </Row>

        <Row>
            <Col>
                <Form.Item>
                    <Button htmlType="submit" block>
                        Create
                </Button>
                </Form.Item>
            </Col>
        </Row>


    </Form>
}

export default ShopProfileForm;