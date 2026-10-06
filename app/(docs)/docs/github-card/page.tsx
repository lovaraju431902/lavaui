import GitHubProfileCard from '@/components/lavaui/github-profile-card';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';

export default function GitHubProfileCardPage() {
  return (
    <PreviewCodeCard
      path="app/(docs)/docs/github-card/page.tsx"
      cli="@lava/github-profile-card"
      installCodePath="components/lavaui/github-profile-card.tsx"
    >
      <GitHubProfileCard />
    </PreviewCodeCard>
  );
}
