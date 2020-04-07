import React from "react";
import Profilepic from "./profilepic";
import Bioeditor from "./bioeditor";
import Favoriteartists from "./favoriteartists";
import Pictures from "./pictures";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container-profile">
                    <h2>Hello {this.props.first}</h2>
                    <div className="picbio">
                        <Profilepic
                            url={this.props.url}
                            showUploader={this.props.showUploader}
                            hideUploader={this.props.hideUploader}
                        />

                        <Bioeditor
                            bio={this.props.bio}
                            setBio={this.props.setBio}
                        />

                        <Favoriteartists
                            finishedUploadingPic={
                                this.props.finishedUploadingPic
                            }
                            hideUploaderPic={this.props.hideUploaderPic}
                        />
                        <Pictures
                            showUploaderPic={this.props.showUploaderPic}
                            hideUploaderPic={this.props.hideUploaderPic}
                            pic={this.props.pic}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
