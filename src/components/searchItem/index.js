import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../../context";

const SearchItem = () => {
  const { setSearchItem } = useGlobalContext();
  const searchValue = useRef("");

  const searchMovieName = () => {
    setSearchItem(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite Movie</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchMovieName}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchItem;
