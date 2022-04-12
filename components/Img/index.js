import { useRouter } from 'next/dist/client/router';

export default function Img({ src, alt = '' }) {
  const { basePath } = useRouter();

  return (
    <img src={`${basePath}/${src}`} alt={alt} />
  );
}
