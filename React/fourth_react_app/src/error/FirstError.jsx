function FirstError(props){


/* try { */
  //  throw new Error ("Something Broken...");
/* }catch(error){
    return<p>Some Error occured ......</p> */

    return(
        <div>
            <h2>This is First Component from Error folder</h2>
              <h3>{props.name}</h3>
              
        </div>
    )
}

export default FirstError;