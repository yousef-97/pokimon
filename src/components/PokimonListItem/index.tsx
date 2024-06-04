import { useGetPokimonQuery } from '@/redux/slices/pokimon';
import { Link } from 'react-router-dom';

type Props = {
  pokimonName: string;
  pokimonUrl: string;
};

const PokimonListItem = ({ pokimonName, pokimonUrl }: Props) => {
  const pokimonId = pokimonUrl?.split?.('/')?.at(-2) as string;
  const { data } = useGetPokimonQuery<any>(pokimonId);
  return (
    <Link to={pokimonId} className="flex items-center justify-between px-4 text-black hover:text-black">
      <img src={data?.sprites?.front_default} className="w-10 h-10" alt={pokimonName} />
      <span>{pokimonName}</span>
    </Link>
  );
};

export default PokimonListItem;
