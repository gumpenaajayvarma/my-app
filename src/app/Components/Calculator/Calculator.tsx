import * as React from 'react'
import './styles.modules.css'

interface IOwnProps {
    location: any
    history: any
}

export default function Calculator (props: IOwnProps) {
    const [result, setResult] = React.useState('0')
    const buttonClick = React.useCallback((e) => {
        const value = result === '0' ? e.target.innerHTML.toString() : result + e.target.innerHTML.toString()
        setResult(value)
    }, [result])

    const evaluateResult = React.useCallback(() => {
        setResult('0')
    }, [])

    return <div className='calc-container'>
        <div className='calc-header'>
            <h2>Calculator</h2>
        </div>
        <div className='calc-body'>
            <div id='result-div' className=' text-align-right'>
                <p>{result}</p>
            </div>
            <div className='row buttons-container'>
                <div key='row1' className='row button'>
                    <button type='button' onClick={() => setResult('0')} className='btn operator' id='clear'>C</button>
                    <button type='button' onClick={buttonClick} className='btn operator' id='percentage'>%</button>
                    <button type='button' onClick={buttonClick} className='btn operator' id='divide'>\</button>
                </div>
                <div key='row2' className='row button'>
                    <button type='button' onClick={buttonClick} className='btn' id='7'>7</button>
                    <button type='button' onClick={buttonClick} className='btn' id='8'>8</button>
                    <button type='button' onClick={buttonClick} className='btn' id='9'>9</button>
                    <button type='button' onClick={buttonClick} className='btn operator' id='multiply'>X</button>
                </div>
                <div key='row3' className='row button'>
                    <button type='button' onClick={buttonClick} className='btn' id='4'>4</button>
                    <button type='button' onClick={buttonClick} className='btn' id='5'>5</button>
                    <button type='button' onClick={buttonClick} className='btn' id='6'>6</button>
                    <button type='button' onClick={buttonClick} className='btn operator' id='subtract'>-</button>
                </div>
                <div key='row4' className='row button'>
                    <button type='button' onClick={buttonClick} className='btn' id='1'>1</button>
                    <button type='button' onClick={buttonClick} className='btn' id='2'>2</button>
                    <button type='button' onClick={buttonClick} className='btn' id='3'>3</button>
                    <button type='button' onClick={buttonClick} className='btn operator' id='add'>+</button>
                </div>
                <div key='row5' className='row button'>
                    <button type='button' onClick={buttonClick} className='btn' id='0'>0</button>
                    <button type='button' onClick={buttonClick} className='btn' id='dot'>.</button>
                    <button type='button' onClick={evaluateResult} className='btn operator' id='equal'>=</button>
                </div>
            </div>
        </div>
    </div>
}