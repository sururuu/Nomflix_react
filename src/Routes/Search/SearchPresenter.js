import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Sections";
import Loader from "../../Components/Loader";
import Message from "../../Compontents/Error";

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
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map(show => (
              <span key={show.id}>{show.name}</span>
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Message color="#e74c3c" text={error}/> }
    {tvResults && movieResults && tnResults.length === 0 && (
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