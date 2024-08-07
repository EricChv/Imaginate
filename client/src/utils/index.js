import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    // check to not get random prompt 2 times in a row
    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt;
}