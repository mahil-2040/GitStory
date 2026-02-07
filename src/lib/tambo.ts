import { CommitTimeline, commitTimelineSchema } from "@/components/tambo/commit-timeline";
import { ContributorNetwork, contributorNetworkSchema } from "@/components/tambo/contributor-network";
import { DiffViewer, diffViewerSchema } from "@/components/tambo/diff-viewer";
import { RiskHeatmap, riskHeatmapSchema } from "@/components/tambo/risk-heatmap";
import type { TamboComponent } from "@tambo-ai/react";
import { TamboTool } from "@tambo-ai/react";

export const tools: TamboTool[] = [];

export const components: TamboComponent[] = [
  {
    name: "CommitTimeline",
    description: "Displays a timeline of git commits grouped by month. Use this component when the user asks about commits, commit history, or repository activity. Shows commit messages, authors, dates, line changes, and file details in a visual timeline format.",
    component: CommitTimeline,
    propsSchema: commitTimelineSchema,
  },
  {
    name: "ContributorNetwork",
    description: "Displays an interactive network graph showing repository contributors with their commit counts. Use this component when showing contributors, team members, or people who worked on the project.",
    component: ContributorNetwork,
    propsSchema: contributorNetworkSchema,
  },
  {
    name: "DiffViewer",
    description: "Displays a side-by-side or unified diff view of code changes with syntax highlighting and annotations. Use this component when showing file changes, code differences, commit diffs, or comparing code versions.",
    component: DiffViewer,
    propsSchema: diffViewerSchema,
  },
  {
    name: "RiskHeatmap",
    description: "Displays a risk heatmap of repository files showing risk scores based on churn, complexity, test coverage, and recent changes. Use this component when the user asks about risky files, code health, technical debt, bug-prone areas, or which files need attention. Supports sorting by risk/churn/complexity and filtering by threshold level.",
    component: RiskHeatmap,
    propsSchema: riskHeatmapSchema,
  },
];
