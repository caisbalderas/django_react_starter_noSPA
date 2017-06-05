var React = require('react');

module.exports = React.createClass({
   render: function(props){
       return (
           <div className="container">
               <div className="starter-template">
                   <h1>Django React Starter</h1>
                   <p className="lead">{this.props.message}</p>
               </div>
           </div>
       );
   }
});