import { ExitToApp } from '@material-ui/icons'
import React from 'react'
import Styled from "styled-components"
import { AuthContext } from '../../contexts/AuthContext'
import Authentication from '../../Helpers/Authentication'


const Text = Styled.div`
    font-size: 16px;
    color: #979FAA;
    line-heigt: 35px;
`

const Icon = Styled(ExitToApp)`
    color: #010101;
    font-size: 30px;
    font-weight: bold;
    margin-right: 10px;
`

const Container = Styled.div`
display: flex;
position: relative;
bottom: 0;
padding: 30px 15px;
cursor: pointer;
`


const LogoutButton = props => {
    const { setUser } = React.useContext(AuthContext)



    const logoutFuntion = async event => {
        return await (new Authentication({}).logout(setUser))
    }
    return <Container onClick={logoutFuntion}>
        <Icon />
        <Text>Logout</Text>
    </Container>
}

export default LogoutButton;