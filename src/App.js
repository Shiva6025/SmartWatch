import React, {Component} from 'react';
import classes from'./App.module.css';

import ProductDetails from './ProductDetails';
import ProductPreview from './ProductPreview';
import Topbar from './Topbar';
import ProductData from './ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    showHeartBeatSection:false,
  }

  onColorOptionClick = (pos)=>{
    this.setState({currentPreviewImagePos:pos});
  }

  onFeatureItemClick = (pos) => {
    if(pos===1){
      this.setState({showHeartBeatSection:true})
    }else{
      this.setState({showHeartBeatSection:false})
    }
  }

  render(){
    return (
    <div className="App">
       <Topbar/>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
         <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
          showHeartBeatSection={this.state.showHeartBeatSection}
          onColorOptionClick={this.onColorOptionClick}/>
        </div>
        <div className={classes.ProductData}>
          <ProductDetails data={this.state.productData}
           onColorOptionClick={this.onColorOptionClick}
           currentPreviewImagePos={this.state.currentPreviewImagePos}
           onFeatureItemClick={this.onFeatureItemClick}
           showHeartBeatSection={this.state.showHeartBeatSection}/>
          </div>        
      </div>
    </div>
  )
}
}
export default App;