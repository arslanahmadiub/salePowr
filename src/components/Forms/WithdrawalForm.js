import React from "react";
//import styled from "styled-components";
import Grid from "@material-ui/core/Grid"
import Select from "../CustomComponents/Select"
import Input from "../CustomComponents/Input"
import Button from "../CustomComponents/Button"
import { Form } from 'antd'
import { DataContext } from "../../contexts/DataContext";

export default function WithdrawalForm({ type, externalFunction, ...props }) {

    const { countryList, bankList, mobileOperators } = React.useContext(DataContext)


    const processWidrawal = values => {
        console.log(values)
        alert("")
        //externalFunction(0)
    }
    return <Form onFinish={processWidrawal}>
        <Grid container direction="row" spacing={5}>
            <Grid item xs={12} sm={6}>
                <Select options={countryList} label="Country" placeholder="Select country" required />
            </Grid>
            {type === 'momo' && <Grid item xs={12} sm={6}>
                <Select options={mobileOperators} label="Momo Network" placeholder="Select network" required />
            </Grid>
            }
            {type === 'bank' && <Grid item xs={12} sm={6}>
                <Select options={bankList} label="Bank name" placeholder="Select bank" required />
            </Grid>
            }
            {type === 'bank' && <Grid item xs={12} sm={6}>
                <Input label="Bank account number" placeholder="Enter bank account number" required />
            </Grid>
            }
            {type === 'momo' && <Grid item xs={12} sm={6}>
                <Input label="Momo number" placeholder="Enter the  momo account number" required />
            </Grid>
            }
            {type === 'bank' && <Grid item xs={12} sm={6}>
                <Input label="Bank branch" placeholder="Enter bank branch" required />
            </Grid>
            }
            <Grid item xs={12}>
                <Button htmlType="submit">Add Wallet</Button>
            </Grid>

        </Grid>

    </Form>
}


