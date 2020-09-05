import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const TVPresetner = ({topRated, popular, airingToday, loading, error}) => null;

TVPresetner.propTypes = {
  topRated: propTypes.array,
  popular: propTypes.array,
  airingToday: propTypes.array,
  loading: propTypes.bool.isRequired,
  error: propTypes.string
}

export default TVPresetner;