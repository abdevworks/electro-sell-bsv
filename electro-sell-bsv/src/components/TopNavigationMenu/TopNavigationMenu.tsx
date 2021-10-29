import React from 'react';
import "../TopNavigationMenu/TopNavigationMenu.css";
import Brand from "../../images/brand.png";
import TopNavigationMenuCategories from "../TopNavigationMenuCategories/TopNavigationMenuCategories";

const TopNavigationMenu = () => {
    return(
<nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-lg">
        <div className="row w-100 d-flex align-items-center">
            <div className="col-lg-2 col-sm-3  d-flex justify-content-around align-items-center">
            <button type="button" className="navbar-toggler ms-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
                <a href="#" className="navbar-brand ms-2">
                    <img src={Brand} height="64" alt="ElectroSellBrand"/>
                </a>
            </div>

            <div className="col-lg-5 col-sm-4">
                <form className="d-flex" >
                    <div className="input-group ">                    
                        <input type="text" className="form-control" placeholder="Search" />
                        <button type="button" className="btn btn-secondary"><i className="bi-search"></i></button>
                    </div>
                </form>
            </div>


            <div className="col-lg-5 col-sm-5">
                <TopNavigationMenuCategories />
            </div>

            <div className="collapse navbar-collapse justify-content-between col-12" id="navbarCollapse">
                <div className="navbar-nav">
                
                </div>
            </div>
        </div>
    </div>
</nav>
    );
}

export default TopNavigationMenu;