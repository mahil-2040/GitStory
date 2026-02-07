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
    description: `Displays a diff view showing what changed IN a specific commit.

CRITICAL: Show what changed IN the commit, NOT compared to main branch!
- beforeCode = file content BEFORE the commit (at parent commit)
- afterCode = file content AFTER the commit (at the commit itself)

HOW TO GET FILE CONTENT:
1. For a specific commit (e.g., "abc1234"):
   - beforeCode: Get file at ref "abc1234^" or "abc1234~1" (PARENT commit)
   - afterCode: Get file at ref "abc1234" (THE commit itself)

2. For file changes in a PR:
   - beforeCode: Get file at the PR's base branch (e.g., "main" or "develop")
   - afterCode: Get file at the PR's head branch

3. Edge cases:
   - File was ADDED in commit: beforeCode = "" (empty string)
   - File was DELETED in commit: afterCode = "" (empty string)
   - File doesn't exist at ref: use empty string

ERROR HANDLING:
- If a tool call fails, DO NOT retry the same call repeatedly
- If file doesn't exist at a ref, use empty string
- Report errors to user instead of looping

WRONG: Comparing to latest main (shows all changes since forever)
RIGHT: Comparing to parent commit (shows what THIS commit changed)`,
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
