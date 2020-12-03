import React from "react";
import TextArea from "../CustomComponents/TextArea"
import Button from "../CustomComponents/Button"
import Input from "../CustomComponents/Input"
import Select from "../CustomComponents/Select"
import FilePicker from "../CustomComponents/FilePicker";
import { DataContext } from '../../contexts/DataContext'
import Grid from '@material-ui/core/Grid'


const ShopProfileForm = props => {
    const [state, setState] = React.useState({})


    const { countryList, businessTypes } = React.useContext(DataContext);
    const saveShopProfile = event => {
        event.preventDefault();
        console.log(state)

    }

    const onChange = obj => event => {
        event && console.log(`${event?.target?.id}: ${event?.target?.value}`)
        event && setState({ ...state, [event?.target?.id]: event?.target?.value })
        obj && setState({ ...state, ...obj })
    }

    const {
        name, type,
        address, phone,
        email, twitter,
        facebook, instagram,
        bio, city, country,
        whatsapp,
    } = state;



    return <form onSubmit={saveShopProfile}>
        <Grid container direction="row" spacing={5}>
            <Grid item xs={12}>
                <Grid container direction="row" spacing={5}>

                    <Grid item xs={12} sm={6} md={4}>
                        <Input id='name' value={name} onChange={onChange} type='text' placeholder="Enter shop name" label="Business/Shop name" required />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Select id='type' value={type} onChange={onChange} list={businessTypes} placeholder="Select onChange={onChange} business type" label="Business type" required />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Select id='country' value={country} onChange={onChange} list={countryList} placeholder="Select onChange={onChange} country" label="Country" required />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Input id='city' value={city} onChange={onChange} type='text' placeholder="Enter city name" label="City" required />
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Input id='address' value={address} onChange={onChange} type='text' placeholder="Enter Shop Address" label="Address" required />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={5} direction='row'>
                    <Grid item xs={12} sm={6}>
                        <Input id='phone' value={phone} onChange={onChange} type="tel" placeholder="Enter phone number" label="Business Phone" required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input id='email' value={email} onChange={onChange} type="email" placeholder="Enter Email address" label="Business email" required />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={5} direction='row'>
                    <Grid item xs={12} md={6}>
                        <TextArea id='bio' value={bio} onChange={onChange} placeholder="Enter shop bio" label="Shop bio" required rows={3} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {' .'}
                        <FilePicker id='file' />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={5} direction='row'>
                    <Grid item xs={12} sm={6} md={3}>
                        <Input id='instagram' value={instagram} onChange={onChange} placeholder="Enter Instagram username" label="Instagram" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Input id='facebook' value={facebook} onChange={onChange} placeholder="Enter Facebook username" label="Facebook" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Input id='twitter' value={twitter} onChange={onChange} placeholder="Enter Twitter username" label="Twitter" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Input id='whatsapp' value={whatsapp} onChange={onChange} placeholder="Enter Whatsapp number" type='tel' label="Whatsapp" />
                    </Grid>

                </Grid>
            </Grid>
            <Grid>
                <Button type="submit">
                    Create
                </Button>
            </Grid>

        </Grid>
    </form>
}

export default ShopProfileForm;