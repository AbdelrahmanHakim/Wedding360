import React from 'react'
import Burger from '../components/navbar/Burger'
import PageTitle from '../components/PageTitle'
import PhotoSearch from '../components/PhotoSearch'
import Testmonials from '../components/Testmonials'
import Footer from '../components/Footer'

 const WeddingIdeas = () => {
    return (
        <section>
            <Burger />
            <PageTitle/>
            <PhotoSearch />
            <Testmonials />
            <Footer />
        </section>
    )
}

export default WeddingIdeas;