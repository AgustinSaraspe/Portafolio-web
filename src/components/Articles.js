import "./ArticlesStyles.css";
import {FaDatabase} from "react-icons/fa";

const Articles = () =>{
    return(
       <div className="article">
           <div className="container">
              <div className="outline">
                   <div className="content">
                       <i><FaDatabase/> Staxx</i>
                       <p className="body">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                       </p>
                       <div className="name">
                          <p>Marie Chilvers</p> 
                          <p>CEO, IMPORTANT</p>
                       </div>
                   </div>
              </div>
           </div>
       </div>
    );
};

export default Articles;