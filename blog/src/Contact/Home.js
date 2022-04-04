import React from 'react';
import '../style.css';
import ArticleComponent from './ArticleComponent'
import PostData from './data/post.json'

class Home extends React.Component{
constructor (props){
    super(props);
 
    this.state = {
        category : ""
    }
}

    render(){    
    return(
    
    
        PostData.map((index,item) =>{  
                                                                                               
            if(this.state.category == ""){

             
              return <ArticleComponent 
              key={item}
              title={index.title}
              description={index.description}
              currentCategory={this.state.category}
              source = {index.image}
              clickedCategory={()=> this.setState({category:index.category})}
              category ={index.category}
           />

            }else if (this.state.category ==  index.category){
    
                return <ArticleComponent 
                key={item}
                title={index.title}
                description={index.description}
                currentCategory={this.state.category}
                source = {index.image}
                clickedCategory={()=> this.state.category ==  index.category 
                    && this.setState({category:""})
              }
                category ={index.category}
            />

            }
       
      
    }) 

    )
 }

}

export default Home;
