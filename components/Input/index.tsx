type InputError = string | React.ReactNode;

interface InputProps {
  label: string;
  id: string;
  type: string;
  name: string;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: InputError;
  className?: string;
  errorMessage?: string;
}

const Input = (props: InputProps) => {
  const { error, errorMessage, id, label, ...rest } = props;

  return (
    <div className="control no-margin flex flex-col gap-y-1">
      <label htmlFor={id} className=" text-lg">
        {label}
      </label>
      <input
        id={id}
        {...rest}
        className=" bg-slate-300 p-1 focus:border-none outline-none"
      />
      <div className="">
        {error && <p className="text-red-600">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Input;
