import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
function BootStrap()
{

    const students=[{id:111,name:"Ajay",city:"Mysore"},
        {id:222,name:"Saakshi",city:"Mangalore"},
        {id:333,name:"Mona",city:"Bangalore"},
        {id:444,name:"Ravu",city:"Mumbai"}
    ]
const handleDeleteButton=(id)=>{
    alert(`Delete student with id:${id}`);
}
    return(
<div className='container mt-4'>
<h2 className='head3'>Student Table:</h2>
<Table striped bordered hover responsive>
    <thead>
        <tr>
            <th>Id</th>
             <th>Name</th>
              <th>City</th>

        </tr>
    </thead>
    <tbody>{
         students.map((s)=>(
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.city}</td>
                            <td>
                                <Button variant="danger" size="em" 
                                onClick={()=>handleDeleteButton(s.id)}>Delete</Button>
                            </td>
                        </tr>
                    ) )
        }
    </tbody>
</Table>
</div>
    )
}
export default BootStrap;