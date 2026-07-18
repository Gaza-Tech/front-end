import { ImageResponse } from 'next/og';

export const alt = 'Gaza Tech Market — the leading tech marketplace in Gaza';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'linear-gradient(135deg, #0A0F1F 0%, #0B1B3A 55%, #0B57D0 100%)',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: '#0B57D0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '38px',
              fontWeight: 700,
            }}
          >
            G
          </div>
          <div style={{ fontSize: '28px', color: '#9DB8E8', fontWeight: 600 }}>
            gaza-tech.market
          </div>
        </div>

        <div
          style={{
            fontSize: '84px',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-2px',
          }}
        >
          Gaza Tech Market
        </div>

        <div
          style={{
            fontSize: '36px',
            color: '#C6D6F2',
            marginTop: '28px',
            maxWidth: '900px',
          }}
        >
          The leading tech marketplace in Gaza. Buy and sell technology
          products.
        </div>
      </div>
    ),
    { ...size }
  );
}
