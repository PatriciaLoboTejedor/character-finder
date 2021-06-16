import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import PropTypes from "prop-types";

const Filters = (props) => {
  // Evento que quita el envio por defecto al hacer enter en input
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <FilterByName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        />
        <FilterBySpecies
          filterSpecies={props.filterSpecies}
          handleFilter={props.handleFilter}
        />
        <button className="" onClick={props.reset}>
          <i className="far fa-trash-alt"></i> Reset
        </button>
      </form>
    </section>
  );
};

export default Filters;

Filters.propTypes = {
  reset: PropTypes.func,
  handleFilter: PropTypes.func,
  handleSubmit: PropTypes.func,
  filterName: PropTypes.string,
  filterSpecies: PropTypes.string,
};
