type FilteredActorsProp = {
    filteredActors: any;
}

const FilteredActors = ({filteredActors}: FilteredActorsProp) => {
    console.log("nana");
    return (
        <>
            {filteredActors.map((actor: any, index: any) => (
                <div key={index}>
                    <span>{actor}</span>
                </div>
          ))}
        </>
    );
}
export default FilteredActors;