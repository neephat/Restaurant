import {Card, CardBody, CardImg, CardText, CardTitle,} from 'reactstrap'
import LoadComments from './LoadComments'
import CommentForm from './CommentForm'
import { baseUrl } from '../../redux/baseUrl'


const DishDetail = ({selectedDish, comments, addComment, commentIsLoading}) => {
  return (
    <div>
        <Card>
    <CardImg
      alt={selectedDish.name}
      src={baseUrl + selectedDish.image}
      style={{height: 320}}
      top  
    />
    <CardBody style={{textAlign: 'left'}}>
      <CardTitle tag="h5">
        {selectedDish.name}
      </CardTitle>
      <CardText>
        {selectedDish.description}
        
      </CardText>
        Price: {selectedDish.price}$
        
        <hr />
        <LoadComments comments={comments} commentIsLoading={commentIsLoading} />
        <hr />
        <CommentForm dishId={selectedDish.id} id={comments.id} addComment={addComment}/>
        
    </CardBody>
        </Card>
    </div>
  )
}

export default DishDetail