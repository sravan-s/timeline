import React from 'react';

export default function TimelineSummaryItem({ title, summary, onClick, id }) {
  console.log(title, summary, onClick, id);
  return (
    <article>
      <header>
        <h1>{ title }</h1>
      </header>
      <p>{ summary }</p>
    </article>
  );
}

TimelineSummaryItem.propTypes = {
  title: React.PropTypes.string,
  onClick: React.PropTypes.func,
  summary: React.PropTypes.string,
  id: React.PropTypes.string
};

const defaultTitle = 'default title';
const defaultSummary = 'default summary';
const defaultId = 'default id';
const defaultOnClick = () => {};

TimelineSummaryItem.getDefaultProps = {
  title: defaultTitle,
  summary: defaultSummary,
  onClick: defaultOnClick,
  id: defaultId
};
