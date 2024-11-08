import LazyImage from '@/components/img';
import Card from '@/app/earn/components/card';
import Reward from '@/app/earn/components/reward';
import Button from '@/app/earn/components/button';

const Task = (props: Props) => {
  const { style, icon, title, reward, finished, className } = props;

  return (
    <Card className={`w-full ${className}`} style={style}>
      <div className="flex items-center gap-[0.687500rem]">
        <LazyImage
          src={icon as string}
          width="3.625rem"
          height="3.625rem"
        />
        <div className="flex flex-col">
          <div className="">{title}</div>
          <Reward className="mt-[0.562500rem]">
            +{reward}
          </Reward>
        </div>
        <div className="ml-auto flex justify-end items-center">
          {
            finished ? (
              <LazyImage src="/images/icon-done.svg" width="1.500000rem" height="1.500000rem" />
            ) : (
              <Button>
                Start
              </Button>
            )
          }
        </div>
      </div>
    </Card>
  );
};

export default Task;

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title: string;
  reward: string | number;
  finished?: boolean;
  icon?: string;
}
