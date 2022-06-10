import { TextFieldProps } from "./TextField.props";

export const TextField = ({
  onChange,
  name,
  value,
  type,
  placeholder,
  ...props
}: TextFieldProps): JSX.Element => {
  return (
    <>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </>
  );
};
