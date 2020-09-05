import React from "react";
import TvPresenter from "./TvPresenter";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null 
  };
  render() {
    const { topRated, popular, airingTday, loading, error } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingTday={airingTday}
        loading={loading}
        error={error}
      />
    );
  }
}