type prop = {
  name: string;
};

const List = ({ name }: prop) => {
  return (
    <div className="List">
      <h2>{name}</h2>
    </div>
  );
};

export default List;
