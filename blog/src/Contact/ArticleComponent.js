import React from "react";
import '../style.css';

class ArticleComponent extends React.Component{
    constructor(props) {
        super(props);
        // Don't do this!
        this.state = {
           category: ""
        }
    }       

   render(){
  
       return (
  
       <div className='home'>
       
       <img src={this.props.source}
       alt="Lamp" width="500" height="350"/>
       <h1>{this.props.title}</h1>

       <h2 class={this.props.category == this.props.currentCategory && "red" } 
       onClick={this.props.clickedCategory}>{this.props.category}</h2>

       <p>{this.props.description}</p>

        </div>
    );
  }
}
export default ArticleComponent;



