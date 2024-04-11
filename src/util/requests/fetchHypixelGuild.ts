export default async (uuid: string) => {
	const response = await fetch(`https://api.hypixel.net/guild?key=${process.env.HYPIXEL_API_KEY}&player=${uuid}`);

	return response.status === 200
		? (((await response.json()) as any).guild as HypixelGuildResponse) // eslint-disable-line @typescript-eslint/no-explicit-any
		: (response as FetchError);
};

/**
 * Source: https://github.com/unaussprechlich/hypixel-api-typescript/
 */
interface HypixelGuildResponse {
	_id: string;
	name: string;
	coins: number;
	memberSizeLevel: number;
	bankSizeLevel: number;
	coinsEver: number;
	created: number;
	members: Member[];
	canParty: boolean;
	canTag: boolean;
	tag?: string;
	banner?: Banner;
	canMotd?: boolean;
	vipCount?: number;
	mvpCount?: number;
	tagColor?: string;
}

interface Member {
	uuid: string;
	rank: string;
	joined: number;
	expHistory: { [key: number]: number };
}

interface Banner {
	Base?: string;
	Patterns?: Pattern[];
}

interface Pattern {
	Pattern?: string;
	Color?: string | number;
}
