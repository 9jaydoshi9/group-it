import Group from "./Group";
const GroupList = ({ allGroupData }) => {
  return (
    <div>
      {allGroupData.map((groupDetails, index) => (
        <div key={index}>
          <br />
          ------- Group {index + 1} : -------
          <Group key={index} groupDetails={groupDetails} />
        </div>
      ))}
    </div>
  );
};

export default GroupList;
