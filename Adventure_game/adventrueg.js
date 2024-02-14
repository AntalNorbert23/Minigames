
const answer=prompt("Would you like to play this mysterious game? (y/n)");

if (answer.toLowerCase() === "n"){
    console.log("Well...Bad choice... you haven't entered the game but still you died! Looser!")
}else if(answer.toLowerCase() ==="y"){
    const answer2=prompt("Welcome to the great Kingdom! Which way would you like to go? (forward/left/right)");
        if(answer2.toLowerCase() ==="forward"){
            console.log("You should have choosen another path! You are in front of a big door that is close.");
            const answer2_1=prompt("What will you do now? Search for a key around or just turn back? (search/turn)");
                if(answer2_1.toLowerCase() ==="search"){
                    console.log("What a wisdom! You start searching for the key but instead of it you find a cat...");
                    const answer2_1=prompt("Should you feed her or just leave it and search more? (feed/leave)");
                    if(answer2_1.toLowerCase() ==="feed"){
                        console.log("The cat meows and starts eating...");
                        const answer2_1=prompt("After the cat is full you observe that the door is open... Sould you enter or follow the cat? (enter/follow)");
                        if(answer2_1.toLowerCase() ==="enter"){
                            console.log("Great choice! You find a bridge and you want to cross it, but a soldier appears out of nowhere...");
                            const answer2_1=prompt("Will you ask him to let you cross the bridge or steal his sword and kill him? (ask/steal)");
                            if(answer2_1.toLowerCase() === "ask"){
                                console.log("Well done My Lord! The soldier seems kind...")
                                const answer2_1=prompt("Suddenly the soldier starts running after you while you pass the bridge... You have 2 choices kill him or run as fast as you can (kill/run)")
                            }else{
                                console.log("Bad luck... While you wanted to steal his sword he turns around and accidentally kills you. Game Over.")
                            }
                        }else{
                            console.log("You start following the cat but she transforms into a monster so she eats you. You are DEAD.");
                        }
                    }else{
                        console.log("Too bad... the cat was the only choice to save your life! You DIED!");
                    }
                }else{
                    console.log("Wrong choice my Lord! The path just disappeared and you are falling constantly to the end of times... You DIED!");
                }
        }else if(answer2.toLowerCase() ==="left"){
            console.log("You are lucky today! You have found the path to the great Kingdom!");
        }else if(answer2.toLowerCase() ==="right"){
            console.log("You probably will have a bad day... a black cat just showed up and acrossed your path!");
        }else{

        }
}else{
    console.log("Please entry a valid answer! Refresh the page to start..");
}
