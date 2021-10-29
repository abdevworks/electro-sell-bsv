import "../TopNavigationMenuCategories/TopNavigationMenuCategories.css";

const TopNavigationMenuCategories = () => {
    return (
        <div className="nav justify-content-between">
            <a href="#" className="nav-item nav-link  border-end text-truncate active "><span className="bi-headphones"></span> Help & Contact</a>
            <a href="#" className="nav-item nav-link  text-truncate"><span className="bi-person"></span> <div>Profile</div></a>
            <a href="#" className="nav-item nav-link  text-truncate"><span className="bi-heart"></span> Wish List</a>
            <a href="#" className="nav-item nav-link  text-truncate"><span className="bi-cart"></span> Basket</a>
        </div>
    );
}

export default TopNavigationMenuCategories;