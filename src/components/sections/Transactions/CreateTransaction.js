import React from "react";
import Styled from 'styled-components'
import TransactionForm from "../../Forms/TransactionForm";

const Container = Styled.div`

`

const CreateTransaction = props => {

    return <Container>
        <TransactionForm />
    </Container>


}

export default CreateTransaction;