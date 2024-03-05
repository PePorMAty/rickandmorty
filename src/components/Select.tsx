interface Props {
  handleChange: (value: string) => void;
  title: string;
  array: string[];
}

const Select = ({ handleChange, title, array }: Props) => {
  return (
    <select
      name={`select-${title}`}
      id={`select-${title}`}
      className="w-40 h-8 text-black mb-8 mr-6"
      onChange={(e) => handleChange(e.target.value)}
    >
      <option value="">Choose a {title}</option>

      {array.map((elem) => (
        <option value={elem} key={elem}>
          {elem}
        </option>
      ))}
    </select>
  );
};

export default Select;
