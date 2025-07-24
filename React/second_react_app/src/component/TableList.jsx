function TableList(){
     const students=[
        {id:111,name:"Ajay",city:"Mysore"},
        {id:222,name:"Saakshi",city:"Mangalore"},
        {id:333,name:"Mona",city:"Bangalore"},
        {id:444,name:"Ravi",city:"Mumbai"}
    ]

    return(
        <div>
            <h2>Student Table:</h2>
            <table border="2" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    students.map((s)=>(
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.city}</td>
                        </tr>
                    ) )
                   }
                </tbody>
            </table>
               </div>
    )
}
export default TableList;