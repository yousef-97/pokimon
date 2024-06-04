import { useGetPokimonQuery } from '@/redux/slices/pokimon';
import { useParams } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import Header from '@/components/Header';

const detailsList: any = [
  { label: 'Name', key: 'name' },
  { label: 'Weight', key: 'weight', render: (value: number) => `${value} KG` },
  { label: 'Height', key: 'height' },
  {
    label: 'Types',
    key: 'types',
    render: (types: any[]) => (
      <div className="flex flex-col gap-1">{types?.map((type) => <div key={type?.name}>{type?.name}</div>)}</div>
    ),
  },
];

const PokimonDetails = () => {
  const { id } = useParams();
  const { data } = useGetPokimonQuery<any>(id as string);

  return (
    <PageLayout>
      <Header>{data?.name}</Header>
      <img src={data?.sprites?.front_default} className="w-full h-36 object-contain" alt={data?.name} />

      <div className="divide-y flex flex-col gap-2">
        {detailsList?.map((item: any) => {
          return (
            <div className="flex items-center justify-between pt-2" key={item?.key}>
              <div>{item?.label}</div>
              <div>{item?.render?.(data?.[item?.key], data) ?? data?.[item?.key]}</div>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default PokimonDetails;
