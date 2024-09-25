Task Tracker is a simple, command-line interface (CLI) application to help you manage tasks efficiently. It allows you to add, list, update, and remove tasks right from your terminal.

Features:

Add new tasks
List all tasks with their statuses
Update the status of a task
Remove tasks by their number
Task status options: pending, in-progress, and done
Prerequisites:

Node.js (version 12 or higher)
npm (Node Package Manager)
Make sure Node.js and npm are installed on your machine. You can download them from Node.js official website.

Installation:

Clone the repository:

bash
Copier le code
git clone https://github.com/yacinesekhri/task-tracker.git
Navigate to the project directory:

bash
Copier le code
cd privtt
Install the dependencies:

bash
Copier le code
npm install
Make the CLI executable (optional):

bash
Copier le code
chmod +x index.js
Add the CLI to your global path (optional): You can add the command to your global path so you can use it anywhere on your system.

bash
Copier le code
npm link
Usage
1. Add a Task
To add a new task, use the add command followed by the task description in quotes:

bash
Copier le code
task-tracker add "Write documentation for Task Tracker CLI"
This will add a new task with the status set to pending by default.

2. List All Tasks
To list all tasks along with their statuses, use the list command:

bash
Copier le code
task-tracker list
This will display all tasks with their corresponding statuses: pending, in-progress, or done.

3. Update Task Status
You can update the status of a task using the update command, followed by the task number and the new status.

Valid statuses are:

pending
in-progress
done
Example:

bash
Copier le code
task-tracker update 1 done
This will mark the first task as "done".

4. Remove a Task
To remove a task by its number, use the remove command followed by the task number:

bash
Copier le code
task-tracker remove 1
This will remove the task with the specified number from the list.

Example Workflow
Add a task:

bash
Copier le code
task-tracker add "Complete Node.js project"
List tasks:

bash
Copier le code
task-tracker list
Update a task status:

bash
Copier le code
task-tracker update 1 in-progress
Remove a task:

bash
Copier le code
task-tracker remove 1
Task File
All tasks are stored in a tasks.json file located in the project directory. This file maintains your tasks and their statuses. Ensure that this file is not accidentally deleted or altered, as it holds your task data.

License
This project is licensed under the MIT License. See the LICENSE file for details.
