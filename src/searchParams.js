const searchParams = () => {
    const location = "Manchester"
    return (
        <div className="search-params">
          <form>
              <label htmlFor="location">
                  Location
                  <input id="location" value={location} placeholder="Location"/>
              </label>
              <button>Submit</button>
          </form>
        </div>
    )
}

export default searchParams; 