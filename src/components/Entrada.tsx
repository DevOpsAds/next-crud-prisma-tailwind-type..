interface EntradaProps {
  caption: string;
  tipo?: "number" | "text";
  valor: any;
  bloqueio?: Boolean | "true";
  mudouvalor: (valor: any) => void;
}

export default function Entrada(Props: EntradaProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="p-2">{Props.caption}</div>
      <input
        type={Props.tipo}
        value={Props.valor}
        readOnly={Props.bloqueio ? true : false}
        onChange={(e) => Props.mudouvalor?.(e.target.value)}
        className={` border border-purple-400 rounded-lg focus:bg-gray-100 px-4 py-2 `}></input>
    </div>
  );
}
