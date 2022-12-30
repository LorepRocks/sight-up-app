import React, { useEffect, useState } from 'react';
import { Modal, Box, Typography, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FaceIcon from '@mui/icons-material/Face';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


import styles from "../../styles/Dialog.module.css";

const SelectImage = ({ open, handleClose, setOpenAvatar, setImage}) => {

    let fileInput = React.createRef(); 
    const [values, setValues] = useState({
        imagePreviewUrl: "", 
        picFile: null
     })

     useEffect(() => {
        console.log(values)
        setImage(values.imagePreviewUrl)
        handleClose()
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [values])

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-40%, -3%)",
        width: 150,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 18,
        pt: 4,
        pb:2,
        pl:2,
        pr:3,
    };

    const handleSelectAvatar = () => {
        handleClose();
        setOpenAvatar(true);
    }
    const handleSelectImage = () => {
        //handleClose();
        fileInput.current.click();
    }

    const handleImageChange = (e) => {
        let reader = new FileReader();
        let inFile = e.target.files[0];
        //console.log(inFile);
        reader.onloadend = () => {
            setValues({...values, 
                picFile: inFile, 
                imagePreviewUrl: URL.createObjectURL(inFile)
            });
        }
        reader.readAsDataURL(inFile);
    }

    return (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          hideBackdrop
        >
          <Box sx={style}>
            <CloseIcon
              fontSize="14"
              className={styles.closeIcon}
              onClick={handleClose}
            />
            <Box className={styles.optionsContainer}>
               <Box className={styles.options} onClick={handleSelectAvatar}>
                    <FaceIcon   
                        id="faceIcon"
                        fontSize="18"
                        className={styles.faceIcon}
                    />
                    <Typography variant="subtitle2">Select an Avatar</Typography>
               </Box>
               <Divider sx={{ mt: 1 }}/>
               <Box className={styles.options} onClick={handleSelectImage}>
                    <AddAPhotoIcon   
                        id="faceIcon"
                        fontSize="18"
                        className={styles.faceIcon}
                    />
                    <Typography variant="subtitle2">Select an Image</Typography>
                    <input 
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e)}
                        ref={fileInput} 
                        className={styles.hidden}
                    />
               </Box>
            </Box>
          </Box>
        </Modal>
      );
}

export default SelectImage;