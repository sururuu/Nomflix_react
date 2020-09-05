import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const HomePresetner = ({nowPlaying, upcoming, popular, loading, error}) => null;

HomePresetner.propTypes = {
  nowPlaying: propTypes.array,
  upcoming: propTypes.array,
  popular: propTypes.array,
  loading: propTypes.bool.isRequired,
  error: propTypes.string
}

export default HomePresetner;