#! /bin/bash
commit_id=`git rev-parse --short=11 HEAD`
echo $commit_id
git diff $commit_id --no-commit-id --name-only
