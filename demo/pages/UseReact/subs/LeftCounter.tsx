interface Props {
  count: number;
  add: () => void;
}

export default function LeftCounter(props: Props) {
  return (
    <div>
      <div>
        <b>LeftCounter: </b>
        <span>count=</span>
        <span>{props.count}</span>
        <button type="button" onClick={props.add}>
          自增
        </button>
      </div>
    </div>
  );
}
