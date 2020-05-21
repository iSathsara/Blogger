import React, {Component} from "react";
import Table from "./components/tables/Table";
import _findIndex from "lodash.findindex";
import EditingForm from "./components/EditingForm";
import "./App.css";


class App extends Component {


  constructor(props) {
    super(props);


    this.state = {
      formData:[],
      currentData:[],
      editFormData:[]
    };

 }


 listening = (event) => {
   this.setState({
      currentData: {
        ...this.state.currentData,
        [event.target.name]:event.target.value
      }
   }, ()=>{
     console.log(this.state.currentData);
   })

 };


 onSubmitFn = () => {
   this.setState({
      formData:[
          ...[this.state.currentData],
          ...this.state.formData,

      ]
   }, ()=>{
     console.log(this.state.formData);
   })
   console.log('article added');
   document.getElementById("create-article").reset();

 };


deleteFn = (id) => {
   let tempData = this.state.formData;
   let record = _findIndex(tempData, {title:id});

   tempData.splice(record, 1);
   this.setState({
       formData: tempData
   })

    alert("This article will delete");
   console.log('article deleted');

};


editFn = (id) => {
    let tempData = this.state.formData;
    let record = _findIndex(tempData, {title:id});

    this.setState({
        editFormData: tempData[record]
    },()=>{
        console.log(this.state.editFormData)
    })
};

setUpdatedData = (data) => {
    let tempData = this.state.formData;
    let record = _findIndex(tempData, {title:data.title});

    tempData.splice(record, 1, data);
    this.setState({
        formData: tempData
    })
    console.log('article updated');

};

  render() {



    return(

        <div className={"container"} style={{padding:10}}>

            <div style={{textAlign:"center"}}>
                <h1>The Blogger </h1>
            </div>
            <hr/>
            <h3>Create new article </h3>
            <br/>

                <div className={"row"}>

                        <div className={"col"}>

                            <form id="create-article">

                                <div className="form-group">
                                    <label style={{fontWeight:"normal", fontSize:"x-large"}}>Title</label>
                                  <input type="text" required className="form-control border border-primary" name={"title"} onChange={(event) => this.listening(event)}/>
                                </div>

                                <div className="form-group">
                                  <label style={{fontWeight:"normal", fontSize:"x-large"}}>Article</label>
                                  <textarea className="form-control border border-primary" name={"article"} onChange={(event) => this.listening(event)} style={{height:170}}/>
                                </div>

                                <div className="form-group">
                                  <label style={{fontWeight:"normal", fontSize:"x-large"}}>Author</label>
                                  <input type="text" className="form-control border border-primary" name={"author"} onChange={(event) => this.listening(event)}/>
                                </div>


                                <button type="button" className="btn btn-primary" name={"submitBtn"} onClick={()=> this.onSubmitFn()}>Publish article</button>

                            </form>

                        </div>


                        <div className="w-100"/>
                        <br/>
                        <hr/>
                        <br/>

                        <div className={"col"}>

                            <h3> Published Articles </h3>
                            <hr/>
                            <br/>

                                  <Table

                                      TableBodyValues={this.state.formData}
                                      isAction={true}
                                      deleteFn={(event)=> this.deleteFn(event.id)}
                                      editFn={(event)=> this.editFn(event.id)}
                                      editBtnOtherProps={{
                                          "data-toggle":"modal",
                                          "data-target":"#EditTemplateId"
                                      }}

                                  />

                        </div>


                      <EditingForm
                          editData = {this.state.editFormData}
                          setUpdatedData={(data) => this.setUpdatedData(data)}
                      />
                </div>


        </div>



    )
  }

}

export default App;

