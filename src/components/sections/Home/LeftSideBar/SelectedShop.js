import React from "react"
import Avatar from "@material-ui/core/Avatar"
import ExpandMore from "@material-ui/icons/ExpandMore"
import ExpandLess from "@material-ui/icons/ExpandLess"
import Styled from "styled-components";
import { ClickAwayListener } from "@material-ui/core";


const List = Styled.ul`
    padding: 18px 8px;
  margin: 0;
  top: 0px;
  width: 100%;
  padding-left: 1em;
  background: #ffffff;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-radius: 10px;
  box-sizing: border-box;
  position:absolute;
  z-index: 100;
  cursor: pointer;
  box-shadow: 1px 1px 2px 0px lightgrey;
  display: ${p => !p.show ? "none" : ""};
  
`;
const ListItem = Styled.li`
  list-style: none;
  cursor: pointer;
  padding: 2px;
  margin: 5px 0px;
  color: grey;
  &:hover{
      background:#979FAA;
      opacity: 0.5;
      color: #000;
  }
`


const SelectedShop = props => {
    const [selected, setSelected] = React.useState()
    const [show, setShow] = React.useState(false);
    const onShopSelected = props.onShopSelected

    React.useEffect(() => {
        if (props && props.shops && !selected)
            setSelected(props.shops[0]);
    }, [props, selected])


    const onChange = (shop) => {
        setSelected(shop);
        if (onShopSelected != null) onShopSelected(shop);
    }

    return props.shops && props.shops.length > 0 && props.shops[0].name ?
        <ClickAwayListener onClickAway={() => setShow(false)}>
            <div style={{ padding: "0  0 0 0px", position: "absolute", bottom: "0px", width: "80%" }}>
                <div style={{ fontSize: "18px", fontWeight: "500", color: "#010101", padding: "10px 5px" }}>
                    Selected shop
        </div>

                <div onClick={() => setShow(!show)} style={{ display: "flex", justifyContent: "space-between", padding: "5px", position: "relative", cursor: "pointer" }}>
                    <div style={{ display: "flex", justifyContent: "normal", heigth: "" }}>
                        <div>
                            <Avatar alt={selected?.name}>{selected?.name[0]}</Avatar>
                        </div>
                        <div style={{ lineHeight: "40px", paddingLeft: "10px", fontSize: "16px", fontWeight: "500", color: "#979FAA" }}>
                            {selected?.name}
                        </div>

                    </div>
                    <div style={{ lineHeight: "55px", color: "#979FAA" }}>
                        {show ? <ExpandLess /> : <ExpandMore />}
                    </div>

                </div>
                <List onClick={() => setShow(!show)} show={show}>
                    {
                        props.shops.map(shop => {
                            return <ListItem key={shop?.id} onClick={() => onChange(shop)}>
                                {shop?.name}
                            </ListItem>
                        })
                    }
                </List>
            </div>
        </ClickAwayListener>

        :
        <></>
}

export default SelectedShop;