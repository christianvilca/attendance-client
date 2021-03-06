import React, { Component } from 'react';
import AvatarEditor from 'react-avatar-editor'
import Button from '../Molecules/Button.jsx'

class FotoEditar extends Component {

  state = {
    scale: 1,
    imageModal: this.props.imageModal
  }

  handleScale = (e) => {
    console.log('handleScale')
    this.setState({
      scale: e.target.value
    });
  }

  handleChange =()=>{
    console.log('handleChange')
    this.props.toogleModal()
  }

  onClickSave = () => {
		this.props.setImage(this.editor.getImageScaledToCanvas().toDataURL())
		this.props.toogleModal()
  }

  setEditorRef = (editor) => this.editor = editor

  render() {
    const { imageModal } = this.state
    return (
      <div className="wrapper-modal">
        <div className="card-modal">
          <div className="camera-modal">
            <AvatarEditor
              ref={this.setEditorRef}
              className="avatar-editor"
              image={imageModal}
              width={260}
              height={320}
              border={50}
              //borderRadius={100}
              color={[0, 0, 0, 0.6]} // RGBA
              scale={1.2}
							rotate={0}
							//style={{width: '100%', heigth: '100%', }}
              //scale={Number(this.state.scale)}
            />
            <div className="slider-padre">
              <i className="fa fa-photo"></i>
              <input onChange={this.handleScale} className="slider" name="scale" type="range" step="0.01" min="1" max="2" defaultValue="1" ></input>
              <i className="fa fa-photo fa-lg"></i>
            </div>
            <div className="content align-right">
              {/* <button className="button-secondary" onClick={this.handleChange} >Cancelar</button>
              <button className="button-success" onClick={this.onClickSave} >Guardar</button> */}
							<Button className="align-right" onClick={this.onClickSave} >Aceptar</Button>
							<Button className="btn-secondary align-right" onClick={this.handleChange}>Cancelar</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FotoEditar;
