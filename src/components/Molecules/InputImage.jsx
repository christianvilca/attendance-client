import React, { useState, useEffect } from 'react';
import Icon from '../Atoms/Icon.jsx';
import InputFiles from 'react-input-files';
import FotoEditar from '../Organisms/FotoEditar.jsx'
import Spinner from '../Atoms/Spinner.jsx'
import Modal from '../Organisms/Modal.jsx';
import { apiDropbox } from 'helpers';

const InputImage = ({...props}) => {
	const [ isOpen, setIsOpen ] = useState(false);
	const [ image, setImage ] = useState('');
	const [ imageModal, setImageModal ] = useState('');
	const [ spinner, setSpinner ] = useState(false);

	const { value, id } = props

	let codigo = ''

	if (value === 'true') {
		codigo = id
	} else {
		codigo = 'undefined'
	}

	useEffect(() => {
		setSpinner(true)
    apiDropbox.loadFile(codigo)
			.then(data => {
				setImage(data)
				setSpinner(false)
			});
  }, [codigo])

	const toogleModal = () => {
		setIsOpen(!isOpen)
  }

  const handleChange = (files) => {
    if (FileReader && files && files.length) {
				var fr = new FileReader();
        fr.onload = function () {
					setImageModal(fr.result)
					toogleModal()
        }
        fr.readAsDataURL(files[0]);
		}
	}

	return (
		<div className="image">
			{isOpen &&
				<Modal>
					<FotoEditar
						toogleModal={toogleModal}
						imageModal={imageModal}
						codigo={codigo}
						setImage={setImage}
						setSpinner={setSpinner}
					/>
				</Modal>
			}
			<label className="image__label" >Imagen</label>
			<InputFiles onChange={handleChange} style={{ width: '100%' }} accept="image/png,image/jpg,image/jpeg">
				<input name="image"  type="hidden" {...props} />
				<a href="#" className="image__box">
					{spinner && <Spinner classes="spinner-container" />}
					<img id="foto1" loading='lazy' alt="Usuario" src={image} />
					<div className="image__icon">
						<Icon svg="image" className="class-svg" title="image" />
						<label className="image__label">Imagen</label>
					</div>
				</a>
			</InputFiles>
		</div>
	);
};

export default InputImage;
