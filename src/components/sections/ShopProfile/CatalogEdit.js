import React from "react"
import Styled from "styled-components"
import CatalogForm from "../../Forms/CatalogForm"

const Container = Styled.div`
// padding: 50px 30px;
// border-radius: 25px;
// background: #E7EEFA;
// min-height: 80%;
`



const CatalogEdit = props => {
    return <Container>
        <CatalogForm />
    </Container>
}

export default CatalogEdit;