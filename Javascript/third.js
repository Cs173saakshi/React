

    const datas=[
        {name:"ABC",profession:"Software Developer"},
        {name:"XYZ",profession:"Tester"}
    ];

    function getDatas(){
        setTimeout(()=>{
        
        let output="";
        datas.forEach((data,index)=>{
            output+=`<li>${data.name} - ${data.profession} </li>`
        })
        document.body.innerHTML=output;
    },3000);
    }

    function createdata(newData)
    { return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newData);
            let error=false;
            if(!error) 
            {
                resolve();
            }
        else{
            reject("Error!!!!!!!!");
        }

        },5000);
    })
}

/*     createdata({name:"Ajay",profession:"Admin"})
 .then(getDatas)
 .catch(err=>console.log(err)); */


 async function start(){
    await createdata({name:"Ajay",profession:"Admin"});
    getDatas();
 }
 start();