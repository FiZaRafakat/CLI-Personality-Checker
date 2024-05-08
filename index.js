#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
import clear from "clear";
import chalkAnimation from "chalk-animation";
import ora from "ora";
async function firstAnimate(text) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise((resolve) => {
            setTimeout(resolve, 10);
        });
    }
}
async function secondAnimate(text) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise((resolve) => {
            setTimeout(resolve, 10);
        });
    }
}
class Personality {
    name;
    birthdayMonth;
    birthdayDate;
    constructor(name, birthdayMonth, birthdayDate) {
        this.name = name;
        this.birthdayMonth = birthdayMonth;
        this.birthdayDate = birthdayDate;
    }
    getZodiacSign() {
        const day = parseInt(this.birthdayDate);
        const monthIndex = this.getMonthIndex(this.birthdayMonth);
        if ((monthIndex === 2 && day >= 21) || (monthIndex === 3 && day <= 19)) {
            return "Aries";
        }
        else if ((monthIndex === 3 && day >= 20) || (monthIndex === 4 && day <= 20)) {
            return "Taurus";
        }
        else if ((monthIndex === 4 && day >= 21) || (monthIndex === 5 && day <= 20)) {
            return "Gemini";
        }
        else if ((monthIndex === 5 && day >= 21) || (monthIndex === 6 && day <= 22)) {
            return "Cancer";
        }
        else if ((monthIndex === 6 && day >= 23) || (monthIndex === 7 && day <= 22)) {
            return "Leo";
        }
        else if ((monthIndex === 7 && day >= 23) || (monthIndex === 8 && day <= 22)) {
            return "Virgo";
        }
        else if ((monthIndex === 8 && day >= 23) || (monthIndex === 9 && day <= 22)) {
            return "Libra";
        }
        else if ((monthIndex === 9 && day >= 23) || (monthIndex === 10 && day <= 22)) {
            return "Scorpio";
        }
        else if ((monthIndex === 10 && day >= 23) || (monthIndex === 11 && day <= 21)) {
            return "Sagittarius";
        }
        else if ((monthIndex === 11 && day >= 22) || (monthIndex === 0 && day <= 19)) {
            return "Capricorn";
        }
        else if ((monthIndex === 0 && day >= 20) || (monthIndex === 1 && day <= 18)) {
            return "Aquarius";
        }
        else {
            return "Pisces";
        }
    }
    getMonthIndex(month) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months.indexOf(month);
    }
    async printPersonality() {
        const zodiacSign = this.getZodiacSign();
        switch (zodiacSign) {
            case "Aries":
                const animation = chalkAnimation.neon("\n\t\tPersonality traits of Aries:\n");
                setTimeout(async () => {
                    animation.stop();
                    await firstAnimate(chalk.grey(`
       *  You possess a natural assertiveness and confidence, never shying away from taking the lead.
       *  Energy pulses through you, fueling your enthusiasm for new challenges and experiences.
       *  Independence is your hallmark; you cherish the freedom to carve your own path.
       *  Competitive by nature, you thrive on challenges and strive to emerge victorious.
       *  Sometimes impulsive, you're known for making decisions on instinct rather than deliberation.\n`));
                }, 3000);
                break;
            case "Taurus":
                const animationT = chalkAnimation.neon("\n\t\tPersonality traits of Taurus:\n");
                setTimeout(async () => {
                    animationT.stop();
                    await firstAnimate(chalk.grey(`
        *  Your steadfast nature is your strength, providing stability and reliability to those around you.
        *  Grounded and practical, you have a keen sense of what is enduring and valuable in life.
        *  Sensual and pleasure-seeking, you indulge in life's comforts and luxuries.
        *  Your determination knows no bounds; once you set your sights on a goal, you pursue it with unwavering dedication.
        *  Though patient and dependable, you can be stubborn at times, reluctant to change your course once set.\n`));
                }, 3000);
                break;
            case "Aquarius":
                const animationA = chalkAnimation.neon("\n\t\tPersonality traits of Aquarius:\n");
                setTimeout(async () => {
                    animationA.stop();
                    await firstAnimate(chalk.grey(`
        *  Independent and visionary, you march to the beat of your own drum, unafraid to challenge convention.
        *  Humanitarian at heart, you're driven by a deep desire to make the world a better place for all.
        *  Intellectual and innovative, you're constantly seeking new ideas and solutions to society's problems.
        *  Eccentric and unconventional, you celebrate your individuality and encourage others to do the same.
        *  Though you value your independence, your altruism and idealism inspire others to join your cause.\n`));
                }, 3000);
                break;
            case "Gemini":
                const animationG = chalkAnimation.neon("\n\t\tPersonality traits of Gemini:\n");
                setTimeout(async () => {
                    animationG.stop();
                    await firstAnimate(chalk.grey(`
        *  Versatile and adaptable, you effortlessly navigate various situations and environments.
        *  Intellectually curious, you crave mental stimulation and thrive on learning new things.
        *  Your charm and wit are irresistible, making you the life of any social gathering.
        *  Dual in nature, you possess a multifaceted personality, capable of seeing both sides of any issue.
        *  Restless and easily bored, you seek constant excitement and change to satisfy your curiosity.\n`));
                }, 3000);
                break;
            case "Leo":
                const animationLeo = chalkAnimation.neon("\n\t\tPersonality traits of Leo:\n");
                setTimeout(async () => {
                    animationLeo.stop();
                    await firstAnimate(chalk.grey(`
        *   Regal and charismatic, you command attention wherever you go, effortlessly taking center stage.
        *   Your confidence is unshakeable, fueling your ambition and drive for success.
        *   Generous and warm-hearted, you enjoy showering your loved ones with affection and gifts.
        *   Leadership comes naturally to you; you excel in positions of authority and responsibility.
        *   Though proud and sometimes prone to vanity, you have a heart of gold and a fierce loyalty to those you hold dear.\n`));
                }, 3000);
                break;
            case "Libra":
                const animationL = chalkAnimation.neon("\n\t\tPersonality traits of Libra:\n");
                setTimeout(async () => {
                    animationL.stop();
                    await firstAnimate(chalk.grey(` 
        *   Diplomatic and fair-minded, you excel at finding balance and harmony in all aspects of life.
        *   Your sociable nature and charm make you a natural peacemaker and mediator in conflicts.
        *   Justice and equality are your guiding principles; you strive to uphold fairness and impartiality.
        *   Indecisiveness may plague you at times as you weigh the pros and cons of every choice.
        *   Romantic at heart, you appreciate beauty and cultivate meaningful connections with others.\n`));
                }, 3000);
                break;
            case "Cancer":
                const animationC = chalkAnimation.neon("\n\t\tPersonality traits of Cancer:\n");
                setTimeout(async () => {
                    animationC.stop();
                    await firstAnimate(chalk.grey(`
        *  Nurturing and empathetic, you're deeply attuned to the emotions and needs of others.
        *  Your intuition is your guiding light, leading you to make decisions based on gut feelings.
        *  Home and family are your sanctuaries, where you find solace and belonging.
        *  Protective of your loved ones, you fiercely defend and support them through thick and thin.
        * Though sensitive, you possess inner strength and resilience, able to weather life's storms with grace.\n`));
                }, 3000);
                break;
            case "Virgo":
                const animationV = chalkAnimation.neon("\n\t\tPersonality traits of Virgo:\n");
                setTimeout(async () => {
                    animationV.stop();
                    await firstAnimate(chalk.grey(`
        *  Methodical and analytical, you approach life with precision and attention to detail.
        *  Your practicality is unmatched, allowing you to solve problems with ease and efficiency.
        *  Service-oriented, you derive fulfillment from helping others and making a meaningful contribution.
        *  Perfectionism drives you to excel in everything you do, often setting high standards for yourself and others.
        * Though reserved and modest, your intelligence and humility shine brightly, earning you admiration from all who know you.\n`));
                }, 3000);
                break;
            case "Capricorn":
                const animationCc = chalkAnimation.neon("\n\t\tPersonality traits of Capricorn:\n");
                setTimeout(async () => {
                    animationCc.stop();
                    await firstAnimate(chalk.grey(`
        *  Ambitious and disciplined, you possess the drive and determination to achieve your loftiest goals.
        *  Grounded in reality, you approach life with practicality and a focus on long-term success.
        *  Your patience and perseverance are unmatched; you're willing to put in the hard work to reach your aspirations.
        *  Traditional and responsible, you take pride in your reliability and commitment to duty.
        *  Though sometimes seen as reserved, your loyalty and steadfastness make you a trusted confidant and ally.\n`));
                }, 3000);
                break;
            case "Sagittarius":
                const animationS = chalkAnimation.neon("\n\t\tPersonality traits of Sagittarius:\n");
                setTimeout(async () => {
                    animationS.stop();
                    await firstAnimate(chalk.grey(`
        * Adventurous and optimistic, you embrace life with boundless enthusiasm and a thirst for exploration.
        * Your freedom-loving spirit knows no bounds; you crave independence and resist limitations.
        * Philosopher and truth-seeker, you're always searching for the deeper meaning behind life's mysteries.
        * Your spontaneity and love of adventure sometimes lead you to act impulsively without thinking.
        * Generous and open-hearted, you inspire others with your zest for life and unwavering optimism.\n`));
                }, 3000);
                break;
            case "Scorpio":
                const animationScorpio = chalkAnimation.neon("\n\t\tPersonality traits of Scorpio:\n");
                setTimeout(async () => {
                    animationScorpio.stop();
                    await firstAnimate(chalk.grey(`
        * Intense and passionate, you dive deep into every experience and emotion, unafraid of the depths.
        * Mystery surrounds you; your enigmatic aura captivates those around you, drawing them in.
        * Determination is your hallmark; once you set your sights on a goal, nothing can deter you.
        * Protective of your loved ones, you fiercely defend and support them, no matter the cost.
        * Resilient and transformative, you emerge from life's trials stronger and more powerful than before.\n`));
                }, 3000);
                break;
            case "Pisces":
                const animationP = chalkAnimation.neon("\n\t\tPersonality traits of Pisces:\n");
                setTimeout(async () => {
                    animationP.stop();
                    await firstAnimate(chalk.grey(`
        *  Compassionate and empathetic, you feel deeply attuned to the emotions of others, often putting their needs before your own.
        *  Imaginative and creative, you possess a rich inner world filled with dreams, fantasies, and artistic expression.
        *  Your intuition is your guiding light, leading you to make decisions based on gut feelings and spiritual insights.
        *  Sometimes prone to escapism, you seek refuge in daydreams and fantasy worlds to avoid harsh realities.
        *  Despite your gentle nature, you possess inner strength and resilience, able to weather life's storms with grace and compassion.\n`));
                }, 3000);
            default:
                await secondAnimate(chalk.red.italic.underline("\n\t\tSorry, personality traits not available for this zodiac sign.\n"));
        }
    }
}
async function main() {
    let personsInfo = await inquirer.prompt([
        {
            name: "Name",
            type: "input",
            message: chalk.green("Enter Your name Here : \t")
        },
        {
            name: "birthdayMonth",
            type: "list",
            message: chalk.green("Select Your Birthday Month : \t"),
            choices: ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"]
        },
        {
            name: "birthdayDate",
            type: "input",
            message: chalk.green("Enter your Birthday Date : \t"),
            validate: (input) => {
                if (isNaN(input)) {
                    return chalk.bgRed.whiteBright.italic.underline("\n\tPlease Enter Your Birthday Date in Number.\n");
                }
                else if (input > 31) {
                    return chalk.bgRed.italic.whiteBright.underline("\n\tPlease Enter a Number less than 31 for your Birthday Date.\n");
                }
                else {
                    return true;
                }
            },
        }
    ]);
    const person = new Personality(personsInfo.Name, personsInfo.birthdayMonth, personsInfo.birthdayDate);
    const zodiacSign = person.getZodiacSign();
    const Rainbow = chalkAnimation.rainbow(`\n\t\t\t\tHello ${person.name}, your Zodiac sign is ${zodiacSign}.\n`);
    setTimeout(() => {
        Rainbow.stop();
        setTimeout(async () => {
            let checkPersonality = await inquirer.prompt({
                name: "Checker",
                type: "confirm",
                message: chalk.green("Do you want to check out your Personality?\t")
            });
            if (checkPersonality.Checker === true) {
                const spinner = ora(chalk.bold.magenta.italic('Loading')).start();
                await new Promise((resolve) => setTimeout(() => {
                    spinner.color = 'magenta';
                    spinner.text = "Analyzing your Personality";
                    resolve();
                }, 3000));
                spinner.stop();
                await person.printPersonality();
            }
            else {
                await secondAnimate(chalk.bgMagenta.whiteBright("\n\tThank You for Using my Personality Checker Project :)\n"));
            }
        }, 1000);
    }, 1000);
}
clear();
const Rainbow = chalkAnimation.rainbow(`\n\t\t\t\tWelcome to Fiza's Personality Checker Project.\n`);
setTimeout(async () => {
    Rainbow.stop();
    main();
}, 1000);
