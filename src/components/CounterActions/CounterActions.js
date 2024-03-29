import { useDispatch, useSelector } from "react-redux";
// changed the counter actions imports

import { actions } from "../../redux/reducers/counterReducer";

export const CounterActions = () => {
  const dispatch = useDispatch();
  // changed as per the store implementation
  const { count } = useSelector((state) => state.counterReducer );

  return (
    <div className="actions outer-time-div">
      <button
        disabled={count <= 0}
        onClick={() => dispatch(actions.decrementCounter())}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          alt="dec"
        />
      </button>
      <button
        disabled={count >= 10}
        onClick={() => dispatch(actions.incrementCounter())}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="inc"
        />
      </button>
      <button onClick={() => dispatch(actions.resetCounter())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
