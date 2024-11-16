import './style.scss'

type RowProps = {
  name: string;
  code: string;
};

export const Row = ({ name, code }: RowProps) => {
  return (
    <div className='row'>
      <div className='col'>{name}</div>
      <div className='col'>{code}</div>
    </div>
  );
};
