# Github Rules

## Branch List

| name | purpose |
| :---: | :----- |
| main | Deploy to netlify |
| develop | Develop or Fix system |
| test | Testing new modules |

## Git Commands

**Check out, these Git Commands**

1. Branches
2. Naming
3. Errors

### Branches

```javascript
// Check commit and branch

git branch // check branch, using now.
git branch -r // check branch, using in repo now.
git branch -v // check last commit message in branch, using now.

// Create and Delete branch in loacl and repo

git branch branch_name // create branch
git branch -d branch_name // delete branch
git branch -D branch_anem // delete brnach with forced,

git push origin --delete branch_name // delete branch in repo

git push origin -u origin branch_name // push branch data to repo

// Using branch

git switch branch_name // switch branch

// Restore

git restore // Restore unstaged files
git restore --staged // Resotre staged files

// Merge : "git merge" foward to HEAD, so, first you checkout HEAD

git checkout main
git merge branch_name -m "commit messages"
```
[Merge Seperated Branches](https://backlog.com/git-tutorial/kr/stepup/stepup2_4.html#:~:text=%EB%B8%8C%EB%9E%9C%EC%B9%98%20%EB%B3%91%ED%95%A9%EC%9D%80%20merge%20%EB%AA%85%EB%A0%B9%EC%96%B4,%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%97%90%20%EC%9C%84%EC%B9%98%ED%95%98%EA%B2%8C%20%EB%90%A9%EB%8B%88%EB%8B%A4.)

### Naming

| Commit | Detailes |
| :----- | :-------- |
| INITIAL | Initial settings |
| MARKDOWN ADD,DEL,FIX | ADD~FIX MARKDOWN |
| ADD function | Typed detials about function with updated date |
| DEL function | Typed detials about function with updated date |
| FIX function | Typed detials about function with updated date |
| Ver.1.0.0 | Version means release version for netlify |


### Errors

I got 1 error case

1. src refspec origin does not match any

#### src refspec origin does not match any

I got 1 error case

1. push new branches


##### Push new branches

Check right these

1. Command and Error
2. Cause to Solution

###### Command and Error

```cmd
git branch develope
git branch -v
git branch -r
git push -u origin develope

error: src refspec origin does not match any
error: failed to push some refs to 'https://github.com/unchaptered/22-04-svelte-movie-app.git'
```

###### Cause to Solution

If you want to push new_branch to origin(repo), You need to set HEAD to new_branch.

In upeer case, your HEAD on the **main**.

So you can't push new_branch to origin(repo).

Type right these!

```cmd
git branch develope
git branch -v
git branch -r
git switch develope
git push -u origin develope
git branch -v
git branch -r
```