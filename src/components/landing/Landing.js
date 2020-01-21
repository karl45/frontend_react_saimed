import React, { Fragment, useState } from 'react'
import Navbar from './Navbar'
import HeadingSection from './HeadingSection'
import ServicesSection from './ServicesSection'
import OnlineAppointmentsSection from './OnlineAppointmentsSection'
import TeamSection from './TeamSection'
import ContactsSection from './ContactsSection'
import CopyrightSection from './CopyrightSection'
import LoginModal from './LoginModal'

const Landing = props => {  
    const [loginModalOpen, setLoginModalOpen] = useState(false)
    
    const openLoginModal = () => setLoginModalOpen(true)
    const closeLoginModal = () => setLoginModalOpen(false)

    return (
        <Fragment>
            <Navbar openLoginModal={openLoginModal}/>
            <HeadingSection />
            <ServicesSection />
            <OnlineAppointmentsSection />
            <TeamSection />
            <ContactsSection />
            <CopyrightSection />
            <LoginModal open={loginModalOpen} onClose={closeLoginModal}/>
        </Fragment>
    )
}

export default Landing