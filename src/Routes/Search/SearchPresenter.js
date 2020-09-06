import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Sections";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding:20px;
`;

const Form = styled.form`
  margin-bottom:50px;
  width:100%;
`;

const Input = styled.input`
  margin-bottom: 50px;
  width: 100%;
`;

const SearchPresetner = ({movieResults, tvResults, searchTerm, handleSubmit,updateTerm, loading, error}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
              <Poster 
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path} 
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0,4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />  
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Message color="#e74c3c" text={error}/> }
    {tvResults && movieResults && tvResults.length === 0 && (
      <Message text="Nothin found" color="#95a5a6" />
    )}
  </Container>
);

SearchPresetner.propTypes = {
  movieResults: propTypes.array,
  tvResults: propTypes.array,
  searchTerm: propTypes.string,
  handleSubmit: propTypes.func.isRequired,
  updateTerm: propTypes.isRequired,
  loading: propTypes.bool.isRequired,
  error: propTypes.string
}

export default SearchPresetner;