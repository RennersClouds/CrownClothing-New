import CategoryItem from "../category-item/category-item.component";
import "../directory/directory.style.scss"


const Directory = ({categories})=>{

    return (
      <div className="categories-container">
        <CategoryItem category={categories} />

        {/* {categories.map((category)=>(<CategoryItem key={category.id} category={category}/>))}
         */}

         
      </div>
    );
}


export default Directory;

