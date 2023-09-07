import dateFormat from "dateformat";
import Loading from "./Loading";

const LoadComments = ({comments, commenIsLoading}) => {
    if(commenIsLoading){
       return <Loading />
    }
    else{
        const previewComments =  comments.map((com)=>{
            return(
                <div key={com.id}>
                    <h5>{com.author}</h5>
                    <p style={{margin: 'auto'}}>{com.comment}</p>
                    <p>Rating: {com.rating}</p>
                    <p style={{fontWeight: 800, fontSize: '12px'}}>{dateFormat(com.date, 'dddd, mmmm dS, yyyy')}</p>
    
                </div>
            )
        })
    
        return (
        <div>
           {previewComments}
    
        </div>
      )
    }
    
}

export default LoadComments