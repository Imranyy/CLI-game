#!/usr/bin/env node

import chalk from 'chalk';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
import figlet from 'figlet';



//welcome player
let prayerName;
const sleep=(ms=2000)=>new Promise((r)=>setTimeout(r,ms));
async function welcome(){
    const msg='SnoopyPoopyPants\n';
    figlet(msg,(err,data)=>{
        console.log(chalk.yellow(data))
    });
    await sleep();
    
    console.log(`${chalk.yellow('How to play')} 
     :.This is a Quiz Game,
     :.Provide your Player name. 
     :.if you happen to win, there is a prize at the end.
    `);
};

//ask name
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

//question1
async function question1(){
    const answers= await inquirer.prompt({
        name:'question1',
        type:'list',
        message:'javascript was created in 10days then released on?\n',
        choices:[
            'may',
            'may 23rd 6777'
        ]
    });
    
    return handleAnswer(answers.question1=='may')
};

//question2
async function question2(){
    const answers=await inquirer.prompt({
        name:'question2',
        type:'list',
        message:'Who is the Best Programmer?\n',
        choices:[
            'imran',
            'matano',
            'job'
        ]
    });
    return handleAnswer(answers.question2=='imran')
}

//handle answer
async function handleAnswer(isCorrect){
    const spinner=createSpinner('Checking Answer...').start();
    await sleep();
    if(isCorrect){
        spinner.success({text:`Nice work ${prayerName}\n`})
        await sleep();
    }else{
        spinner.error({text:`💀💀💀 Game Over, you lose ${prayerName}`});
        process.exit(1)
    }
}

/*try again
async function tryAgain(){
    const Try=await inquirer.prompt({
        name:'try',
        type:'input',
        message:'Try again!'
    })
 await question1()
}
*/

function winner(){
    console.clear();
    const msg=`Congrats ${prayerName} !\n`;
    figlet(msg,(err,data)=>{
        console.log(gradient.pastel.multiline(data));
    });
}

//calling functions
await welcome();
await askName();
await question1();
await question2();
await winner();