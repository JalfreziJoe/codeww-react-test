import classes from './NavItem.module.css';

const NavItem = ({id, navName, isSelected, click}) => {
    
    return (
        <div className={classes.container} onClick={()=> click(id)}>
        <div className={`${classes.navName} ${isSelected && classes.isSelectedName}`}>{navName}</div>
        <div className={classes.navDot}><div className={`${classes.dot} ${isSelected && classes.isSelectedDot}`}></div></div>
        </div>
    )
}

export default NavItem;