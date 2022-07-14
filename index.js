#!/usr/bin/env node
import chalk from 'chalk';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
import figlet from 'figlet';

let prayerName;
let number;
let easy;

//welcome player
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

//hard or easy
async function easyOrHard(){
    const answer=await inquirer.prompt({
        name:'easyorhard',
        type:'list',
        message:'Choose?',
        choices:[
            'Easy',
            'Hard'
        ]
    });
    easy=answer.easyorhard;
    return handleEasyOrHard(answer.easyorhard)
}

//questions
async function question1(){
    const answers= await inquirer.prompt({
        name:'question1',
        type:'list',
        message:'1:.If Facebook was a country, how would it be in terms of population?\n',
        choices:[
            '3 million',
            '1 billion',
            '1.4 billion',
            '700 thousand'
        ]
    });
    
    return handleAnswer(answers.question1=='1 billion')
};

async function question2(){
    const answers=await inquirer.prompt({
        name:'question2',
        type:'list',
        message:'2:.World-wide, what language is used the most on the internet?\n',
        choices:[
            'German',
            'English',
            'Spanish',
            'Chinese'
        ]
    });
    return handleAnswer(answers.question2=='English')
}

async function question3(){
    const answers=await inquirer.prompt({
        name:'question3',
        type:'list',
        message:'3:.True or False: google is the second largest search engine?\n',
        choices:[
            'True',
            'False'
        ]
    });
    return handleAnswer(answers.question3=='False')
}

async function question4(){
    const answers=await inquirer.prompt({
        name:'question4',
        type:'list',
        message:'4:.When do chinese students start learning English?\n',
        choices:[
            'High school',
            'Middle school',
            'Elementary school',
            'Kindergarten'
        ]
    });
    return handleAnswer(answers.question4=='Kindergarten')
}

async function question5(){
    const answers=await inquirer.prompt({
        name:'question5',
        type:'list',
        message:'5:.Twitter reported how many Tweets per day in june 2012?\n',
        choices:[
            '2 million',
            '400 million',
            '700 thousand',
            '1 billion'
        ]
    });
    return handleAnswer(answers.question5=='400 million')
}

async function question6(){
    const answers=await inquirer.prompt({
        name:'question6',
        type:'list',
        message:'6:.True or False. More people in india speak English than in the United States?\n',
        choices:[
            'True',
            'False'
        ]
    });
    return handleAnswer(answers.question6=='True')
}

async function question7(){
    const answers=await inquirer.prompt({
        name:'question7',
        type:'list',
        message:'7:.How many Apps are available on the App store?\n',
        choices:[
            '7 billion',
            '7 million',
            '700 thousand',
            '700 million'
        ]
    });
    return handleAnswer(answers.question7=='700 thousand')
}

async function question8(){
    const answers=await inquirer.prompt({
        name:'question8',
        type:'list',
        message:'8:.About how many smartphones are being used in the world?\n',
        choices:[
            '1 million',
            '1 billion',
            '100 billion',
            '100 billion'
        ]
    });
    return handleAnswer(answers.question8=='1 billion')
}

async function question9(){
    const answers=await inquirer.prompt({
        name:'question9',
        type:'list',
        message:'9:.If wikipedia was a book how many pages would it be?\n',
        choices:[
            '1 billion',
            '400 million',
            '2 million'
        ]
    });
    return handleAnswer(answers.question9=='2 million')
}

async function question10(){
    const answers=await inquirer.prompt({
        name:'question10',
        type:'list',
        message:'10:.What runs and does not have legs?\n',
        choices:[
            'Acids',
            'Liquids',
            'Water',
            'Lava'
        ]
    });
    return handleAnswer(answers.question10=='Water')
}

/*async function last(){
    const answer=await inquirer.prompt({
        name:'last',
        type:'input',
        message:'What is Your WhatsApp Number',
        default(){
            return 'I didnt wanna👿👿!'
        }
    })
    number=answer.last;
}*/


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


//handle easy or hard answer
async function handleEasyOrHard(isCorrect){
    const spinner=createSpinner('Starting...').start();
    await sleep();
    if(isCorrect=='Easy'){
        spinner.success({text:`Lets Go ${easy}..🤓🤓\n`})
        await sleep();
        //await question1();
        //await question2();
        //await question3();
        //await question4();
        //await question5();
        //await question6();
        //await question7();
        //await question8();
        //await question9();
        //await question10();
    }else if(isCorrect=='Hard'){
        spinner.success({text:`Lets Go ${easy}..💀💀\n`});
        await sleep();
    }
}

//winner
function winner(){
    console.clear();
    const msg=`Congrats, ${prayerName} !\n`;
    figlet(msg,(err,data)=>{
        console.log(gradient.pastel.multiline(data));
    });
    console.log(chalk.yellow('\n  https://wa.me/+254754423664'))
}

//calling functions
await welcome();
await askName();
await easyOrHard();
//
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
await question9();
await question10();
//
//await last();
await winner();