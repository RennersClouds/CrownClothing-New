import './category-item.styles.scss'

const CategoryItem = ({category}) =>{

    // const {imageUrl, title} = category



    return (
               

                   category.map((arr)=>{
                        
                        return(
                            
                            <div className="category-container" key={arr.id}>
            
                                        <div
                                        className="background-image"
                                        style={{ backgroundImage: `url(${arr.imageUrl})` }}
                                        />
                                        <div className="category-body-container">
                                        <h2>{arr.title}</h2>
                                        <p>Shop Now</p>
                                        </div>
            
                            </div>
            
                                )
            
            
                         })


               

             
             
            

    );
};

export default CategoryItem