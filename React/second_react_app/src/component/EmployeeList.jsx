import EmployeeCard from "./EmployeeCard";
function EmployeeList(){

    const employees=[{id:111,name:"Ajay",city:"Mysore"},
        {id:222,name:"Saakshi",city:"Mangalore"},
        {id:333,name:"Mona",city:"Bangalore"},
        {id:444,name:"Ravi",city:"Mumbai"}
    ]
    return(
        <div>
<h2>Employee List:</h2>{
employees.map((employee)=>
    <EmployeeCard key={employee.id} name={employee.name} city={employee.city}/>
)
}
        </div>
    )
}
export default EmployeeList;