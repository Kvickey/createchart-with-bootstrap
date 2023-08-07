import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { PieChart } from 'react-minimal-pie-chart';


function Chart() {

    const [box1, setBox1] = useState("")
    const [box2, setBox2] = useState("")
    const [error1, setError1] = useState("")
    const [error2, setError2] = useState("")
    const [flag, setFlag] = useState(false)
    const [chartData, setChartData] = useState([])

    const handleBox1Change = (e) => {
        const value = e.target.value
        {
            if (box1 <= 100) {
                setBox1(value)
                setBox2(100 - value)
                setError1("")
            } else {
                setError1("Value is Invalid")
            }
        }
    }

    const handleBox2Change = (e) => {
        const value = e.target.value
        {
            if (value <= 100) {
                setBox2(value)
                setBox1(100 - value)
                setError2("")
            } else {
                setError2("Value is invalid")
            }
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        const newData = [
            { title: 'Box 1', value: parseInt(box1), color: '#aca8c8' },
            { title: 'Box 2', value: parseInt(box2), color: '#72b4eb' },
        ];
        setChartData(newData);
        setFlag(true)
        console.log(flag);
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='card col-sm-10 mt-3 p-3'>
                        <div className='row'>
                            <div className='col-sm-4 form-group mb-3'>
                                <label for="box1">Box 1</label>
                                <input
                                    type='number'
                                    name='box1'
                                    id='box1'
                                    value={box1}
                                    className='form-control'
                                    onChange={handleBox1Change} />
                            </div>
                            <div className='col-sm-4'>
                                <label for="box2">Box 2</label>
                                <input
                                    type='number'
                                    name='box2'
                                    id='box2'
                                    value={box2}
                                    className='form-control'
                                    onChange={handleBox2Change} />
                            </div>
                            <div className='col-sm-4'>
                                <Button className="btn btn-primary mt-4" onClick={handleClick}>Create Chart</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {flag && <PieChart data={chartData} className="chart" style={{ width: "400px", height: "400px", margin: "20px auto" }} />}
            </div>
        </>
    )
}

export default Chart