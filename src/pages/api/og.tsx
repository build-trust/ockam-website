import { ImageResponse } from '@vercel/og';
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function handler(request: NextRequest) {
  try {
    const fontData = await fetch(
      new URL('../../assets/fonts/Inter-Black.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());

    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const hasImg = searchParams.has('img') && searchParams.get('img')?.trim() !== '';
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'My default title';
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

    const headingWidth = hasImg ? '50%' : '100%';

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
          <div style={headingStyles}>{title}</div>
          {hasImg && (
            <div
              style={{
                display: 'flex',
                flexBasis: headingWidth,
                borderRadius: '4px',
                position: 'relative',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                width="100%"
                decoding="async"
                src={`https://www.ockam.io/${searchParams.get('img')}`}
                style={{
                  borderTopLeftRadius: 4,
                  borderBottomLeftRadius: 4,
                  borderLeft: '2px solid black',
                  borderTop: '2px solid black',
                  borderBottom: '2px solid black',
                }}
              />
            </div>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
