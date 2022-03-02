import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams(); //hook
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  ); //() not{}
}
export default ProductScreen;
