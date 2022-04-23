import React from 'react'
import "./Data.css"

function Data({ datas, pageNumber, loading }) {
    let sn = 0
    switch(pageNumber) {
        case 1:
          sn = 1
          break;
        case 2:
          sn = 11
          break;
        case 3:
          sn = 21
          break;
        case 4:
            sn = 31
            break;
        case 5:
            sn = 41
            break;
        case 6:
                sn = 51
                break;
        default:
            sn = 1
            break;
      }

  return (
    <div>
        <table className='data'>
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Diameter</th>
                    <th>Gravity</th>
                    <th>Terrain</th>
                    <th>Orbital Period</th>
                    <th>Rotation Period</th>
                    <th>Surface Water</th>
                    <th>Date Created</th>
                    <th>Population</th>
                </tr>
            </thead>
           <tbody>
               {loading && datas.map((data, index) => {
                   let fields = data.created.split('T');  
                   let date = fields[0];
                   return (
                    <tr key={index}>
                        <td>{sn++}</td>
                        <td>{data.name}</td>
                        <td>{data.climate}</td>
                        <td>{data.diameter}</td>
                        <td>{data.gravity}</td>
                        <td>{data.terrain}</td>
                        <td>{data.orbital_period}</td>
                        <td>{data.rotation_period}</td>
                        <td>{data.surface_water}</td>
                        <td>Date:{date}</td>
                        <td>{data.population}</td>
                    </tr>
                   )
               })}
           </tbody>
        </table>
    </div>
  )
}

export default Data