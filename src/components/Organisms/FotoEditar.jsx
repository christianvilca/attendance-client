import React, { Component, Fragment } from 'react';
import AvatarEditor from 'react-avatar-editor'
import { apiDropbox } from 'helpers';

import Button from '../Molecules/Button.jsx'

class FotoEditar extends Component {

  state = {
    scale: 1,
    image: this.props.image
  }

  handleScale = (e) => {
    console.log('handleScale')
    this.setState({
      scale: e.target.value
    });
  }

  handleChange =()=>{
    console.log('handleChange')
    this.props.loadingEditar()
  }

  onClickSave = () => {
    //if (this.editor) {
      //const canvas = this.editor.getImage().toDataURL();
      const canvas = this.editor.getImageScaledToCanvas().toDataURL();
			//console.log('canvas', canvas)
			console.log(this.props)

      apiDropbox.uploadFile(canvas, this.props.codigo)
      /* .then( data => {
        //console.log('data', data)


			}); */
			apiDropbox.loadFile(this.props.codigo, "foto")
			.then(data => {
				console.log('data', data)

				/* var div = document.getElementById("foto")
				div.style.backgroundImage = 'url('+data+')' */
				var div = document.getElementById("foto1")
				//div.style.backgroundImage = 'url('+data+')'
				div.src = data
			});

      this.props.loadingEditar()
    //}
  }

  setEditorRef = (editor) => this.editor = editor

  render() {
    const { image } = this.state
    return (
      <div className="wrapper-modal">
        <div className="card-modal">
          <div className="camera-modal">
            <AvatarEditor
              ref={this.setEditorRef}
              className="avatar-editor"
              image={image}
              width={260}
              height={320}
              border={50}
              //borderRadius={100}
              color={[0, 0, 0, 0.6]} // RGBA
              scale={1.2}
							rotate={0}
							//style={{width: '100%', heigth: '100%', }}
              scale={Number(this.state.scale)}
            />
            <div className="slider-padre">
              <i className="fa fa-photo"></i>
              <input onChange={this.handleScale} className="slider" name="scale" type="range" step="0.01" min="1" max="2" defaultValue="1" ></input>
              <i className="fa fa-photo fa-lg"></i>
            </div>
            <div className="content align-right">
              {/* <button className="button-secondary" onClick={this.handleChange} >Cancelar</button>
              <button className="button-success" onClick={this.onClickSave} >Guardar</button> */}
							<Button className="align-right" onClick={this.onClickSave} >Guardar</Button>
							<Button className="btn-secondary align-right" onClick={this.handleChange}>Cancelar</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FotoEditar;
