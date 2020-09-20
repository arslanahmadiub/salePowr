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
    return <div style={{ display: "inline-block", position: "absolute", height: "100%", }}>
        <input id="filepicker" multiple={props.multiple ? true : false} onChange={getFile} type="file" style={{ display: "none" }} />
        <Button onClick={pickFile} grey style={{ height: "100%", width: "100%", background: "none" }}>
            <AddPhotoAlternate style={{ height: "100%", width: "100%", opacity: ".6" }} />
        </Button>
    </div>
}

export default MiniFilePicker;