#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyan("\n*************-------------------------*************\n"));
console.log(chalk.bold.magenta(`-------------WELCOME TO ADVENTURE GAME--------------`));
console.log(chalk.bold.cyan("\n*************-------------------------**************\n"));
// create class for Player
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
// create class for Opponent
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "pname",
        type: "input",
        message: chalk.bold.cyan("\nEnter Your Name:"),
    },
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: chalk.bold.cyan("\nSelect your Opponent"),
        choices: [
            chalk.bold.yellow("Skeleton"),
            chalk.bold.gray("Zombie"),
            chalk.bold.green("Alien"),
        ],
    },
]);
// Data Gether
let p1 = new Player(player.pname);
let o1 = new Opponent(opponent.select);
// create do while loop
let condition = true;
do {
    // Skeleton
    if (opponent.select == chalk.bold.yellow("Skeleton")) {
        let ask = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.bold.cyan("\nWhat would you like to do?"),
                choices: [
                    chalk.bold.red("Attack"),
                    chalk.bold.magenta("Drink Portion"),
                    chalk.bold.blue("Run For Your Life..."),
                ],
            },
        ]);
        if (ask.select == chalk.bold.red("Attack")) {
            let no = Math.floor(Math.random() * 2);
            if (no > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.magenta(`\n${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.yellow(`\n${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red("\nyou Loose, Better Luck Next Time\n"));
                    process.exit();
                }
            }
            if (no <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.magenta(`\n${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.yellow(`\n${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green("\nCongratulations, You Win\n"));
                    process.exit();
                }
            }
        }
        if (ask.select == chalk.bold.magenta("Drink Portion")) {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`\nYou Drink Health Portion Your Fuel Is: ${p1.fuel}`));
        }
        if (ask.select == chalk.bold.blue("Run For Your Life...")) {
            console.log(chalk.bold.red("\nYou Loose , Better Luck Next Time\n"));
            process.exit();
        }
    }
    // Zombie
    if (opponent.select == chalk.bold.grey("Zombie")) {
        let ask = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.bold.cyan("\nWhat would you like to do?"),
                choices: [
                    chalk.bold.red("Attack"),
                    chalk.bold.magenta("Drink Portion"),
                    chalk.bold.blue("Run For Your Life..."),
                ],
            },
        ]);
        if (ask.select == chalk.bold.red("Attack")) {
            let no = Math.floor(Math.random() * 2);
            if (no > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.magenta(`\n${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.grey(`\n${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red("\nyou Loose, Better Luck Next Time\n"));
                    process.exit();
                }
            }
            if (no <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.magenta(`\n${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.grey(`\n${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green("\nCongratulations, You Win\n"));
                    process.exit();
                }
            }
        }
        if (ask.select == chalk.bold.magenta("Drink Portion")) {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`\nYou Drink Health Portion Your Fuel Is: ${p1.fuel}`));
        }
        if (ask.select == chalk.bold.blue("Run For Your Life...")) {
            console.log(chalk.bold.red("\nYou Loose , Better Luck Next Time\n"));
            process.exit();
        }
    }
    //Alien
    if (opponent.select == chalk.bold.green("Alien")) {
        let ask = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.bold.cyan("\nWhat would you like to do?"),
                choices: [
                    chalk.bold.red("Attack"),
                    chalk.bold.magenta("Drink Portion"),
                    chalk.bold.blue("Run For Your Life..."),
                ],
            },
        ]);
        if (ask.select == chalk.bold.red("Attack")) {
            let no = Math.floor(Math.random() * 2);
            if (no > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.magenta(`\n${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`\n${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red("\nyou Loose, Better Luck Next Time\n"));
                    process.exit();
                }
            }
            if (no <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.magenta(`\n${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`\n${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green("\nCongratulations, You Win\n"));
                    process.exit();
                }
            }
        }
        if (ask.select == chalk.bold.magenta("Drink Portion")) {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`\nYou Drink Health Portion Your Fuel Is: ${p1.fuel}`));
        }
        if (ask.select == chalk.bold.blue("Run For Your Life...")) {
            console.log(chalk.bold.red("\nYou Loose , Better Luck Next Time\n"));
            process.exit();
        }
    }
} while (condition);
