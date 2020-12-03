import React from "react"
import Button from "./Button"
import AddPhotoAlternate from "@material-ui/icons/AddPhotoAlternate"



const MiniFilePicker = props => {
    // const [file, setFile] = React.useState(null)
    const pickFile = event => {
        document.querySelector("#filepicker").click();
    }
    const getFile = event => {

        // setFile(event.target.files[0]);
    }
    return <div style={{ display: "inline-block", position: "absolute", maxHeight: "100px", }}>
        <input id="filepicker" multiple={props.multiple ? true : false} onChange={getFile} type="file" style={{ display: "none" }} />
        <Button onClick={pickFile} grey style={{ height: "100%", width: "100%", postion: 'relative', background: "none", margin: 'auto auto' }}>
            <AddPhotoAlternate style={{ postion: 'relative', height: "100px", width: "100px", opacity: "0.6", margin: 'auto auto' }} />
        </Button>
    </div>
}

export default MiniFilePicker;