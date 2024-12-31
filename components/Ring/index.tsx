import Ring from "@/components/Ring/Ring";
import { useRingStore } from '@/stores/useRingStore';

export default function RingButton(props: any) {
  const { className } = props;
  const ringStore = useRingStore();

  return (
    <button
      className={className}
      onClick={() => {
        ringStore.setOpen(!ringStore.open);
      }}
    >
      <Ring open={ringStore.open} />
    </button>
  );
}
