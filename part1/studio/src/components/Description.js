import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.foodandwine.com/author/alain-ducasse";
    let authorPhoto = "https://www.foodandwine.com/thmb/pc4TteuaY5pzu6YoaBsQinn6JNw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/original-2013-a-chef-365-alain-ducasse-8be78ef5275547eab4bbb8f290cc2358.jpg";
    let authorName = "Alain Ducasse";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Famed French chef Alain Ducasse" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Food & Wine Bio</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
       return(
        <div> 
            <div>
                <h1>Bittersweet-Chocolate Tart</h1>
                <p>This outrageously elegant tart is from Alain Ducasse's Manhattan restaurant Benoit.</p>
            </div>
            <RecipeAuthor />
        </div>
       );
    }
 }

export default RecipeDescription;