import "./style.scss";

type SkeletonLoaderProps = {
  width?: number | string;
  height?: number;
};

export const SkeletonLoader = ({ width = '100%', height = 60 }: SkeletonLoaderProps) => {
  return <div className="rect skeleton-content" style={{width, height}}></div>;
};
