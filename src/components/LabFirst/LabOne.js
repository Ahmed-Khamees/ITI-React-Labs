import React from 'react'
import { useState } from 'react'
import { LabOneElement } from './LabOneElement'


export const LabOne = () => {
    let dataArray = [];
    for (let i = 1; i < 5; i++) {
        dataArray.push(<LabOneElement data={"header number : " + i} />)
    }
    const [getDataArray, setDataArray] = useState(dataArray);

    function addHeader() {
        setDataArray([...getDataArray, <LabOneElement data={"header number : " + (getDataArray.length + 1)} />])
    }

    return (
        <>
            <button className='btn btn-primary' onClick={addHeader}>Insert Data</button>
            {getDataArray}
        </>
    )
}

