import type { BaseNode, Node } from "./components/Node.svelte";
import {
	BoxesIcon,
	CircleDollarSignIcon,
	EyeIcon,
	HammerIcon,
	LayoutDashboardIcon,
	LayoutTemplateIcon,
	PaintbrushIcon,
	PillBottleIcon,
	PillIcon,
	ScanFaceIcon,
	SearchIcon,
	ShoppingCartIcon,
	UserRoundIcon,
} from "lucide-svelte";

export function generateNode(node: BaseNode, locked: boolean, level = 0): Node {
	return {
		id: node.title.toLowerCase() + crypto.getRandomValues(new Uint8Array(18)).join(""),
		title: node.title,
		points: node.points,
		days: node.days,
		team: node.team,
		icon: node.icon,
		level: level,
		locked: locked,
		children: node.children.map((child) =>
			generateNode(child, locked === true ? true : child.locked, level + 1),
		),
	};
}

export const PHARMALINK: BaseNode = {
	title: "PharmaLink",
	locked: true,
	icon: PillIcon,
	children: [
		{
			locked: true,
			title: "Login and Registration",
			icon: ScanFaceIcon,
			children: [
				{
					locked: true,
					title: "UI",
					points: 5,
					days: 1,
					team: 1,
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: true,
							title: "Frontend",
							points: 15,
							days: 3,
							team: 1,
							icon: PaintbrushIcon,
							children: [
								{
									locked: true,
									title: "Backend",
									points: 15,
									days: 3,
									team: 1,
									icon: HammerIcon,
									children: [],
								},
							],
						},
					],
				},
			],
		},
		{
			locked: true,
			title: "Customer Dashboard",
			icon: LayoutDashboardIcon,
			children: [
				{
					locked: true,
					title: "UI",
					points: 5,
					days: 1,
					team: 1,
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: true,
							title: "Frontend",
							points: 15,
							days: 3,
							team: 1,
							icon: PaintbrushIcon,
							children: [
								{
									locked: true,
									title: "Backend",
									points: 15,
									days: 3,
									team: 1,
									icon: HammerIcon,
									children: [],
								},
							],
						},
					],
				},
			],
		},
		{
			locked: true,
			title: "Pharmacy Dashboard",
			icon: LayoutDashboardIcon,
			children: [
				{
					locked: true,
					title: "UI",
					points: 5,
					days: 1,
					team: 1,
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: true,
							title: "Frontend",
							points: 15,
							days: 3,
							team: 1,
							icon: PaintbrushIcon,
							children: [
								{
									locked: true,
									title: "Backend",
									points: 15,
									days: 3,
									team: 1,
									icon: HammerIcon,
									children: [
										{
											locked: true,
											title: "Pharmacy Inventory",
											icon: BoxesIcon,
											children: [
												{
													locked: true,
													title: "UI",
													points: 5,
													days: 1,
													team: 1,
													icon: LayoutTemplateIcon,
													children: [
														{
															locked: true,
															title: "Frontend",
															points: 15,
															days: 3,
															team: 1,
															icon: PaintbrushIcon,
															children: [
																{
																	locked: true,
																	title: "Backend",
																	points: 15,
																	days: 3,
																	team: 1,
																	icon: HammerIcon,
																	children: [],
																},
															],
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			locked: true,
			title: "Medicine Details",
			icon: EyeIcon,
			children: [
				{
					locked: true,
					title: "UI",
					points: 5,
					days: 1,
					team: 1,
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: true,
							title: "Frontend",
							points: 15,
							days: 3,
							team: 1,
							icon: PaintbrushIcon,
							children: [
								{
									locked: true,
									title: "Backend",
									points: 15,
									days: 3,
									team: 1,
									icon: HammerIcon,
									children: [],
								},
							],
						},
					],
				},
			],
		},
		{
			locked: true,
			title: "Find Medicine",
			icon: SearchIcon,
			children: [
				{
					locked: true,
					title: "UI",
					points: 5,
					days: 1,
					team: 1,
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: true,
							title: "Frontend",
							points: 15,
							days: 3,
							team: 1,
							icon: PaintbrushIcon,
							children: [
								{
									locked: true,
									title: "Backend",
									points: 15,
									days: 3,
									team: 1,
									icon: HammerIcon,
									children: [
										{
											locked: true,
											title: "Cart",
											icon: ShoppingCartIcon,
											children: [
												{
													locked: true,
													title: "UI",
													points: 5,
													days: 1,
													team: 1,
													icon: LayoutTemplateIcon,
													children: [
														{
															locked: true,
															title: "Frontend",
															points: 15,
															days: 3,
															team: 1,
															icon: PaintbrushIcon,
															children: [
																{
																	locked: true,
																	title: "Backend",
																	points: 15,
																	days: 3,
																	team: 1,
																	icon: HammerIcon,
																	children: [],
																},
															],
														},
													],
												},
											],
										},
										{
											locked: true,
											title: "Place Order",
											icon: CircleDollarSignIcon,
											children: [
												{
													locked: true,
													title: "UI",
													points: 5,
													days: 1,
													team: 1,
													icon: LayoutTemplateIcon,
													children: [
														{
															locked: true,
															title: "Frontend",
															points: 15,
															days: 3,
															team: 1,
															icon: PaintbrushIcon,
															children: [
																{
																	locked: true,
																	title: "Backend",
																	points: 15,
																	days: 3,
																	team: 1,
																	icon: HammerIcon,
																	children: [],
																},
															],
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			locked: true,
			title: "Pharmacy Profile",
			icon: PillBottleIcon,
			children: [
				{
					locked: true,
					title: "UI",
					points: 5,
					days: 1,
					team: 1,
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: true,
							title: "Frontend",
							points: 15,
							days: 3,
							team: 1,
							icon: PaintbrushIcon,
							children: [
								{
									locked: true,
									title: "Backend",
									points: 15,
									days: 3,
									team: 1,
									icon: HammerIcon,
									children: [],
								},
							],
						},
					],
				},
			],
		},
		{
			locked: true,
			title: "Customer Profile",
			icon: UserRoundIcon,
			children: [
				{
					locked: true,
					title: "UI",
					points: 5,
					days: 1,
					team: 1,
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: true,
							title: "Frontend",
							points: 15,
							days: 3,
							team: 1,
							icon: PaintbrushIcon,
							children: [
								{
									locked: true,
									title: "Backend",
									points: 15,
									days: 3,
									team: 1,
									icon: HammerIcon,
									children: [],
								},
							],
						},
					],
				},
			],
		},
	],
};

interface TeamDetails {
	name: string;
	points: number;
	members: string[];
	priority: number;
}

export const TEAMS: Record<number, TeamDetails> = {
	1: {
		name: "Dangerous Guanaco",
		points: 90,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
		priority: 0,
	},
	2: {
		name: "Nocturnal Moose",
		points: 90,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
		priority: 0,
	},
	3: {
		name: "Large Owl",
		points: 67,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
		priority: 0,
	},
	4: {
		name: "Agile Ibex",
		points: 67,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
		priority: 0,
	},
	5: {
		name: "Slimy Eel",
		points: 67,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
		priority: 0,
	},
	6: {
		name: "Short Grasshopper",
		points: 32,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
		priority: 0,
	},
	7: {
		name: "Candid Rail",
		points: 32,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
		priority: 0,
	},
	8: {
		name: "Carnivorous Falcon",
		points: 15,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
		priority: 0,
	},
	9: {
		name: "Domestic Narwhal",
		points: 12,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
		priority: 0,
	},
	10: {
		name: "Fierce Spider",
		points: 4,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
		priority: 0,
	},
	11: {
		name: "Cuddly Marten",
		points: 4,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
		priority: 0,
	},
} satisfies Record<number, TeamDetails>;

export function generateLeaderboard(leaderboard: Record<number, TeamDetails>) {
	const grouped = Object.entries(leaderboard).reduce(
		(groups, [id, team]) => {
			return {
				...groups,
				[team.points]:
					groups[team.points] == null
						? [{ ...team, id: Number(id) }]
						: [...groups[team.points], { ...team, id: Number(id) }],
			};
		},
		{} as Record<number, (TeamDetails & { id: number })[]>,
	);
	return Object.values(grouped)
		.toSorted((a, b) => b[0].points - a[0].points)
		.map((group, i) => ({
			rank: i + 1,
			teams: group.toSorted((a, b) => b.priority - a.priority),
		}));
}

export const LEADERBOARD = generateLeaderboard(TEAMS);
