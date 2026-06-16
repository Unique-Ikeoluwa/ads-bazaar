import { DashboardHeader } from "@/components/dashboard/creator/dashboard-header";

/**
 * Placeholder route. Full implementation tracked in
 * https://github.com/Ads-Bazaar/ads-bazaar/issues/17 — see that issue for the
 * file structure, components, design tokens, and acceptance criteria before
 * building this page out.
 */
export default function CreatorCampaignsPage() {
  return (
    <>
      <DashboardHeader eyebrow="Manage your gigs" title="Campaigns" />

      <div className="flex flex-col items-center justify-center gap-2 border border-[var(--dash-border)] bg-[var(--dash-surface)] px-6 py-20 text-center">
        <p className="text-sm font-medium text-[var(--dash-heading)]">
          This page is under construction.
        </p>
        <p className="max-w-md text-sm text-[var(--dash-muted)]">
          Full implementation is tracked in{" "}
          <a
            href="https://github.com/Ads-Bazaar/ads-bazaar/issues/17"
            className="text-[var(--dash-accent)] hover:underline"
          >
            Issue #17
          </a>
          . Replace this file according to that spec — do not create a
          competing route elsewhere.
        </p>
      </div>
    </>
  );
}
