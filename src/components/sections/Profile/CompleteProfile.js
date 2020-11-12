import React from 'react'
import { Dialog, DialogContent } from "@material-ui/core"
import { AuthContext } from '../../../contexts/AuthContext'
import ProfileForm from '../../Forms/ProfileForm'
import './Profile.css'



const CompleteProfile = props => {
    const [open, setOpen] = React.useState(false)

    const { user } = React.useContext(AuthContext)

    React.useEffect(() => {
        // Check if user has completed their profile


        setOpen(user && user.profilePercent && user.profilePercent !== 100)

    }, [user])

    return <Dialog className="dialog" open={open} onClose={() => setOpen(false)} maxWidth="md">

        <DialogContent style={{ padding: "5%" }}>
            <ProfileForm />
        </DialogContent>
    </Dialog>
}

export default CompleteProfile;