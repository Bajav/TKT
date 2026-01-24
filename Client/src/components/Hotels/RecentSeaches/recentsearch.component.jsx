import './recentsearch.styles.scss';

const recentsearch =({searchJson})=>{
    return(
        <div className="search-items">
         { searchJson.map((item, index)=>
        <div className="search-item" key={index}>
                <img className='search-item-image' src={item.image} />
               <h4 className='item-name'>{item.searchQuery}</h4>
           </div>)
           }
            
        </div>
    );
}
export default recentsearch;