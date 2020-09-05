import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresetner = ({movieResults, tvResults, searchTerm, handleSubmit, loading, error}) => null;

SearchPresetner.PropTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
}

export default SearchPresetner;