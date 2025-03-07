# Installation
Clone this repo from github:
```bash
git clone https://github.com/JMencius/LongBowDB.git

cd LongBowDB
```
Then install the environment, please install longbow first:
```bash
conda create -n longbowdb
conda activate longbowdb
conda install longbow

pip install updating_module/longbowdb-1.0-py3-none-any.whl

longbowdb -v
```

# Usage
## Check the availability of edirect and fastq-dump 
```bash
longbowdb -d path-to-LongBowDB --test
```
## Update LongBowDB
```bash
longbowdb -d path-to-LongBowDB --update
```
Then you can check the extended run info and LongBow prediction results in **[path-to-LongBowDB]/data/LongBowDB_ext.csv**. And commit changes to github if there is no problem.

## Set automatic updating
For automatic updating, you can use:
```bash
longbowdb -d path-to-LongBowDB --schedule
```
**NOTE that you need to get the permission to set crontab on your server.** This will set your server run an updating every other period. The process will check if the server is idle. It will delay the updating when the server is busy and check if it is suitable to run updating every single day.

The results still need manually verification before public, we **do not** support auto release.
