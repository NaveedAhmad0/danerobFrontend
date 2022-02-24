export default function MenuIcon({
  className = "",
  style = {},
  ...otherProps
}) {
  return (
    <svg
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
