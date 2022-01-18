#! /bin/bash
commit_id=$(git rev-parse --short=11 HEAD)
diff=$(git diff $commit_id --no-commit-id --name-only)
branch=$(git rev-parse --abbrev-ref HEAD)
printf "# Branch\n"$branch"\n# Commit ID\n"$commit_id"\n# Changed files\n"$diff"\n\n---" > README.md
