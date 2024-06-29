interface TimelineContentObject {
  time: string;
  title: string;
  lists?: string[];
  hideList?: boolean;
}
const CoreTimelineContent: React.FC<TimelineContentObject> = ({
  time,
  title,
  lists,
  hideList = false,
}) => {
  return (
    <div className="my-2">
      <label className="font-semibold text-secondary">{time}</label>
      <h4 className="text-2xl">{title}</h4>
      {lists ? (
        <ul className={`mt-2 ${hideList ? 'list-none' : 'list-disc'}`}>
          {lists.map((list, listIndex) => {
            if (list === '') return <li className="list-none"></li>;
            return <li key={listIndex}> {list} </li>;
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CoreTimelineContent;
