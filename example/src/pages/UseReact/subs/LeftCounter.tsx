import React from 'react';

interface Props {
  count: number;
  add: () => void;
}

export default function LeftCounter(props: Props) {
  return (
    <div>
      <div>
        <b>LeftCounter: </b>
        <button type="button" onClick={props.add}>
          自增
        </button>
        <span>count=</span>
        <span>{props.count}</span>
      </div>
    </div>
  );
}
