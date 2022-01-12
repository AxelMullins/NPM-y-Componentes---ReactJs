import React from 'react'

const Footer = (props) => {
    return (
        <footer className='footer'>
            Footer {props.name}
            , {props.type}
        </footer>
    )
}

export default Footer
