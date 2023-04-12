import './Row.css';
import { Card } from '../Card/Card';

export const Row = ({title}) => {
    return(
        <>
        <div className='row'>
            <h2>{title}</h2>
            <Card />
        </div>

        
        </>
    )
}
