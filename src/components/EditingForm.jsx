import React,{Component} from "react";
import Form from "./Edit form/EditTemplate";

class EditingForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            formData:{
                title: "",
                article: "",
                author: "",
            }
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.editData.title !== this.props.editData.title) {
            this.setState({
                formData: this.props.editData
            })
        }
    }

    listening = (event) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]:event.target.value
            }
        }, ()=>{
            console.log(this.state.formData);
        })

    };

    setUpdatedData = () => {
      this.props.setUpdatedData(this.state.formData);
    };

    render() {

        return(
            <Form modalId={"EditTemplateId"} onSaveFn={this.setUpdatedData}>

                <form>

                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" name={"title"} value={this.state.formData.title} onChange={(event) => this.listening(event)}/>
                    </div>

                    <div className="form-group">
                        <label>Article</label>
                        <textarea type="text" className="form-control" name={"article"} value={this.state.formData.article} onChange={(event) => this.listening(event)}/>
                    </div>

                    <div className="form-group">
                        <label>Author</label>
                        <input type="text" className="form-control" name={"author"} value={this.state.formData.author} onChange={(event) => this.listening(event)}/>
                    </div>



                </form>

            </Form>
        )

    }

}
export default EditingForm;
