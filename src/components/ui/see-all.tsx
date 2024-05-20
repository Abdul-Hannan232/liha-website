import ArrowIcon from '@components/icons/arrow-icon';
import Link from '@components/ui/link';
import { LinkProps } from 'next/link';

interface Props {
  className?: string;
  href?: LinkProps['href'];
}

const SeeAll: React.FC<Props> = ({ className, href = '/' }) => {
  return (
    <Link
      href={`${href}`}
      className={`${className} p-4 flex items-center justify-center flex-col hover:opacity-80`}
    >
      <ArrowIcon color="#02B290" className="w-10" />
      <span className="font-semibold text-sm sm:text-base text-brand block pt-1.5 sm:pt-3.5">
        See All
      </span>
    </Link>
  );
};

export default SeeAll;
