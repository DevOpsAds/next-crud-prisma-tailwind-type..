interface BotaoProps {
  cor: "bg-red-500" | "bg-blue-500" | "bg-gray-500";
  children?: any;
  className?: string;
}

export function Botao(props: BotaoProps) {
  const color = props.cor;
  return (
    <button
      className={` flex justify-end font-medium py-2 px-4 rounded-md text-gray-100 overflow-auto
      ${props.className}
      ${color}


      `}>
      {props.children}
    </button>
  );
}
