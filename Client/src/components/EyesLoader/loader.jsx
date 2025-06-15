import './loader.scss';

function Loader(props) {
  return (
    <div className="main-loader">
      <div className='loader'>
            </div>
      {/* <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      <h4>{props.loaderTag}</h4>
    </div>
  );
}

export default Loader;
