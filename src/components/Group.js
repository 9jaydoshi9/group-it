import GroupItem from "./GroupItem";

const Group = ({ groupDetails }) => {
  return (
    <div>
      {groupDetails.map((member, index) => (
        <GroupItem key={index} memberDetail={member} />
      ))}
    </div>
  );
};

export default Group;
