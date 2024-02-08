import '../styles/GenericHeader.css'

function GenericHeader({ title }) {
  return (
    <div className='genericHeader'>
        <h1>{title}</h1>
    </div>
)};

export default GenericHeader;