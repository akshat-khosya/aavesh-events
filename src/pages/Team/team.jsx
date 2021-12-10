import React from 'react'
import Teamtemplate from '../../components/templatemain/Teamtemplate'
import Card from '../Contactus/Card'
import people from '../Contactus/team'
function Team() {
    return (
        <>
        <Teamtemplate />
        <section className="contact-us">
            <div className="contact-us-container">
                <div className="team">
                    <div className="row">
                        {
                            people.map((person, index) => (
                                <div className="col-lg-25 col-md-50 col-sm-100" key={index}>
                                    <Card
                                        name={person.name}
                                        subtitle={person.subtitle}
                                        image={person.image}
                                        socials={person.socials}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Team
