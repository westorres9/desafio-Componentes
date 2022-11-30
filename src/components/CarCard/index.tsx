import './styles.css';
import carImg from '../../assets/img/car.png';

export default function CarCard() {
    return (
        <div className="car-card-container">
            <img src={carImg} alt="" />
            <h3>Lorem, ipsum dolor.</h3>
        </div>
    )
}