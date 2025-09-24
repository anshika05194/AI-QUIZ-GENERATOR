import { useState } from 'react';

export const useFileUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const uploadFile = async (file, uploadFunction) => {
    setUploading(true);
    setUploadError(null);
    
    try {
      const result = await uploadFunction(file);
      return result;
    } catch (error) {
      setUploadError(error.message);
      throw error;
    } finally {
      setUploading(false);
    }
  };

  return { uploadFile, uploading, uploadError };
};