import React, {useState} from 'react'
import { Container } from 'react-bootstrap';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
 {
    id: 1,
    name: "Sebastian Navas",
    signo: "Capricornio",


 },
 {
    id: 2,
    name: "Edwin Ayala",
    signo: "Leo",


 },
 {
    id: 3,
    name: "Estiven Guelpaz",
    signo: "Acuario",
    

 },
 {
    id: 4,
    name: "Antony Linares",
    signo: "Aries",

 },
];
const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db, data]);
    };

    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id?data:el);
        setDb(newData);
    };

    const deleteData = (id) => {
        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el registro con el id '${id}'?`
            );
            if(isDelete) {
                let newData = db.filter(el=>el.id !== id);
                setDb(newData);
            }else{
                return;
            }
    };

  return (
    <>
        <Container>
        <h1 className='text-center' >CRUD APP</h1>
        <CrudForm 
        createData={createData} 
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        />
        <CrudTable 
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
        />
        </Container>
    </>
  )
}

export default CrudApp