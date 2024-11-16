import "./style.scss";

type RowProps = {
  name: string;
  code: string;
};

export const Row = ({ name, code }: RowProps) => {
  return (
    <div className="row">
      <div className="col">
        <p>{name}</p>{" "}
      </div>
      <div className="col">
        <p>{code}</p>
      </div>
    </div>
  );
};
