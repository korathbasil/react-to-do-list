type prop = {
  name: string;
};

const List: React.FC<prop> = ({ name }) => {
  return (
    <div className="List">
      <h2>{name}</h2>
    </div>
  );
};

export default List;
