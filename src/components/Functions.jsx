import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const Functions = ({OnContentClear, OnDelete}) =>(
    <section className="functions">
        <Button type="button-long-text" text ="clear" clickHandler={OnContentClear}></Button>
        <Button text="&larr;" clickHandler={OnDelete}></Button>
    </section>

)

Functions.propTypes = {
    OnContentClear: PropTypes.func.isRequired,
    OnDelete: PropTypes.func.isRequired
}

export default Functions
