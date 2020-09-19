import React from "react";
import Styled from 'styled-components'
import FlatSelect from "../../CustomComponents/FlatSelect";
import SearchBox from "../../CustomComponents/SearchBox";
import TransactionForm from "../../Forms/TransactionForm";

const Container = Styled.div`
padding: 50px 30px;
border-radius: 0;
background: #E7EEFA;
min-height: 80%;
`

const CreateTransaction = props => {

    return <Container>
        <TransactionForm />
    </Container>


}

export default CreateTransaction;