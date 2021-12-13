import Product from '../Product/Product';
import classes from './ProductPanel.module.css';

const ProductPanel = ({products, id, selected, direction}) => {
    const selectedClasses = (selected)?`${classes.container} ${classes.selectedPanel}`:`${classes.container} ${classes['unSelectedPanel-'+direction]}`
    return (
        <div className={selectedClasses}>
            {products.map(item => (
                <Product key={item.id} name={item.name} id={id} price={item.price} />
            ))}
        </div>
    )
}

export default ProductPanel;