#!/usr/bin/env node

import chalk from 'chalk';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
import figlet from 'figlet';

//console.log(chalk.bgBlue('hello'))

let prayerName;
const sleep=(ms=2000)=>new Promise((r)=>setTimeout(r,ms));
async function welcome(){
    const glitchTitle=chalkAnimation.glitch('who wants to play?\n');
    await sleep();
    glitchTitle.stop();
    
    console.log(`${chalk.bgBlue('How to play\n')}`);
};

async function askName(){
 const answers=await inquirer.prompt({
    name:'player_name',
    type:'input',
    message:'Enter your Player name?',
    default(){
        return 'Player';
    }
    });
    prayerName=answers.player_name;
};

async function question1(){
    const answers= await inquirer.prompt({
        name:'question1',
        type:'list',
        message:'javascript was created in 10days then released on?\n',
        choices:[
            'may 12rd 1995',
            'may 23rd 6777'
        ]
    });
    return handleAnswer(answers.question1)
};

async function handleAnswer(isCorrect){
    const spinner=createSpinner('Checking Answer...').start();
    await sleep();
    if(isCorrect){
        spinner.success({text:`Nice work ${prayerName}`})
    }else{
        spinner.error({text:`💀💀💀 Game Over, you lose ${prayerName}`});
        process.exit(1)
    }
}

function winner(){
    console.clear();
    const msg=`Congrats ${prayerName} !\n`;
    figlet(msg,(err,data)=>{
        console.log(gradient.pastel.multiline(data));
    });
}

//call
await welcome();
await askName();
await question1();
await winner();