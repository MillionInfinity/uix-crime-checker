import React, {Component} from 'react';
import './PrimaryContainer.css';
import MapContainer from './MapContainer';
import Filter from './Filter';
import ListData from './ListData';
// console.log('hi mu mu')
class PrimaryContainer extends Component {
// console.log('hi mu mu');
  constructor(props) {
super(props);
 this.state = {
   objResult:[],
   policeLoaded:false,
   error:null,
 }
 this.getPolice=this.getPolice.bind(this);
//  this.handleChange = this.handleChange.bind(this);
//  this.handlesubmitpro = this.handlesubmitpro.bind(this);
}

    getPolice(){

        fetch(`https://data.nashville.gov/resource/28i3-48zr.json?block=0`,{
        method: "GET",
        data: {
          "$limit" : 5000,
          "$$app_token" : "r1zPUd6qffmC6asW1Y8pPPhuj"
        },
         header: {
        "Access-Control-Allow-Origin" : "*"
   }
        }).then((result) => {
            console.log("my result",result);
            result.json().then((resolved) => {
                // console.log("Test first return ", resolved);
                let objResults=[];
               resolved.map((item, index)=>{
                   objResults.push({
                         block: item.block,
                         call_received:item.call_received,
                         complaint:item.complaint,
                         description:item.description,
                         disposition_code:item.disposition_code,
                         disposition_description:item.disposition_description,
                         event_number:item.event_number,
                         latitude:item.latitude,
                         longitude:item.longitude,
                         mapped_location:item.mapped_location,
                         rpa:item.rpa,
                         sector:item.sector,
                         shift:item.shift,
                         street_name:item.street_name,
                         tencode:item.tencode,
                         tencode_suffix:item.tencode_suffix,
                         tencode_suffix_description:item.tencode_suffix_description,
                         unit_dispatched:item.unit_dispatched,
                         zone:item.zone,

                    })
                });
                console.log("above the set state ", objResults);
        this.setState({
                objResult:objResults,
                policeLoaded: true,
                //   block:item.block,
                //   call_received:item.call_received,
                //   complaint:item.complaint,
                //   description:item.description,
                //   disposition_code:item.disposition_code,
                //   disposition_description:item.disposition_description,
                //   event_number:item.event_number,
                //   latitude:item.latitude,
                //   longitude:item.longitude,
                //   mapped_location:item.mapped_location,
                //   rpa:item.rpa,
                //   sector:item.sector,
                //   shift:item.shift,
                //   street_name:item.street_name,
                //   tencode:item.tencode,
                //   tencode_suffix:item.tencode_suffix,
                //   tencode_suffix_description:item.tencode_suffix_description,
                //   unit_dispatched:item.unit_dispatched,
                //   zone:item.zone,
                    });

            });
        });

          }
    componentDidMount() {
        this.getPolice();
    }
  render(){
 
              return(
            <div className="primary">
                <p>{this.state.description}</p>
            </div>
        );
    }
}


export default PrimaryContainer;
