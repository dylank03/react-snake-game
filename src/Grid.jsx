import { useEffect, useState } from "react"

const Grid = ({grid, setGrid})=>{

    return grid.map((row, RowPos)=>{
        return <div key={RowPos} className="row">{row.map((cell, cellPos)=>{
            return(<h1 key = {cellPos} className="empty-cell">{cell}</h1>)
        })}</div>
    })

}

export default Grid