import { ImageResponse } from '@vercel/og';
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest } from 'next/server';
import { FC } from 'react';

export const config = {
  runtime: 'edge',
};

type MainTextProps = {
  title?: string;
};
const MainText: FC<MainTextProps> = ({ title }) => {
  const headingStyles = {
    fontSize: 60,
    fontFamily: '"Inter"',
    fontStyle: 'normal',
    letterSpacing: '-0.025em',
    color: '#0A1A2B',
    margin: '0',
    padding: '30px',
    lineHeight: 1.4,
    flexBasis: '50%',
    textWrap: 'balance',
    display: 'flex',
  };

  return <div style={headingStyles}>{title}</div>;
};

type ThumbnailProps = {
  imagePath?: string | null;
};
const Thumbnail: FC<ThumbnailProps> = ({ imagePath }) => {
  const containerStyles = {
    display: 'flex',
    flexBasis: '50%',
  };

  if (imagePath) {
    return (
      <div style={containerStyles}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          width="100%"
          decoding="async"
          src={`https://www.ockam.io/${imagePath}`}
          style={{
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
            borderLeft: '4px solid #0A1A2B',
            borderTop: '4px solid #0A1A2B',
            borderBottom: '4px solid #0A1A2B',
          }}
        />
      </div>
    );
  }
  return <></>;
};

const Watermark: FC = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    alt=""
    width="70px"
    src="https://www.ockam.io/style-guide/logo/vertical_logo_black.png"
    style={{
      position: 'absolute',
      bottom: 10,
      right: 10,
    }}
  />
);

type FeaturesProps = {
  features?: string[];
};

const Features: FC<FeaturesProps> = ({ features }) => {
  const containerStyles = {
    display: 'flex',
    padding: '30px 15px 30px 30px',
    width: '50%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderLeft: '4px solid #0A1A2B',
    borderTop: '4px solid #0A1A2B',
    borderBottom: '4px solid #0A1A2B',
    background: '#162535',
    color: '#ECFDF9',
    fontSize: 30,
  };

  const featureListStyles = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 20,
  };

  const featureStyles = {
    display: 'flex',
    flexDirection: 'row' as 'row',
    width: '90%',
    gap: 20,
    textAlign: 'left' as 'left',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  };

  if (!features) return <></>;
  return (
    <div style={containerStyles}>
      <ul style={featureListStyles}>
        {features.map((feature) => (
          <li key={feature} style={featureStyles}>
            <span style={{ flexBasis: '1em' }}>✅</span>
            <span style={{ flexBasis: 'auto' }}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function handler(request: NextRequest) {
  try {
    const fontData = await fetch(
      new URL('../../assets/fonts/Inter-Black.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());

    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const hasImage = searchParams.has('img');
    const hasFeatures = searchParams.has('features');
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'My default title';
    const features = hasFeatures ? searchParams.get('features')?.split('||') : [];

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#ECFDF9',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            position: 'relative',
          }}
        >
          <MainText title={title} />
          {hasImage && <Thumbnail imagePath={searchParams.get('img')} />}
          {hasFeatures && <Features features={features} />}
          <Watermark />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.error(e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
