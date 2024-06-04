import FilteredActors from "./FilteredActors";
import FilteredMovies from "./FilteredMovies";

interface ResultProps {
  filtered: any;
  filteredByActors: any;
  onToggleMovie: any;
}

const Results = ({filtered, filteredByActors, onToggleMovie}: ResultProps) => {
//   const {movies, loading, error} = useFetchMovies();

      // const getData = () => {
    //   fetch('../movies.json', {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     }
    //   }).then((response)=> {
    //     return response.json()
    //   }).then((data)=>{
    //     // console.log(data);
    //     setMovies(data);
    //   })
    // }
  
    // useEffect(() => {
    //   getData();
    // }, []);
  
    return (
      <div>
        {onToggleMovie ? (
            <FilteredMovies filtered={filtered}/>
        ) : (
            <FilteredActors filteredActors={filteredByActors}/>
        )}
      </div>
    );
}
export default Results;