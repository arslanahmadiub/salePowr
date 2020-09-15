import React from "react"
import Button from "../CustomComponents/Button"
import Publish from "@material-ui/icons/Publish"
const FilePicker = props => {
    const [file, setFile] = React.useState(null)
    const pickFile = event => {
        document.querySelector("#filepicker").click();
    }
    const getFile = event => {

        setFile(event.target.files[0]);
    }
    return <div style={{ border: "1px dashed #979FAA", display: "flex" }}>
        <input id="filepicker" multiple={props.multiple ? true : false} onChange={getFile} type="file" style={{ display: "none" }} />
        <div>
            <Button onClick={pickFile} grey style={{ height: "80px", width: "80px" }}>
                <Publish style={{ color: "#31BDF4", height: "60px", width: "70px", opacity: ".4" }} />
            </Button>
        </div>
        <div style={{ lineHeight: "80px", fontSize: "20px", color: "#979FAA", marginLeft: "10px" }}>{file ? file.name : props.label ? props.label : "Click to select a file"}</div>
    </div>
}

export default FilePicker;