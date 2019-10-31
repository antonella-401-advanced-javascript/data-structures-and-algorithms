# Oops Files
We will be iterating through files, rename files in the following format:
`${FILE_CONTENT}-${OLD_FILE_NUMBER}-${LAST_MODIFIED_DATETIME}. (e.g. shade-1-2019-06-19T15:52:05.420Z)`
## Approach & Efficiency
We have to use fs to read/write/rename the files, we will mock the files and go through them to get the content of each file and the timestamp of the last time it was modified and adding that to the file's name.
## Solution
* get directory
* get array of file paths
* go through each file and get the content
* get the timestamp of the last time file was modified
* rename files based on that info