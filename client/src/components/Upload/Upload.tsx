import React, { useEffect, useMemo, useRef, useState } from 'react';

import './Upload.scss';

export const Upload = () => {
  const [, setSelectedFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState<string | null>();

  const filePicker = useRef<HTMLInputElement>(null);
  const fileReader = useMemo(() => {
    return new FileReader();
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const target = e.dataTransfer as DataTransfer;
    const file: File = (target.files as FileList)[0];
    if (file) {
      setSelectedFile(file);
      fileReader.readAsDataURL(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    if (file) {
      setSelectedFile(file);
      fileReader.readAsDataURL(file);
    }
  };

  const handlePick = () => {
    filePicker?.current?.click();
  };

  useEffect(() => {
    fileReader.onloadend = () => {
      setFileUrl(fileReader.result?.toString());
    };
  }, [fileReader]);

  return (
    <div className="upload">
      <h6>Upload</h6>
      <div className="upload-wrapper">
        {!fileUrl ? (
          <div
            className="upload-content"
            onClick={handlePick}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept="image/*, .png, .jpg, .gif, .web"
              onChange={(e) => {
                return handleFileSelect(e);
              }}
              ref={filePicker}
              className="hidden"
            />
            <img src="/svg/upload.svg" alt="upload" />
            <h5>Upload</h5>
          </div>
        ) : (
          <div className="upload-image" onClick={handlePick}>
            <input
              type="file"
              accept="image/*, .png, .jpg, .gif, .web"
              onChange={(e) => {
                return handleFileSelect(e);
              }}
              ref={filePicker}
              className="hidden"
            />
            <img src={fileUrl} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};
