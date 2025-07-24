import { useState } from "react";
function CourseList(){
const[courses,setCourses]=useState([
    {id:100, name:"Java Script   "},
    {id:200, name:"React   "},
    {id:300, name:"Python   "},
    {id:400, name:"Java   "}
])
const handleDeleteButton=(id)=>{
    const newCourse=courses.filter((c)=> c.id!==id);
    setCourses(newCourse);
}
    return(
        <div>
<h2>Courses List:</h2>
{
    courses.map((c)=>(
        <div key={c.id}>{c.name}
        <button onClick={()=>handleDeleteButton(c.id)}>Delete</button>
        <br></br><br></br>
        </div>
    ))
}
        </div>
    )
}
export default CourseList;