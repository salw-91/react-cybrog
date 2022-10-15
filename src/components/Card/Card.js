import './Card.css'
import { FaStar, FaDownload } from "react-icons/fa";

const Card = (props) => {
    return (
        <div className='most-popular-item'>
            <div className='card-wrapper'>
                <img className='most-popular-item-image' src={props.image} />
                <div className='most-popular-item-content' >
                    <h4 className='most-popular-item-title'>
                        {props.title} <br />
                        <span>{props.category}</span>
                    </h4>
                    <ul>
                        <li><FaStar style={{ color: "var(--color-icons)" }} /> <spam>{props.rate}</spam></li>
                        <li><FaDownload style={{ color: "var(--color-primary)" }} /> <spam>{props.download}</spam></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
