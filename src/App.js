import React, { useEffect, useState } from "react"
import './App.css';
import ReactPaginate from "react-paginate"
import Data from "./components/Data";

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)


  const handlePageClick = (data) => {
    setPageNumber(data.selected  + 1)
  }

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://swapi.dev/api/planets/?page=${pageNumber}`)
      const data = await res.json();
      setData(data.results)
      setLoading(true)
    }
    getData()
    setLoading(false)
  }, [pageNumber])

  console.log(data)
  return (
    <div className="App">
      <h1>Data Set</h1>
      <Data datas={data} pageNumber={pageNumber} loading={loading}/>
      {!loading && <h3>Loading......</h3>}
      <ReactPaginate 
        previousLabel = {"Previous"}
        nextLabel = {"Next"}
        breakLabel = {"..."}
        pageCount = {6}
        marginPagesDisplayed = {2}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default App;
