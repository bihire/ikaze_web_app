import React, { Component } from 'react';
import AddPhotoAlternateIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import './imageUploader.scss';

const useStyles = theme => ({
    uploadIcon: {
        fontSize: "3.5rem",
        fontWeigth: "600",
        color: "#fff"
    },

});


class ImageUpload extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onRemove(index) {
        var { files, urls } = this.props;
        let newFiles = files.filter((file, i) => i !== index);
        let newUrls = urls.filter((url, i) => i !== index);

        this.props.setState({
            files: newFiles,
            urls: newUrls
        })
    }

    handleDrags(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.setState({
            isDragging: true
        })
    }

    handleDragEnter(e) {
        this.handleDrags(e);
    }

    handleDragOver(e) {
        this.handleDrags(e);
    }

    handleDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.setState({
            isDragging: false
        })
    }

    onChange(e) {
        e.preventDefault()
        const files = e.target.files;

        [].forEach.call(files, this.handleFiles);
    }

    handleDrop(e) {
        e.stopPropagation();
        e.preventDefault();

        const data = e.dataTransfer;
        const files = data.files;

        [].forEach.call(files, this.handleFiles);

        this.props.setState({
            isDragging: false
        })
    }

    handleFiles(file) {

        var reader = new FileReader();

        reader.onloadend = () => {

            var imageUrl = window.URL.createObjectURL(file);
            console.log(imageUrl);
            this.props.setState({
                files: [file, ...this.props.files],
                urls: [imageUrl, ...this.props.urls]
            })
        }

        reader.readAsDataURL(file);
    }

    render() {
        
        const { classes } = this.props;
        const { urls, files, isDragging } = this.props;
        const dropClass = isDragging ? "dragDrop dragging" : "dragDrop";

        return (
            <div className="ImageUploader_container">
                <div className="uploadInput" >

                    <div className={dropClass}
                        onDrop={this.handleDrop}
                        onDragOver={this.handleDragOver}
                        onDragEnter={this.handleDragEnter}
                        onDragLeave={this.handleDragLeave} >
                        
                        {
                            urls && (urls.map((url, i) => (
                                <div className="previewItem">
                                    <div className="imagePreview">
                                        <img className="imagePreview_image" src={url} />

                                    </div>
                                    <div className="details">
                                        <h6>{files[i].name}</h6>
                                        <div className="details_info">
                                            <div className="details_info_size"> {files[i].size.toLocaleString()} KBs</div>
                                            <div className="details_info_delete"><i className="material-icons"
                                                onClick={() => this.onRemove(i)}>delete</i>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )))
                        }
                        <div className="inside">
                            <label class="custom-file-upload">
                                <input type="file"
                                    onChange={this.onChange}
                                    accept="image/*"
                                    multiple
                                />
                                <AddPhotoAlternateIcon className={classes.uploadIcon} />
                            </label>
                            
                            {/* <div>
                                <i className="material-icons">file_upload</i>
                            </div> */}
                        </div>
                        <div className="ImageUploader_container_description">
                            <div className="ImageUploader_container_description_box">
                                <h5 className="h5_text_description">Provide some more images describing more the above product</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="invalid_input">{this.props.error}</div>
                {/* <div className="imagePreviewContainer">
                    
                </div> */}
            </div>
        );
    }
}

ImageUpload.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(ImageUpload);