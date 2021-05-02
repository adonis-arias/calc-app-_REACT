import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const numbers = [1,2,3,4,5,6,7,8,9,0]

const renderButton = onClickNumber => {

    const renderButton = number => (
        <Button key ={number} text = {number.toString()} clickHandler={onClickNumber}></Button>
    )
    return numbers.map(renderButton)

}
const Numbers = ({onClickNumber}) =>(
    <section className="numbers">
       {
           renderButton(onClickNumber)
       }
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired

}

export default Numbers
