import React from "react"
import Add from "@material-ui/icons/Add"
import Button from "../../CustomComponents/Button"

const NewTransactionPanel = props => {

    return <div style={{ borderRadius: "10px", background: "#E7EEFA", height: "50px", lineHeight: "52px", padding: "10px", }}>
        <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "15px" }}>
            <div style={{ color: "#979FAA", fontSize: "14px", overflow: "wrap", padding: 0, margin: "10px auto", height: "50px" }}>Create new transaction</div>

            <div style={{ width: "50px" }}>
                <Button secondary>
                    <Add fontSize="large" />
                </Button>
            </div>
        </div>
    </div>
}

export default NewTransactionPanel;