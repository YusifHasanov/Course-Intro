import React from 'react'

import arrow from './../../assets/vector.png'
const HaveProject = () => {
    return (
        <>
            <div className='project'>
                <p>Tərəddüd edirsən?</p>
                <h2>Qeydiyyatdan keç və səndə ailəmizə qoşul.</h2>
                <button>Əlaqə
                    <img className={"project-arrow"} src={arrow} alt=""/>
                </button>
            </div>
        </>
    )
}

export default HaveProject
