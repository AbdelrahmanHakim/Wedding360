import React from 'react'
import Burger from '../components/navbar/Burger'
import PageTitle from '../components/PageTitle'
import Testmonials from '../components/Testmonials'
import Footer from '../components/Footer'
import Photos from '../components/Photos'
import ScrollTop from '../components/ScrollTop'

 const WeddingIdeas = () => {
    return (
        <section>
            <Burger />
            <PageTitle/>
            <ScrollTop />
            <Photos/>
            <Testmonials />
            <Footer />
        </section>
    )
}

export default WeddingIdeas;