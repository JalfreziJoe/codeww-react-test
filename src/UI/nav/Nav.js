import NavItem from "./NavItem";
import classes from './Nav.module.css';
const Nav = ({navItems, selectedNav, click}) => {
    return (
        <div className={classes.container}>
            {navItems.map((item, index) => (
                <NavItem key={item} navName={item} isSelected={(index === selectedNav)?true:false} id={index} click={click} />
            ))}
        </div>
    )
}

export default Nav;