import React, { useState } from "react";
import { Hidden } from "@material-ui/core";
import { ExpandLess, ExpandMore, FileCopy } from "@material-ui/icons";
import { Button as AntButton, Modal, Space, Typography } from "antd";
import Styled from "styled-components";
import Button from "../../CustomComponents/Button";
import { TransactionsContext } from "../../../contexts/TransactionsContext";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

const FlexContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    letter-spacing: 0.5px;
    @media (min-width: 960px){
        
    }
`;

const Title = Styled.div`
    font-weight: 600;
    color: #010101;
    font-size: 16px;
    letter-spacing: 0.5px;
`;
const Description = Styled.div`
    font-weight: normal;
    color: #979FAA;
    font-size: 18px;
    letter-spacing: 0.5px;
    @media (max-width: 960px){
        margin: 15px 0;
        font-size: 12px;
    }
`;
const Amount = Styled.div`
    font-weight: 600;
    color: #010101;
    font-size: 16px;
    letter-spacing: 0.5px;
`;
const Container = Styled.div`

`;
const DateRow = Styled.div`
    font-weight: normal;
    color: #979FAA;
    font-size: 14px;
    letter-spacing: 0.5px;
    position: relative;
    top: 5px;
    margin-left: 25px;
`;

const TransactionId = Styled.div`
    color: #F18F6C;
    fontSize: 14px;
    fontWeight: 600; 
    padding: 12px 0;
`;
const TransactionStatus = Styled.div`
    color: #31BDF4;
    font-size: 14px;
    right: 10px;
    padding: 12px 0;
`;

export default function TranstionItem(props) {
  const [show, toggleShow] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  function primaryAction() {
    if (props.history) {
    } else {
      setShowModal(!showModal);
    }
  }
  function secondaryAction() {}
  const data = props.data;

  return !data ? (
    <></>
  ) : (
    <Container>
      <FlexContainer
        onClick={() => toggleShow(!show)}
        style={{ cursor: "pointer" }}
      >
        <FlexContainer>
          <FileCopy
            style={{ height: "20px", width: "20px", marginRight: "10px" }}
          />
          <Title>{data.title && data.title}</Title>
        </FlexContainer>
        <Hidden smDown>
          <Description>{data.description && data.description}</Description>
        </Hidden>
        <FlexContainer>
          <Amount>{data.amount && data.amount}</Amount>
          <div>
            {show ? (
              <ExpandLess
                style={{
                  height: "20px",
                  width: "20px",
                  marginLeft: "10px",
                  color: "#979FAA",
                }}
              />
            ) : (
              <ExpandMore
                style={{
                  height: "20px",
                  width: "20px",
                  marginLeft: "10px",
                  color: "#979FAA",
                }}
              />
            )}
          </div>
        </FlexContainer>
      </FlexContainer>
      <DateRow>
        {data.date && data.date} at {data.time && data.time}
      </DateRow>
      <Hidden mdUp>
        <Description>{data.description && data.description}</Description>
      </Hidden>

      <div style={{ display: show ? "block" : "none", marginLeft: "25px" }}>
        <FlexContainer>
          <TransactionId>{data.id && data.id}</TransactionId>
          <TransactionStatus>{data.status && data.status}</TransactionStatus>
        </FlexContainer>

        <Space>
          <Button
            slim
            onClick={primaryAction}
            size="large"
            outlined={data.status === "Pending" ? true : false}
            disable={data.status === "Pending" ? true : false}
          >
            {props && props.primaryButtonText}
          </Button>
          {/* <Button slim onClick={secondaryAction} size="large" type="secondary">
            {props && props.secondaryButtonText}
          </Button> */}
        </Space>

        <UpdateTransaction
          data={data}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </Container>
  );
}

export function UpdateTransaction({ data, showModal, setShowModal }) {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [selected, setSelected] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [customerCode, setcustomerCode] = useState("");
  const [customerCodeShow, setcustomerCodeShow] = useState(false);
  const { updateTransactionStatus } = React.useContext(TransactionsContext);

  function toggleSelected(idx) {
    setSelected(idx);
    setErrorMessage("");
    switch (idx) {
      case 0:
        return setStatus("shipped");
      case 1:
        return setStatus("delivered");
      case 2:
        return setStatus("completed");
      case 3:
        return setStatus("cancelled");
      default:
        return;
    }
  }

  let handelCustomerCodeChange = (e) => {
    setcustomerCode(e.target.value);
  };

  let handelConfirm = () => {
    console.log(customerCode);
  };

  let handleClose = () => {
    setcustomerCodeShow(false);
  };

  function updateStatus() {
    console.log(status);
    if (status !== "") {
      if (status === "completed") {
        setcustomerCodeShow(true);
        setShowModal(false);
      }
      setLoading(true);

      const state = updateTransactionStatus(data, status);

      setTimeout(() => {
        if (state) setLoading(false);
        setShowModal(false);
      }, 2500);
    } else {
      setErrorMessage("Please select applicable status");
    }
  }

  const { Title } = Typography;

  return (
    <React.Fragment>
      <Modal
        title="Update Transaction Status"
        visible={showModal}
        centered
        closable
        destroyOnClose={true}
        onCancel={() => setShowModal(false)}
        confirmLoading={loading}
        onOk={updateStatus}
      >
        <Space size="large" align="center">
          <AntButton
            onClick={() => toggleSelected(0)}
            type={selected === 0 ? "primary" : "default"}
          >
            Shipped
          </AntButton>
          <AntButton
            onClick={() => toggleSelected(1)}
            type={selected === 1 ? "primary" : "default"}
          >
            Delivered
          </AntButton>
          <AntButton
            onClick={() => toggleSelected(2)}
            type={selected === 2 ? "primary" : "default"}
          >
            Completed
          </AntButton>
          <AntButton
            onClick={() => toggleSelected(3)}
            type={selected === 3 ? "primary" : "default"}
          >
            Cancelled
          </AntButton>
        </Space>
        <br />
        <Title level={4} type="danger">
          {errorMessage}
        </Title>
      </Modal>

      <Dialog
        open={customerCodeShow}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Customer Code Here</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter customer code for completed this order...
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Enter Customer Code"
            type="text"
            fullWidth
            onChange={handelCustomerCodeChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            style={{ backgroundColor: "green", color: "white" }}
            onClick={handelConfirm}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
