import React from 'react'
import { Dialog, DialogContent } from "@material-ui/core"
import ProfileForm from '../../Forms/ProfileForm'
import './Profile.css'



const CompleteProfile = props => {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        // Check if use has coplete their profile

        setOpen(true)

    }, [])

    return <Dialog className="dialog" open={open} onClose={() => setOpen(false)} maxWidth="md">

        <DialogContent style={{ padding: "5%" }}>
            <ProfileForm />
        </DialogContent>
    </Dialog>
}

export default CompleteProfile;