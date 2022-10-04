import React from 'react'

const CrudTableRow = ({el,setDataToEdit,deleteData}) => {
    let {name,signo,id} = el;

    return (
            <tr className='table-dark'>
                
                <td className='table-dark text-center'>{name}</td>
                
                <td className='table-dark text-center'>{signo}</td>
                <td className='table-dark text-center'>
                    <button className='btn btn-warning m-1' onClick={() => setDataToEdit(el)}>Editar</button>
                    <button className='btn btn-danger m-1' onClick={() => deleteData(id)} >Eliminar</button>
                </td>
            </tr>
            
    );
}

export default CrudTableRow