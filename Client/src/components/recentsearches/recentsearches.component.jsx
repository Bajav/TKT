const RecentSearches =({searchData,getSelected})=>{
    return(
                <div className="searched-wrapper">
              {searchData?.length > 0
                ? searchData?.map((item, index) => {
                    return (
                      <div
                        className="search"
                        onClick={getSelected}
                        key={index}
                      >
                        <h5>origin:{item.origin} </h5>
                        <h5>destination:{item.destination} </h5>
                        <h5>{item.flightType}</h5>
                      </div>
                    );
                  })
                : null}
            </div>
    )
};
export default RecentSearches;