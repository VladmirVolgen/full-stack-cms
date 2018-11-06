import React from 'react';
import UserArticlePreview from '../../components/User/UserArticlePreview';


const UserArticlesContainer = ({user}) => {
    
    if (!user) {
        return null
        
    }

    const articles = user.articles;
 

    //remember to add delete button here
    return (
        <div>
            <h3>We will need to add another ArticlePreview leading to edit</h3>
             <UserArticlePreview articles={articles} user={user} />
        </div>
       

    
    );
}

export default UserArticlesContainer;