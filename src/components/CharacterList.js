import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";
import Error from "./Error";

const CharacterList = (props) => {
  // Pinta el componente error en su estado 200 si la búsqueda no tiene resultados
  if (props.characters.length === 0) {
    return <Error filterName={props.filterName} errorCode={200} />;
  }
  const characterElements = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });

  return (
    <section>
      <ul className="main__list">{characterElements}</ul>
    </section>
  );
};

export default CharacterList;

CharacterList.propsTypes = {
  characters: PropTypes.array,
};
