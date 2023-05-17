type TProps = {
  content: string;
  onClick: () => void;
};

const Button: React.FC<TProps> = ({ content, onClick }) => {
  return (
    <button
      className="bg-neutral-100 px-4 py-2 hover:bg-neutral-50 font-semibold rounded-lg border border-neutral-300"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
