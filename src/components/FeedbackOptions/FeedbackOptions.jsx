export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <div>
      <button type="button" onClick={onGood}>
        good
      </button>
      <button type="button" onClick={onNeutral}>
        neutral
      </button>
      <button type="button" onClick={onBad}>
        bad
      </button>
    </div>
  );
};
