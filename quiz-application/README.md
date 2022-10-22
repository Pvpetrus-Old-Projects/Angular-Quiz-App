## Repository:

git clone https://github.com/piotrsrednickiDS360/ProjektKomponenty.git
cd ProjektKomponenty

### 1. **GitHub** - branches structure:
- 1.1 - piotr - production branch
- 1.2 - feature - feature branch (name format: {*developer_name.title()*}_{*branch_developer_id*}_{*feature_description*} e.g. *Piotr_1_creating_component* 
- 1.3 create new branch from dev branch: 
  - git checkout -b brach_name
- 1.4 rebase branch: 
  - git fetch origin dev:dev
  - git rebase dev
  - code version selection
  - git add .
  - git rebase --continue
  - code version selection
  - git add .
  - git push -f origin branch_name

### 2. **Git Bash/ PyCharm** - commits:
- 2.1 git add .
- 2.2 git commit -m "commit description" # meaningful commit's description; "wip/./sth" not accepted!
- 2.3 git push origin feature branch e.g. git push origin adam_1_pse_data_scrapper 

### 3. **GitHub** - pull Requests:
- 3.1. PR description as *bullet point list* required
- 3.2. Assign *Piotr Średnicki* as **required reviewer**, rest developers as **optional reviewers**
- 3.3. Merge from feature into dev accepted if PR receive approve vote and all comments/threads are resolved