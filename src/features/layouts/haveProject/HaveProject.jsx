import React from 'react'

import arrow from './../../assets/vector.png'
const HaveProject = () => {
    return (
        <>
            <div className='project'>
                <p>Have a project in mind?</p>
                <h2>Let’s create something awesome.</h2>
                <button>Apply for Grant
                    <img className={"project-arrow"} src={arrow} alt=""/>
                </button>
            </div>
        </>
    )
}

export default HaveProject
