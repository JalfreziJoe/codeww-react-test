import classes from './Product.module.css';

const Product = ({name, price, id}) => {
    const nameLower = name.toString().toLowerCase();

    return (
        <div className={`${classes.container} ${classes['background-'+nameLower+'-'+id]}`}>
            <div className={`${classes.image} ${classes[nameLower+'-'+id]}`}>       
            </div>
            <h1 className={classes.title}>{name}</h1>
            <div className={`${classes.price} ${classes[nameLower+'-'+id+'-price']}`}>£{price}</div>
        </div>
    )
}

export default Product;