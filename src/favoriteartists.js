import React from "react";
import axios from "./axios";
import Pictures from "./pictures";

export default class Favoriteartists extends React.Component {
    constructor(props) {
        super(props);
        this.state = { image: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.finishedUploadingPic = this.finishedUploadingPic.bind(this);
    }

    componentDidMount() {
        axios.get("/getimages").then(({ data }) => {
            console.log("getpictures GET /users results: ", data);
            this.setState({
                image: true
            }).catch(err => {
                console.log("getpictures GET /users catch err: ", err);
            });
        });
    }

    handleChange(event) {
        this.setState({ image: event.target.files[0] });
    }

    handleSubmit(event) {
        event.preventDefault();
        const imageFile = this.state.image;

        var formData = new FormData();
        formData.append("file", imageFile);

        axios
            .post("/uploadpic", formData)
            .then(response => {
                this.props.finishedUploadingPic(
                    response.data.result.rows[0].pic
                );
            })
            .catch(function(err) {
                console.log("err in POST /upload: ", err);
            });
    }

    render() {
        const { image } = this.state;

        return (
            <div className="Postpic">
                <h3>Do you want to add pictures of your favorite artists?</h3>
                <form id="uploader-form" onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type="file"
                        name="file"
                        accept="image/*"
                    />
                    <button type="submit">Upload</button>
                </form>
            </div>
        );
    }
}
