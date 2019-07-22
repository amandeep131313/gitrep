import React from 'react';
import Modal from 'react-responsive-modal';
class  ProductDescription extends React.Component {
    constructor(props){
        super(props);
            this.state={
             show:false
            }
            this.description = ''
        }
        showModal = (e,desc)=>{
          this.setState({
            show:true
          });
          this.description = desc
        } 
        clickOnBuy=() =>{
          console.log('index')
            this.props.setclickOnBuy(1);
            this.setState({
              show:false
            });
        }
        onCloseModal=()=>{
          this.setState({
            show:false
          });
        }
        render(){
            let rows = [];
            this.props.data.items.forEach((productinfo)=>{
                rows.push(
                        <div className="col-md-4">
                        <div class="card">
                                     <div class="card-body">
                                   <div className="card-body-model text-center">
                                      <h2>{productinfo.model}</h2>
                                   </div> 
                                   <div className="card-body-model text-center">
                                      <h2>{productinfo.price} </h2>
                                   </div>  
                                   <div className="card-description">
                                      <input onClick={e=>this.showModal(e,productinfo.description)} className="form-control primary-button" value="Show description" type="button"></input>
                                   </div>
                                   <div className="card-description">
                                      <input className="form-control primary-button" onClick={e=>this.clickOnBuy(e)} value="Buy" type="button"></input>
                                   </div>
                                     </div>
                </div>
                             
                        </div>
                )
            });
        return (
          <div className="model-description">
            <div className="type-of-model">
               <h2> {this.props.data.product} </h2>
            </div>
            <div className="row">
               {rows}
            </div>
          <Modal id="showmodal" center classNames={{top:'50px',width:'60px'}} open={this.state.show} onClose={this.onCloseModal}>
            <div className="card-description">
              <h1>{this.description}</h1>
             </div> 
              <div className="card-description">
                <input className="form-control primary-button" onClick={e=>this.clickOnBuy(e)} value="Buy" type="button"></input>
                </div>
         </Modal>
          </div>
        );
      }

}
export default ProductDescription;
