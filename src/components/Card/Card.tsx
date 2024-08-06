import Box from "../Box/Box";

type Props = {
  btnText: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Card({ btnText = "", onClick }: Props) {
  return (
    <article>
      <Box>
        <span className="text-pink-200">This is a card</span>
      </Box>
      <footer>
        <button onClick={onClick} className="bg-black text-white h-7 w-24">
          {btnText}
        </button>
      </footer>
    </article>
  );
}
