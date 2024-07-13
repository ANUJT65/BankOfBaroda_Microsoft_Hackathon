import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const ChatInput = () => {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <div className='bg-white rounded-full flex w-full h-10 justify-end'>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        sx={{ backgroundColor: '#FF5B2E', color: '#FFFFFF' }}
        startIcon={<CloudUploadIcon />}
      >
        <VisuallyHiddenInput type="file" />
      </Button>
      <input className='bg-white w-full h-10 px-5'></input>
      <Button variant="contained" sx={{ backgroundColor: '#FF5B2E', color: '#FFFFFF' }} endIcon={<SendIcon />}>
      </Button>
    </div>
  );
}

export default ChatInput;
