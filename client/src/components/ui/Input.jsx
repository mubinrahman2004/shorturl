 const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  error = "",
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-2 border rounded-md outline-none transition
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-400"
              : "border-gray-300 focus:ring-2 focus:ring-blue-500"
          }
          ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
