# Git

## Process

1. Checkout a new branch `git checkout -b branchNamme`
2. Make Changes
3. ACP
    - Push: `git push origin branchName` **NOT MAIN**
    - Check current branch: `git branch`
4. Create pull request on github
5. Review code and merge on github
6. Delete Branch on Github and Git
    - Git: `git branch -D branchName`

## Updated Main

- After these changes have been made, the main branch is updated
- You will then have to update the main branch on your local computer since the changes have not been reflected locally
- `git checkout main`
- `git pull origin main` or `git pull`
- Now, the main branch and your main branch on your local computer should both be updated with the same information
