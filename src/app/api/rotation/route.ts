export async function GET(request: Request) {
    const res = await fetch('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations', {
        headers: {
            'X-Riot-Token': process.env.RIOT_API_KEY!,
        },
    });
}
