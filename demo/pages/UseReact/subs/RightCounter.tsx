interface Props {
  count: number;
  add: () => void;
}

export default function RightCounter(props: Props) {
  return (
    <div>
      <div>
        <b>RightCounter: </b>
        <span>count=</span>
        <span>{props.count}</span>
        <button type="button" onClick={props.add}>
          自增
        </button>
      </div>
    </div>
  );
}
