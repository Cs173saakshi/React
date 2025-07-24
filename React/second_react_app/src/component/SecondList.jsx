function SecondList()
{
    const students=[{id:111,name:"Ajay",city:"Mysore"},
        {id:222,name:"Saakshi",city:"Mangalore"},
        {id:333,name:"Mona",city:"Bangalore"},
        {id:444,name:"Ravu",city:"Mumbai"}
    ]
    return(
        <div>
<h2>Student List:</h2>
{
    students.map((student)=>
    <p key={student.id}>Name:{student.name} City: {student.city}</p>)
}
        </div>
    )
}
export default SecondList;