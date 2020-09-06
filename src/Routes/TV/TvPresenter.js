import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Sections";
import Loader from "../../Components/Loader";
import Message from "../../Compontents/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const TVPresetner = ({topRated, popular, airingToday, loading, error}) => 
  loading ? <Loader /> : 
  <Container>
    {topRated && topRated.length > 0 && (
      <Section title="Top Rated Shows">
        {topRated.map(show => show.name )}
      </Section>
    )}
    {popular && popular.length > 0 && (
      <Section title="popular Shows">
        {popular.map(show => show.name )}
      </Section>
    )}
    {airingToday && airingToday.length > 0 && (
      <Section title="airingToday">
        {airingToday.map(show => show.name )}
      </Section>
    )}
    {error && <Message color="#e74c3c" text={error}/> }
    </Container>

TVPresetner.propTypes = {
  topRated: propTypes.array,
  popular: propTypes.array,
  airingToday: propTypes.array,
  loading: propTypes.bool.isRequired,
  error: propTypes.string
}

export default TVPresetner;