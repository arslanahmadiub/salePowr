import React from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import './Profile.css'
import ProfileEdit from './ProfileEdit'
import { Modal } from 'antd'



const CompleteProfile = props => {

    const { user } = React.useContext(AuthContext)

    React.useEffect(() => {
        // Check if user has completed their profile


        //setOpen(user && user.profilePercent && user.profilePercent !== 1000)

    }, [user])

    console.log(user && user.profilePercent)

    return <Modal
        visible={!!!(user && user.profilePercent && user.profilePercent !== 100)}
        onOk={() => null}
        onCancel={() => null}
    >
        <ProfileEdit />
    </Modal>
}

export default CompleteProfile;