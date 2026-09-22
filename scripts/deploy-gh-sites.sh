#!/usr/bin/env bash
set -euo pipefail

remote="${DEPLOY_REMOTE:-origin}"
branch="${DEPLOY_BRANCH:-gh-sites}"
worktree="$(mktemp -d "${TMPDIR:-/tmp}/course-site-deploy.XXXXXX")"

cleanup() {
  git worktree remove --force "$worktree" >/dev/null 2>&1 || true
  rmdir "$worktree" >/dev/null 2>&1 || true
}
trap cleanup EXIT

echo "Building Docusaurus site..."
npm run build

if git ls-remote --exit-code --heads "$remote" "$branch" >/dev/null 2>&1; then
  git fetch "$remote" "$branch"
  git worktree add "$worktree" "$remote/$branch"
elif git show-ref --verify --quiet "refs/heads/$branch"; then
  git worktree add "$worktree" "$branch"
else
  git worktree add --detach "$worktree"
  (
    cd "$worktree"
    git switch --orphan "$branch"
    git rm -rf . >/dev/null 2>&1 || true
  )
fi

find "$worktree" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R build/. "$worktree/"
touch "$worktree/.nojekyll"

(
  cd "$worktree"
  git add --all
  if git diff --cached --quiet; then
    echo "No site changes to publish."
    exit 0
  fi
  git commit -m "Deploy site"
  git push "$remote" "HEAD:$branch"
)

echo "Published site to $remote/$branch."
