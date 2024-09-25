#!/usr/bin/env node

import fs from 'fs';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();
const tasksFilePath = './tasks.json';

// Check if tasks.json exists; create an empty array if not
if (!fs.existsSync(tasksFilePath)) {
    try {
        fs.writeFileSync(tasksFilePath, JSON.stringify([]));
    } catch (error) {
        console.error(chalk.red('Error creating tasks file:', error.message));
    }
}

// Helper functions to read and write tasks
function loadTasks() {
    try {
        return JSON.parse(fs.readFileSync(tasksFilePath));
    } catch (error) {
        console.error(chalk.red('Error reading tasks:', error.message));
        return []; // Return an empty array on error
    }
}

function saveTasks(tasks) {
    try {
        fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
    } catch (error) {
        console.error(chalk.red('Error saving tasks:', error.message));
    }
}

// Initialize the command line interface
program
    .name('task-tracker')
    .description('A simple CLI for managing tasks')
    .version('1.0.0');

// Add task command
program
    .command('add <task>')
    .description('Add a new task')
    .action((task) => {
        const tasks = loadTasks();
        tasks.push({ task, status: 'pending' });
        saveTasks(tasks);
        console.log(chalk.green(`Task added: "${task}"`));
    });

// List tasks command
program
    .command('list')
    .description('List all tasks')
    .action(() => {
        const tasks = loadTasks();
        if (tasks.length === 0) {
            console.log(chalk.yellow('No tasks found.'));
        } else {
            tasks.forEach((task, index) => {
                console.log(
                    `${index + 1}. ${task.task} - ${task.status === 'done' ? chalk.green('Done') : task.status === 'in-progress' ? chalk.blue('In Progress') : chalk.red('Pending')}`
                );
            });
        }
    });

// Update task status command
program
    .command('update <taskNumber> <status>')
    .description('Update the status of a task (status: pending, in-progress, done)')
    .action((taskNumber, status) => {
        const tasks = loadTasks();
        const index = parseInt(taskNumber, 10) - 1;
        if (index >= 0 && index < tasks.length && ['pending', 'in-progress', 'done'].includes(status)) {
            tasks[index].status = status;
            saveTasks(tasks);
            console.log(chalk.green(`Task ${taskNumber} updated to "${status}"`));
        } else {
            console.log(chalk.red('Invalid task number or status.'));
        }
    });

// Remove task command
program
    .command('remove <taskNumber>')
    .description('Remove a task by its number')
    .action((taskNumber) => {
        const tasks = loadTasks();
        const index = parseInt(taskNumber, 10) - 1;
        if (index >= 0 && index < tasks.length) {
            const removedTask = tasks.splice(index, 1);
            saveTasks(tasks);
            console.log(chalk.green(`Task removed: "${removedTask[0].task}"`));
        } else {
            console.log(chalk.red('Invalid task number.'));
        }
    });

program.parse(process.argv);
