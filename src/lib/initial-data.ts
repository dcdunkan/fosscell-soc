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
					team: "Team name",
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: true,
							title: "Frontend",
							points: 15,
							days: 3,
							team: "Team name",
							icon: PaintbrushIcon,
							children: [
								{
									locked: true,
									title: "Backend",
									points: 15,
									days: 3,
									team: "Team name",
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
					team: "Team name",
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: true,
							title: "Frontend",
							points: 15,
							days: 3,
							team: "Team name",
							icon: PaintbrushIcon,
							children: [
								{
									locked: true,
									title: "Backend",
									points: 15,
									days: 3,
									team: "Team name",
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
					team: "Team name",
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: true,
							title: "Frontend",
							points: 15,
							days: 3,
							team: "Team name",
							icon: PaintbrushIcon,
							children: [
								{
									locked: true,
									title: "Backend",
									points: 15,
									days: 3,
									team: "Team name",
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
													team: "Team name",
													icon: LayoutTemplateIcon,
													children: [
														{
															locked: true,
															title: "Frontend",
															points: 15,
															days: 3,
															team: "Team name",
															icon: PaintbrushIcon,
															children: [
																{
																	locked: true,
																	title: "Backend",
																	points: 15,
																	days: 3,
																	team: "Team name",
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
					team: "Team name",
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: true,
							title: "Frontend",
							points: 15,
							days: 3,
							team: "Team name",
							icon: PaintbrushIcon,
							children: [
								{
									locked: true,
									title: "Backend",
									points: 15,
									days: 3,
									team: "Team name",
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
					team: "Team name",
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: true,
							title: "Frontend",
							points: 15,
							days: 3,
							team: "Team name",
							icon: PaintbrushIcon,
							children: [
								{
									locked: true,
									title: "Backend",
									points: 15,
									days: 3,
									team: "Team name",
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
													team: "Team name",
													icon: LayoutTemplateIcon,
													children: [
														{
															locked: true,
															title: "Frontend",
															points: 15,
															days: 3,
															team: "Team name",
															icon: PaintbrushIcon,
															children: [
																{
																	locked: true,
																	title: "Backend",
																	points: 15,
																	days: 3,
																	team: "Team name",
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
													team: "Team name",
													icon: LayoutTemplateIcon,
													children: [
														{
															locked: true,
															title: "Frontend",
															points: 15,
															days: 3,
															team: "Team name",
															icon: PaintbrushIcon,
															children: [
																{
																	locked: true,
																	title: "Backend",
																	points: 15,
																	days: 3,
																	team: "Team name",
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
					team: "Team name",
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: true,
							title: "Frontend",
							points: 15,
							days: 3,
							team: "Team name",
							icon: PaintbrushIcon,
							children: [
								{
									locked: true,
									title: "Backend",
									points: 15,
									days: 3,
									team: "Team name",
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
					team: "Team name",
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: true,
							title: "Frontend",
							points: 15,
							days: 3,
							team: "Team name",
							icon: PaintbrushIcon,
							children: [
								{
									locked: true,
									title: "Backend",
									points: 15,
									days: 3,
									team: "Team name",
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
}

const TEAMS = {
	1: {
		name: "Team 1",
		points: 90,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
	},
	2: {
		name: "Team 2",
		points: 90,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
	},
	3: {
		name: "Team 3",
		points: 67,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
	},
	4: {
		name: "Team 4",
		points: 67,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
	},
	5: {
		name: "Team 5",
		points: 67,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
	},
	6: {
		name: "Team 6",
		points: 32,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
	},
	7: {
		name: "Team 7",
		points: 32,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
	},
	8: {
		name: "Team 8",
		points: 15,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
	},
	9: {
		name: "Team 9",
		points: 12,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
	},
	10: {
		name: "Team 10",
		points: 4,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
	},
	11: {
		name: "Team 11",
		points: 4,
		members: ["Member 1", "Member 2", "Member 3", "Member4"],
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
		.map((group, i) => ({ rank: i + 1, teams: group }));
}

export const LEADERBOARD = generateLeaderboard(TEAMS);
