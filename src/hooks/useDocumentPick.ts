import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

type props = {
  onChange?: (res: any) => void;
};

function useDocumentPick({ onChange }: Readonly<props>) {
  const options: ImageLibraryOptions = {
    includeBase64: true,
    maxWidth: 500,
    maxHeight: 600,
    quality: 1,
  };

  const onGalleryPick = async () => {
    try {
      const result = await launchImageLibrary(options);

      const [image] = result?.assets;
      image.size = image?.fileSize;
      image.name = image?.fileName;

      delete image.fileSize;
      delete image.fileName;
      onChange?.(image);
    } catch (error) {
      console.log('error while picking image = ', error);
    }
  };

  return { onGalleryPick };
}

export default useDocumentPick;
