//importacion
/* eslint no-eval:0*/
import React, {useState} from 'react'
import words from 'lodash.words'
import './App.css'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import Result from './components/Result'
import MathOperations from './components/MathOperations'

//Generación de la funcion del componente
const App = () =>{
    // Array destructuring
    const [ stack, setStack ] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)

    // arrayTextoFuncionModificaTexto = ["", funcion]

    // qer posición valor (que incialmente es el valor por defecto)
    //const text = arrayTextFuncionModificaTexto[0]
    // 2da posición: funcion que me va a permitir modificar el valor por defecto
    //const funcionModificaTexto = arrayTextFuncionModificaTexto[1]
    // Lo que ejcuta la funcion
    const value = items.length > 0 ? items[items.length-1] : "0";
    console.log('Renderizacion de App', value)
    return (
    <main className='react-calculator'>
        <Result value = {value} />
        <Numbers onClickNumber={ number =>
        {
            console.log('Click', number)
            setStack(`${stack}${number}`)
        }

        }/>  
        <Functions 
            OnContentClear = {() =>{
                console.log("Content clear")
                setStack('')
            }}
            OnDelete = {() => {
                if(stack.length >0){
                    const newStack = stack.substring(0, stack.length -1)
                    console.log('OnDelete')
                    setStack(newStack)
                }
            }}

        ></Functions>
        <MathOperations
            onClickOperation= { operation => {
                console.log("Operacion: ", operation)
                setStack(`${stack}${operation}`)
            }}
            onClickEqual = {equal =>{
                console.log("Equal ", equal)
                setStack(eval(stack).toString())
            }}
        />
    </main>)
}

export default App
//exportacion