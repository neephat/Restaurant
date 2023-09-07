import { Card, CardBody, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { baseUrl } from '../../redux/baseUrl';

const MenuItem = ({ dish, onSelectDish }) => {
  //destructuring props
  return (
    <div>
      <Card inverse style={{ margin: 10, cursor: 'pointer', textAlign: 'center', width: 'auto'}} onClick={()=>onSelectDish(dish)}>
        <CardBody>
        <CardImg
          alt={dish.name}
          src={baseUrl + dish.image}
          style={{ height: 270, opacity: 0.7 }}
          
        />
        <CardImgOverlay>
          <CardTitle tag="h5" style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>{dish.name}</CardTitle>
          
        </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;
