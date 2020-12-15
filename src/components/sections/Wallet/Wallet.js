import React from "react";
import Styled from "styled-components";
import Button from "../../CustomComponents/Button";
import BannerContainer from "../../CustomComponents/BannerContainer";
import BulletedText from "../../CustomComponents/BulletedText";
import CircularProgress from "../../CustomComponents/CircularProgress";
import WithdrawalForm from "../../Forms/WithdrawalForm";
import CreditCard, { MoMoCard } from "./CreditCard";
import HorizontalScrollingContainer from "../../CustomComponents/HorizontalScrollingContainer";
import { Row, Col, Space, Form } from "antd";
import { WalletContext } from "../../../contexts/WalletContext";
import DesktopHeaderRow from "../../CustomComponents/DesktopHeaderRow";
import TwinInputSelect from "../../CustomComponents/TwinInputSelect";
import { DataContext } from "../../../contexts/DataContext";

const Title = Styled.div`
    font-size: 22px;
    font-weight: 500;
    margin: 20px 0;
`;

const NewCardButton = Styled.div`
    width: 300px;
    height: 170px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #979FAA;
    background: #fff;
    border-radius: 12px;
    cursor: pointer;
`;

const Wallet = (props) => {
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [stage, setStage] = React.useState(0);
  const [type, setType] = React.useState("");

  function advanceStage() {
    if (stage < 3) {
      setStage(stage + 1);
    }
  }

  function selectThis(data) {
    setSelectedCard(data);
  }
  const { balance, cards } = React.useContext(WalletContext);
  const { main, escrow } = balance || {};

  function cashoutSomeMoney(values) {
    console.log(values);
  }

  const percent = Math.round(
    (100 * Number(main)) / (Number(main) + Number(escrow))
  );

  const { currencies } = React.useContext(DataContext);

  return (
    <>
      <Row gutter={[0, 8]}>
        <DesktopHeaderRow title="Wallet" />
      </Row>
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <BannerContainer>
            {balance && balance.main && (
              <BulletedText
                title={"Available"}
                value={`${balance.currency} ${balance.main || 0}`}
                primary
              />
            )}

            {!isNaN(percent) && (
              <CircularProgress thickness={10} radius={50} percent={percent} />
            )}

            {balance && balance.escrow && (
              <BulletedText
                title={"Funds in escrow"}
                value={balance ? `${balance.currency} ${balance.escrow}` : 0}
              />
            )}
          </BannerContainer>
        </Col>
      </Row>

      <Row gutter={[0, 24]}>
        <Col span={24}>
          <HorizontalScrollingContainer>
            {cards &&
              cards.map((card, index) => {
                return (
                  <React.Fragment>
                    {card.type === "momo" && (
                      <span
                        onClick={() => selectThis(card)}
                        key={card.number + index + card.number}
                      >
                        <MoMoCard
                          selected={
                            selectedCard && selectedCard.number === card.number
                          }
                          data={card}
                        />
                      </span>
                    )}
                    {card.type === "bank" && (
                      <span
                        onClick={() => selectThis(card)}
                        key={card.number + index + card.number}
                      >
                        <CreditCard
                          selected={
                            selectedCard && selectedCard.number === card.number
                          }
                          data={card}
                        />
                      </span>
                    )}
                  </React.Fragment>
                );
              })}

            <NewCardButton key="nmsi8923nv-2092309" onClick={advanceStage}>
              <div style={{ top: "40%", position: "relative" }}>
                Add new payment Card
              </div>
            </NewCardButton>
          </HorizontalScrollingContainer>
        </Col>
      </Row>

      {selectedCard && (
        <React.Fragment>
          <Row gutter={[0, 8]}>
            <Col span={24}>
              <Title>Withdrawal Amount</Title>
            </Col>
          </Row>

          <Row gutter={[0, 8]}>
            <Col span={{ xs: 24, sm: 24, md: 12, lg: 12 }}>
              <Form onFinish={cashoutSomeMoney}>
                <Col span={24}>
                  <Form.Item>
                    <TwinInputSelect
                      list={currencies}
                      placeholder="Please input the amount to withdraw"
                    />
                  </Form.Item>
                </Col>
                <Row gutter={[0, 8]}>
                  <Col span={12}>
                    <Form.Item>
                      <Button htmlType="submit">Cashout</Button>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Button onClick={() => setSelectedCard(null)} outlined>
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </React.Fragment>
      )}

      {stage > 0 && (
        <>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <Title>Payout Options</Title>
            </Col>
          </Row>

          <Row gutter={[16, 24]}>
            <Space size="large">
              <Button
                onClick={() => {
                  setType("momo");
                  advanceStage();
                }}
                faded={type !== "momo"}
              >
                Mobile Money
              </Button>
              <Button
                onClick={() => {
                  setType("bank");
                  advanceStage();
                }}
                faded={type !== "bank"}
              >
                Bank
              </Button>
            </Space>
          </Row>
        </>
      )}

      {stage > 1 && (
        <>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <WithdrawalForm externalFunction={setStage} type={type} />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Wallet;
