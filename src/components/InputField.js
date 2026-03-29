export default function InputField({
  name,
  placeholder,
  onChange,
  type = "text",
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="border p-2 w-full mb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}