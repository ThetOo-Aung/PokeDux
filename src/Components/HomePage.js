import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonList } from "../actions/PokemonListAction";
import "./HomePage.css";
import PokeList from "./PokeList";
import ReactPaginate from "react-paginate";

const HomePage = () => {
  const pokemonList = useSelector((state) => state.PokemonList);
  const dispatch = useDispatch();

  const fetchData = (page = 1) => {
    dispatch(getPokemonList(page));
  };

  useEffect(() => {
    fetchData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showData = () => {
    if (pokemonList.isLoading) {
      return <div className="loader"></div>;
    }
    if (pokemonList.errorMsg !== "") {
      return <div>{pokemonList.errorMsg}</div>;
    } else if (pokemonList.data) {
      const resArr = pokemonList.data;
      return (
        <div className="pokemon-cards container-fluid mb-2">
          <div className="row">
            {resArr.map((el) => (
              <PokeList pokemon={el} key={el.name}></PokeList>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="HomePage">
      {showData()}
      {pokemonList.data && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 20)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => {
            fetchData(data.selected + 1);
          }}
          containerClassName={"pagination mb-3"}
          activeLinkClassName={"page-active bg-danger"}
          previousLabel={
            <button className="btn btn-sm  btnEdit"> &#8592; Previous </button>
          }
          nextLabel={<button className="btn btn-sm btnEdit"> Next &#8594; </button>}
          pageLinkClassName={"page-link-class"}
          disableInitialCallback={true}
        />
      )}
    </div>
  );
};

export default HomePage;
