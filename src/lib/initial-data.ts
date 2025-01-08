import type { BaseNode, Node } from "./components/Node.svelte";
import {
	ActivityIcon,
	EllipsisIcon,
	EyeIcon,
	FileUpIcon,
	HammerIcon,
	LayoutDashboardIcon,
	LayoutTemplateIcon,
	NotebookPenIcon,
	PaintbrushIcon,
	ScanFaceIcon,
	ShieldIcon,
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

export const ACTIVITY_MANAGEMENT: BaseNode = {
	title: "Activity Management",
	locked: false,
	points: 15,
	days: 7,
	team: "Team name",
	icon: ActivityIcon,
	children: [
		{
			locked: true,
			title: "Login and Registration",
			points: null,
			days: 7,
			team: "Team name",
			icon: ScanFaceIcon,
			children: [
				{
					locked: false,
					title: "UI",
					points: 15,
					days: 7,
					team: "Team name",
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: false,
							title: "Frontend",
							points: 15,
							days: 7,
							team: "Team name",
							icon: PaintbrushIcon,
							children: [
								{
									locked: false,
									title: "Backend",
									points: 15,
									days: 7,
									team: "Team name",
									icon: HammerIcon,
									children: [
										{
											locked: false,
											title: "Data Collection",
											points: 15,
											days: 7,
											team: "Team name",
											icon: NotebookPenIcon,
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
		{
			locked: false,
			title: "Student Dashboard",
			points: 15,
			days: 7,
			team: "Team name",
			icon: LayoutDashboardIcon,
			children: [
				{
					locked: false,
					title: "UI",
					points: 15,
					days: 7,
					team: "Team name",
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: false,
							title: "Frontend",
							points: 15,
							days: 7,
							team: "Team name",
							icon: PaintbrushIcon,
							children: [
								{
									locked: true,
									title: "Backend",
									points: 15,
									days: 7,
									team: "Team name",
									icon: HammerIcon,
									children: [
										{
											locked: false,
											title: "Data Collection",
											points: 15,
											days: 7,
											team: "Team name",
											icon: NotebookPenIcon,
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
		{
			locked: true,
			title: "Staff Dashboard",
			points: 15,
			days: 7,
			team: "Team name",
			icon: LayoutDashboardIcon,
			children: [
				{
					locked: false,
					title: "UI",
					points: 15,
					days: 7,
					team: "Team name",
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: false,
							title: "Frontend",
							points: 15,
							days: 7,
							team: "Team name",
							icon: PaintbrushIcon,
							children: [
								{
									locked: false,
									title: "Backend",
									points: 15,
									days: 7,
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
			locked: false,
			title: "Review Submission",
			points: 15,
			days: 7,
			team: "Team name",
			icon: EyeIcon,
			children: [
				{
					locked: true,
					title: "UI",
					points: 15,
					days: 7,
					team: "Team name",
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: false,
							title: "Frontend",
							points: 15,
							days: 7,
							team: "Team name",
							icon: PaintbrushIcon,
							children: [
								{
									locked: false,
									title: "Backend",
									points: 15,
									days: 7,
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
			title: "Upload Certificate",
			points: 15,
			days: 7,
			team: "Team name",
			icon: FileUpIcon,
			children: [
				{
					locked: false,
					title: "UI",
					points: 15,
					days: 7,
					team: "Team name",
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: false,
							title: "Frontend",
							points: 15,
							days: 7,
							team: "Team name",
							icon: PaintbrushIcon,
							children: [
								{
									locked: false,
									title: "Backend",
									points: 15,
									days: 7,
									team: "Team name",
									icon: HammerIcon,
									children: [
										{
											locked: false,
											title: "Data Collection",
											points: 15,
											days: 7,
											team: "Team name",
											icon: NotebookPenIcon,
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
		{
			locked: false,
			title: "Miscellaneous",
			points: 15,
			days: 7,
			team: "Team name",
			icon: EllipsisIcon,
			children: [],
		},
		{
			locked: false,
			title: "Administrator Page",
			points: 15,
			days: 7,
			team: "Team name",
			icon: ShieldIcon,
			children: [
				{
					locked: false,
					title: "UI",
					points: 15,
					days: 7,
					team: "Team name",
					icon: LayoutTemplateIcon,
					children: [
						{
							locked: false,
							title: "Frontend",
							points: 15,
							days: 7,
							team: "Team name",
							icon: PaintbrushIcon,
							children: [
								{
									locked: false,
									title: "Backend",
									points: 15,
									days: 7,
									team: "Team name",
									icon: HammerIcon,
									children: [
										{
											locked: false,
											title: "Data Collection",
											points: 15,
											days: 7,
											team: "Team name",
											icon: NotebookPenIcon,
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
};
