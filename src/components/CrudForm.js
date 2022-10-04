import React, { useState, useEffect } from 'react'


const initialForm = {
    name: "",
    signo: "",
    id: null,
};

const CrudForm = ({createData,updateData,dataToEdit,setDataToEdit}) => {
    const [form, setForm] = useState(initialForm);

   useEffect(() => {
    if(dataToEdit) {
        setForm(dataToEdit);
    } else{
        setForm(initialForm);
    }
   }, [dataToEdit]);
   

    const handleChange = (e) => { 
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e) => { 
        e.preventDefault();

        if(!form.name || !form.signo ) {
            alert("Datos incompletos");
            return;
        }
        if(form.id === null) {
            createData(form);
        }else {
            updateData(form);
        }

        handleReset();
    };

    const handleReset = (e) => { 
        setForm(initialForm);
        setDataToEdit(null);
    };

    return (
        <div>
            <h3 className='text-center mt-5'>{dataToEdit?"Editar":"Agregar"}</h3>
            <form onSubmit={handleSubmit} className='row d-flex justify-content-center align-items-center m-0  text-white p-2 row-cols-md-3 row-cols-sm-1'>
                <input
                className='m-1 text-center'
                    type="text"
                    name="name"
                    placeholder='Nombre'
                    onChange={handleChange}
                    value={form.name} />
                <input
                className='m-1 text-center'
                    type="text"
                    name="signo"
                    placeholder='Signo'
                    onChange={handleChange}
                    value={form.signo} />
                <input className='m-1 btn btn-success' type="submit" value="Enviar" />
                <input className='m-1 btn btn-primary' type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    )
}

export default CrudForm