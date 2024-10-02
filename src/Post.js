export default function Post ({number , caption="No title"}){           
    return(
        <div style={{
         
           margin:"25px" ,
        border: "solid , teal , 5px"}}>
<h2>{number} </h2>
<hr></hr>
<p>{caption} </p>
        </div>
    )
}