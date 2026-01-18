import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        // ?title=<title>
        const hasTitle = searchParams.has('title');
        const title = hasTitle
            ? searchParams.get('title')?.slice(0, 100)
            : 'Eikyuu News Network';

        // ?category=<category>
        const category = searchParams.get('category') || 'BREAKING';

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        padding: '40px',
                        backgroundColor: '#050505',
                        backgroundImage: 'radial-gradient(circle at 25px 25px, #202020 2%, transparent 0%), radial-gradient(circle at 75px 75px, #202020 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                        fontFamily: 'sans-serif',
                    }}
                >
                    {/* Decorative Gradients */}
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'linear-gradient(to bottom left, #FF5F00 0%, transparent 50%)', opacity: 0.2 }} />

                    {/* Scanline */}
                    <div style={{ position: 'absolute', top: '20px', left: '0', width: '100%', height: '2px', background: 'rgba(255, 95, 0, 0.3)' }} />

                    <div
                        style={{
                            display: 'flex',
                            fontSize: 20,
                            fontStyle: 'normal',
                            color: '#FF5F00',
                            marginBottom: 20,
                            letterSpacing: '0.2em',
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            border: '1px solid #FF5F00',
                            padding: '5px 15px',
                            borderRadius: '20px',
                            backgroundColor: 'rgba(255, 95, 0, 0.1)',
                        }}
                    >
                        {category}
                    </div>

                    <div
                        style={{
                            fontSize: 60,
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            color: 'white',
                            lineHeight: 1.1,
                            whiteSpace: 'pre-wrap',
                        }}
                    >
                        {title}
                    </div>

                    <div style={{ display: 'flex', marginTop: 30, color: '#666', fontSize: 16, letterSpacing: '0.1em' }}>
                        EIKYUU CENTRAL // VERIFIED NODE
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            },
        );
    } catch (e: any) {
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
