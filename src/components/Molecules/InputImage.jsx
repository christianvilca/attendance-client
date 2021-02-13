import React, { useState, useEffect } from 'react';
import Icon from '../Atoms/Icon.jsx';
import InputFiles from 'react-input-files';
import FotoEditar from '../Organisms/FotoEditar.jsx'
import Spinner from '../Atoms/Spinner.jsx'
import Modal from '../Organisms/Modal.jsx';
import { apiDropbox } from 'helpers';

const InputImage = ({onClick, value, toogleModal, ...props}) => {
	const [ loadingEditar, setLoadingEditar ] = useState(false);
	const [ image, setImage ] = useState('');
	const [ imageModal, setImageModal ] = useState('');
	const [ spinner, setSpinner ] = useState(false);

	const { codigo } = props

	useEffect(() => {
		setSpinner(true)
    apiDropbox.loadFile(codigo)
			.then(data => {
				setImage(data)
				setSpinner(false)
			});
  }, [codigo])

	const handleLoadingEditar = (event) => {
		//this.setState({ loadingEditar: false });
		setLoadingEditar(false)
		//setSpinner(false)
  }

  const handleChange = (files, evt) => {
		//setSpinner(true)
    //console.log("files",files)
    //console.log("e",evt.target)
    var tgt = evt.target || window.event.srcElement,
      files = tgt.files;

    // FileReader support
    const scope = this
    if (FileReader && files && files.length) {
				var fr = new FileReader();
				/* console.log("fr.result", fr)
				console.log("fr.result", fr.result) */
        fr.onload = function () {
					setImageModal(fr.result)
					setLoadingEditar(true)
          /* scope.setState({ image: fr.result });
          scope.setState({ loadingEditar: true }); */
          console.log(fr.result)
        }
        fr.readAsDataURL(files[0]);
		}
		//scope.setState({ loadingEditar: true });
	}

	return (
		<div className="image" onClick={onClick}>
			{loadingEditar &&
			<Modal>
				{(toogleModal) => <FotoEditar loadingEditar={handleLoadingEditar} imageModal={imageModal} codigo={codigo} setImage={setImage} setSpinner={setSpinner} />}
			</Modal>
			}
			<label className="image__label" >Imagen</label>
			<InputFiles onChange={handleChange} style={{ width: '100%' }} accept="image/png,image/jpg,image/jpeg">
				{/* <div id="foto"> */}
				<input name="image"  type="hidden" {...props} />
				<a href="#" className="image__box">
					{spinner && <Spinner classes="spinner-container" />}
					<img id="foto1" loading='lazy' alt="Usuario" src={image} />
					<div className="image__icon">
						<Icon svg="image" className="class-svg" title="image" />
						<label className="image__label">Imagen</label>
					</div>
				</a>
				{/* </div> */}
			</InputFiles>

		</div>
	);
};

export default InputImage;
