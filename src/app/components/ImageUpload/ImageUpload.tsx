import { mdiUpload } from '@mdi/js';
import Icon from '@mdi/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { FileService } from 'enzomoraes-alganews-sdk';
import Button from '../Button/Button';
import Loading from '../Loading';
import * as IU from './ImageUpload.styles';

export interface ImageUploadProps {
  label: string;
  onImageUpload: (imageUrl: string) => any;
  preview?: string;
}

function ImageUpload(props: ImageUploadProps) {
  const [filePreview, setFilePreview] = useState<string | undefined>(undefined);

  const [uploading, setUploading] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];

    if (file) {
      const reader = new FileReader();
      setUploading(true);

      reader.addEventListener('load', async e => {
        try {
          setFilePreview(String(e.target?.result));
          const imageUrl = await FileService.upload(file);
          props.onImageUpload(imageUrl);
        } finally {
          setUploading(false);
        }
      });

      reader.readAsDataURL(file);
    }
  }
  useEffect(() => {
    setFilePreview(props.preview);
  }, [props.preview]);

  if (uploading) {
    return <Loading show={uploading} />;
  }

  if (filePreview)
    return (
      <IU.ImagePreviewWrapper>
        <IU.ImagePreview preview={filePreview}>
          <Button
            variant={'primary'}
            label={'Remover imagem'}
            onClick={() => setFilePreview(undefined)}
          />
        </IU.ImagePreview>
      </IU.ImagePreviewWrapper>
    );

  return (
    <IU.Wrapper>
      <IU.Label>
        <Icon size={'24px'} path={mdiUpload} />
        {props.label}
        <IU.Input type='file' onChange={handleChange} />
      </IU.Label>
    </IU.Wrapper>
  );
}

export default ImageUpload;
