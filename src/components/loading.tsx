import { LoaderCircle } from 'lucide-react';

const Loading = ({ msg = '' }: { msg: string }) => {
  return (
    <div className="absolute w-full h-full flex items-center justify-center">
      <div className="animate-pulse flex flex-col justify-center items-center gap-2">
        <LoaderCircle className="animate-spin size-8" strokeWidth={1} />
        {msg && <h1 className="font-bold text-lg">{msg}</h1>}
      </div>
    </div>
  );
};

export default Loading;
