import React from "react"
import { httpImage, httpGet } from "../methods/axios";
import { addAlert } from "../actions/main";
import { closeImageUpload } from "../actions/maid";

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
    }

    _handleSubmit(e) {
        e.preventDefault();
        httpGet("maidid")
        .then(res=>{
            return httpImage(res.data, this.state.file)
        })
        .then(res=>{
            addAlert(true, "Image uploaded successfully")
            closeImageUpload()
        })
        .catch(err=>{
            addAlert(false, "Something went wrong")
        })
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} width="512px" style={{maxWidth:"90%"}} alt="Preview"/>);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <div className="previewComponent w3-center w3-margin">
                <form onSubmit={(e) => this._handleSubmit(e)}>
                    <input className="w3-input"
                        type="file"
                        onChange={(e) => this._handleImageChange(e)} />
                    <button className="w3-button w3-margin"
                        type="submit"
                        onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
                </form>
                <div className="imgPreview w3-center w3-margin">
                    {$imagePreview}
                </div>
            </div>
        )
    }
}

export default ImageUpload