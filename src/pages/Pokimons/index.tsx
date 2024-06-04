import Header from '@/components/Header';
import PokimonListItem from '@/components/PokimonListItem';
import PageLayout from '@/components/PageLayout';
import { useGetPokimonsQuery } from '@/redux/slices/pokimon';

const Pokimons = () => {
  const { data, isError, isLoading, isSuccess } = useGetPokimonsQuery(20);
  return (
    <PageLayout>
      <Header>PokiReact</Header>
      <div>
        {data?.results?.map((pokimon) => {
          return <PokimonListItem key={pokimon?.name} pokimonName={pokimon?.name} pokimonUrl={pokimon?.url} />;
        })}
      </div>
    </PageLayout>
  );
};

export default Pokimons;
