import { Component } from "react"
import MenuItem from "./MenuItem"
import DishDetail from "./DishDetail";
import { Alert, Modal, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { addComment, fetchComments, fetchDishes } from "../../redux/actionCreators";
import Loading from "./Loading";



const mapStateToProps = (state)=>{
  return {
    dishes: state.dishes,
    comments: state.comments
  }

}
const mapDispatchToProps = (dispatch)=>{
  return {
      addComment: (dishId, comment, rating, author) => dispatch(addComment(dishId, comment, rating, author)),
      fetchDishes: () => dispatch(fetchDishes()),
      fetchComments: () => dispatch(fetchComments())
  }
}
class Menu extends Component {
  
  state = {
    selectedDish: null,
    modalOpen: false,
  }

  onSelectDish = (dish)=>{
    this.setState({
      selectedDish: dish,
      modalOpen: true
    })
  }
  toggleModal = ()=>{
    this.setState({
      modalOpen: !this.state.modalOpen,
    })
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
  }
  render(){
    document.title = "Tanu's Kitchen|Menu";

    if (this.props.dishes.isLoading){
      return (
        <Loading />
      )
    }
    else if (this.props.dishes.errMessage!=null) {
      return (
          <Alert color="danger">{this.props.dishes.errMessage}</Alert>
      )

    }
    else{
      const menu = this.props.dishes.dishes.map((dish)=>{
        return (
          <div className="col-md-4">
            <MenuItem key={dish.id} dish={dish} onSelectDish={this.onSelectDish} />
          </div>
          )
      });
      
      let dishDetail = null;
      if(this.state.selectedDish!=null){
        const comments = this.props.comments.comments.filter((comment)=>{
          return comment.dishId === this.state.selectedDish.id;
        });
        dishDetail = <DishDetail selectedDish={this.state.selectedDish} comments={comments} commentIsLoading={this.props.comments.isLoading} addComment={this.props.addComment}/>
      }
      
      // const dishDetail = this.state.selectedDish ? <DishDetail selectedDish={this.state.selectedDish} comments={comments} />: null;
      return (
        <div>
        <div className="container">
          <div className="row row-content"> 
               {menu} 
            <Modal isOpen={this.state.modalOpen}>
            {dishDetail}
              <ModalFooter>
                <button className="btn btn-primary" onClick={this.toggleModal}> Close</button>
              </ModalFooter>
            </Modal>
            </div>
            
          </div>
  
          </div>
      )
    }
    
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)