import { ComponentType, FunctionComponent, useEffect, useRef, useState } from 'react';

type Props = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  onLoad: Function;
  aspect?: 'width' | 'height';
};
const SvgAnimation: FunctionComponent<Props> = ({ name, onLoad, aspect }) => {
  const ImportedSvgRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const width = (): string => {
    if (!aspect) return '100%';
    return aspect === 'height' ? 'auto' : '100%';
  };

  const height = (): string => {
    if (!aspect) return '100%';
    return aspect === 'height' ? '100%' : 'auto';
  };

  type SvgProps = {
    ref?: React.RefCallback<HTMLElement>;
    style?: { [key: string]: string };
  };

  useEffect(() => {
    setLoading(true);
    const importSvg = async (): Promise<void> => {
      if (loading) {
        try {
          const a = await import(`../assets/animations/${name}.svg`);
          const { default: namedImport } = a;
          ImportedSvgRef.current = namedImport;
        } finally {
          setLoading(false);
          if (ImportedSvgRef.current && onLoad) {
            await onLoad();
          }
        }
      }
    };
    importSvg();
  }, [name]);

  if (!loading && ImportedSvgRef.current) {
    const { current: ImportedSvg }: { current: ComponentType<SvgProps> | null } = ImportedSvgRef;
    if (ImportedSvg)
      return (
        <ImportedSvg
          style={{
            display: 'block',
            width: width(),
            height: height(),
            maxHeight: '50vh',
          }}
        />
      );
    return <></>;
  }
  return <></>;
};
export default SvgAnimation;
