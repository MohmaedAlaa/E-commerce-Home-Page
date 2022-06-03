import React, {Component} from "react";
import App from "./popup";


class OurCharitiesPageOne extends Component {


    render (){
        const {data} = this.props;
        return (
            
            <div id='OurCharities-section' key={data.id}>
                <div className="container-OurCharities">
                    <div className="OurCharities-content">
                        <div className="OurCharities-content-overlay"></div> 
                        <img className="OurCharities-content-image"  src={`https://testing.mytreety.com/${data.image}`} alt='img - charity'></img>
                        <div className="OurCharities-content-details">
                            <h3 className="OurCharities-content-title">{data.name}</h3>
                            <p className="OurCharities-content-text">{data.description} </p>
                            <App ourCharityName={data.name} ourCharityDescription={data.description}></App>
                        </div>
                    </div>
                </div>
            </div>
            
          )
    }
    
}
export default OurCharitiesPageOne