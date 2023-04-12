import './Card.css';
import image from '../../../Assets/image.jpg';

export const Card = ({ arr = [
    {
    img: image
    },

    {
        img: image
    },
    
    {
        img: image
    },

    {
        img: image
    },

    {
        img: image
    },

    {
        img: image
    },

    {
        img: image
    },

]}) => {
    return(
        <div className="card">
            {
                arr.map((item, index) => {
                   return(
                    <div className="image" key={index}>
                        <img src={item.img} alt="movie" />
                    </div>
                    )        
                })
            }
        </div>
    )
}