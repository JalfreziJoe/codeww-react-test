import Nav from '../UI/nav/Nav';
import classes from './Products.module.css';
import useHttp from '../hooks/use-http';
import { useState, useEffect } from 'react';
import ProductPanel from '../UI/ProductPanel/ProductPanel';

const Products = () => {
    const [productData, setProductData] = useState([]);
    const [isLoading, error, requestData] = useHttp();
    const [navItems, setNavItems] = useState([]);
    const [selectedNav, setSelectedNav] = useState(-1);
    useEffect(() => {
        const transformData = (data) => {
            const products = [];
            const navNames = [];
            Object.keys(data).forEach(key => {
                navNames.push(key);
            });
            setNavItems(navNames);
            setSelectedNav(0);
            products.push(data.chairs);
            products.push(data.sofas);
            setProductData(products);
        }

        requestData({url:'./products.json'},transformData)
    }, [requestData]);

    const navClickHandler = id => {
        if (id === selectedNav) {
            return;
        }

        setSelectedNav(id);
    }
    return (
        <div className={classes.Products}>
            <h1>What item are you<br />looking for?</h1>
            {(isLoading && error)? (<div className={classes.loading}><div class="lds"><div></div><div></div><div></div></div></div>)
            :
                <>
                {(navItems.length >0 ) &&<Nav navItems={navItems} selectedNav={selectedNav} click={navClickHandler} />}
                
                {(productData.length >0) && (
                    
                    productData.map((products, index) => (
                        <ProductPanel key={index} products={products} id={navItems[index]} selected={(index === selectedNav)?true:false} direction={(selectedNav>index)?'left':'right'} />
                    )))
                    }
                
                </>
            }
        </div>
    )
}

export default Products;