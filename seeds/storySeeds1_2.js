const mongoose = require("mongoose")
const Story = require("../models/story")

mongoose.connect("mongodb://localhost:27017/adventure1",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"))
db.once("open", () => {
    console.log("database connected")
})

const seedDB = async () => {
    await Story.deleteMany({})
    await Story.insertMany([
        {
            title: "The walk home...",
            actionCode: "0",
            segment1: `It’s after dark. You’re walking home from work, but will stop at the convenience store to buy some things. As you’re walking, you see a shiny object reflecting off a nearby streetlight. Do you go see what it is? Or keep walking?`,
            optionA: "See what it is",
            optionB: "Keep walking",
            actionA: "1A",
            actionB: "1B"
        },
        {
            title: "The Shiny Object",
            actionCode: "1A",
            segment1: `You walk up to the object. It’s a locket, round and silver on a snake chain. You pick it up. Do you open it? Or put it back down?`,
            optionA: "Open it",
            optionB: "Put it down",
            actionA: "1A2A",
            actionB: "1A2B"
        },
        {
            title: "Moving on...",
            actionCode: "1B",
            segment1: `You keep walking, but you keep wondering what it was. Do you go back and check? Or do you shrug and keep walking.`,
            optionA: "Go back",
            optionB: "Keep walking",
            actionA: "1B2A",
            actionB: "1B2B"
        },
        {
            title: "Open the locket...",
            actionCode: "1A2A",
            segment1: `You open the locket. There is a portrait of a woman’s face. You’ve never seen her before.  You consider someone could be looking for this. Do you take it to the police station? Or do you stop by the store first as planned?`,
            optionA: "Police office",
            optionB: "To the store",
            actionA: "1A2A3A",
            actionB: "1A2A3B"
        },
        {
            title: "To the store...",
            actionCode: "1A2B",
            segment1: `You continue walking to the store. Inside, you pick up what you came for. At the register, the cashier is reading the newspaper. You notice there’s a missing person posted on the counter…a woman. You haven’t seen her before, so you think nothing of it.`,
            segment2: `But…after you walk outside the store, you wonder whose picture might be in that locket. Could it be the missing woman? Do you go back to look at the locket again? Or do you head home?`,
            optionA: "Go look",
            optionB: "Head home",
            actionA: "1A2B3A",
            actionB: "1A2B3B"
        },
        {
            title: "Back to the object...",
            actionCode: "1B2A",
            segment1: `You walk back to the object. It’s a locket, round and silver, on a snake chain. You pick it up. Do you open it? Or put it back down?`,
            optionA: "Open it",
            optionB: "Put it down",
            actionA: "1B2A3A",
            actionB: "1B2A3B"
        },
        {   // Ending
            title: "Keep walking...",
            actionCode: "1B2B",
            segment1: `You walk to the store. Inside pick up what you came for.`,
            segment2: `At the register, the cashier is reading the newspaper. You notice there’s a missing person posted on the counter…a woman. You haven’t seen her before, so you think nothing of it. You walk out of the store and head home.`,
            segment3: `Upon arriving, you put your things away and sit on the couch to watch TV. You catch up on a few shows you’d missed. Later, the news comes on. There’s a report of the same missing woman that you saw posted at the store. Still missing after three days.`,
            segment4: `“That’s too bad,” you think to yourself. “Hope they find her.” But, unfortunately, no one ever finds her.`,
            optionA: "Main page",
            optionB: "Do again",
            actionA: "",
            actionB: "story"
        },
        {   // Ending
            title: "To the police office...",
            actionCode: "1A2A3A",
            segment1: `You arrive at the police office and are directed to the lost and found desk. You show them the locket. The officer at the desk opens the locket and has a surprised look on his face. He asks you where you found this locket. You tell him.`,
            segment2: `He sends a team out with you to show them exactly where you found it. You do this. They thank you, and since you are near the store again, you go to get the things you were going to get in the first place.`,
            segment3: `Inside the store you pick up what you wanted. At the register, you notice a missing person posted on the counter…It’s the woman in the locket! You pay for your things and head home.`,
            segment4: `Later, you see a news report on TV that shows the missing woman being saved from an abandoned house not far from where you found the locket. Her captor, an ex-boyfriend is shown in handcuffs and being put in a police car.`,
            optionA: "Main page",
            optionB: "Do again",
            actionA: "",
            actionB: "story"
        },
        {
            title: "To the store...",
            actionCode: "1A2A3B",
            segment1: `You go to the store and pick up what you came for. At the register, the cashier is reading the newspaper. You notice there’s a missing person posted on the counter…It’s the woman in the locket!`,
            segment2: `You pay for your things. Do you go to the police station? Or do you drop your things off at home first?`,
            optionA: "Police station",
            optionB: "Home first",
            actionA: "1A2A3B4A",
            actionB: "1A2A3B4B"
        },
        {
            title: "Back to look...",
            actionCode: "1A2B3A",
            segment1: `You go back to the locket, pick it up, and open it. To your surprise, it is the same woman posted missing!`,
            segment2: `Just then, you hear someone say, “Hey!” You’re so startled that you snap the locket closed. You turn to see a man walking up to you. “I’ve been looking for that! Where’d you find it?” he asks you. You explain that you found it right here where you were standing. Before you can say anything else, he takes the locket from you.`,
            segment3: `“My girlfriend would kill me if she knew I’d lost this.” Girlfriend? This is his girlfriend? Does he not know she’s missing? Or…does he know?`,
            segment4: `“Say… You didn’t open this did you?” he asks you.`,
            optionA: "Say you did",
            optionB: "Say you didn’t",
            actionA: "1A2B3A4A",
            actionB: "1A2B3A4B"
        },
        {   // Ending
            title: "Head home...",
            actionCode: "1A2B3B",
            segment1: `You decide that one thing has nothing to do with the other, so you head home. Upon arriving, you put your things away and sit on the couch to watch TV. You catch up on a few shows you’d missed. Later, the news comes on. There’s a report of the same missing woman that you saw posted at the store.`,
            segment2: `“That’s too bad,” you think to yourself. “Hope they find her.” But, unfortunately, no one ever finds her.`,
            optionA: "Main page",
            optionB: "Do again",
            actionA: "",
            actionB: "story"
        },
        {
            title: "Open it...",
            actionCode: "1B2A3A",
            segment1: `You open the locket. There is a portrait of a woman’s face. You’ve never seen her before.  You consider someone could be looking for this. Do you take it to the police station? Or do you stop by the store first?`,
            optionA: "To the police",
            optionB: "To the store",
            actionA: "1B2A3A4A",
            actionB: "1B2A3A4B"
        },
        {
            title: "Put it down...",
            actionCode: "1B2A3B",
            segment1: `You put the locket down and head to the store. Inside, you pick up what you came for. At the register, the cashier is reading the newspaper. You notice there’s a missing person posted on the counter…a woman. You haven’t seen her before, so you think nothing of it.`,
            segment2: `But…after you walk outside the store, you wonder whose picture might be in that locket. Could it be the missing woman? Do you go back to look at the locket again? Or do you head home?`,
            optionA: "Go back ",
            optionB: "Head home",
            actionA: "1B2A3B4A",
            actionB: "1B2A3B4B"
        },
        {   // Ending
            title: "To the police station...",
            actionCode: "1A2A3B4A",
            segment1: `You arrive at the police office and show them the locket. You explain that you were going to bring it to them as lost and found but then saw the missing person post soon after.`,
            segment2: `The officer you talk to sends a team out with you to show them exactly where you found it. You do this. They thank you and you head back home.`,
            segment3: `Later, you see a news report on TV that shows the missing woman being saved from an abandoned house not far from where you found the locket. Her captor, an ex-boyfriend is shown in handcuffs and being put in a police car.`,
            optionA: "Main page",
            optionB: "Do again",
            actionA: "",
            actionB: "story"
        },
        {   // Ending part 1
            title: "Bring stuff home...",
            actionCode: "1A2A3B4B",
            segment1: `You arrive home to drop your things off. You then head off to the police station.`,
            segment2: `Once you arrive, you show them the locket. You explain that you were going to bring it to them as lost and found but then saw the missing person post and came here as soon as you could.`,
            segment3: `The officer you talk to sends a team out with you to show them exactly where you found it. You do this. They thank you and you head back home.`,
            optionA: "Next",
            optionB: "",
            actionA: "1A2A3B4Bn1",
            actionB: ""
        },
        {   // Ending part 2
            title: "(Continued...)",
            actionCode: "1A2A3B4Bn1",
            segment1: `Later, you see a news report on TV. There is an image of the missing woman on the screen. Police officers are escorting a man in handcuffs to their car outside an abandoned house, not far from where you found the locket.`,
            segment2: `Police had found the missing woman, murdered, at the abandoned house. The man in handcuffs was an ex-boyfriend who had kept her there for three days.`,
            segment3: `“Wow,” you think. “That’s too bad… But glad they caught him.” In the back of your mind, though, you can’t help but wonder if going to the police earlier might have made a difference.`,
            optionA: "Main page",
            optionB: "Do again",
            actionA: "",
            actionB: "story"
        },
        {   // Ending part 1
            title: "Say you did",
            actionCode: "1A2B3A4A",
            segment1: `You explain to him that you did open it because back at the store you’d seen a post of a missing woman and wanted to see if the picture in this locket was of the same women…in case maybe it would be helpful for the police to find her.`,
            segment2: `“Yeah...That probably would help the police find her…but it wouldn’t help me.”`,
            segment3: `He withdraws his hand from his pocket, holding something. A flash of metal flips out and clicks into place. Before you can react, he lunges at you, extending his arm.`,
            segment4: `You can’t tell if you feel pain or not. When you look up, he seems to be floating away from you as you fall towards the ground. Everything goes black.`,
            optionA: "Next",
            optionB: "",
            actionA: "1A2B3A4An1",
            actionB: ""
        },
        {   // Ending part 2
            title: "(Continued...)",
            actionCode: "1A2B3A4An1",
            segment1: `In the darkness, you start to see a white light. Your eyes slowly open. You’re lying in a hospital bed. On your left, are a nurse and doctor. On your right, a police officer and a man with a sketch pad.`,
            segment2: `The officer asks what happened. You tell him about the missing woman, the locket, …and the man. The officer then asks if you can describe your assailant. As you do, the sketch artist scribbles on his pad. When you finish, the artist turns his pad to face you. You confirm that that’s what he looks like. The officer thanks you and leaves with his cohort. You fall back asleep.`,
            optionA: "Next",
            optionB: "",
            actionA: "1A2B3A4An2",
            actionB: ""
        },
        {   // Ending part 3
            title: "(Continued...)",
            actionCode: "1A2B3A4An2",
            segment1: `Later, after you are discharged from the hospital, you find out in a news article that police pursued the man who attacked you in a high speed chase that ended in a shootout, killing the man. The locket was recovered from his car. The missing woman was found later buried under an abandoned house, not far from where you’d found the locket.`,
            segment2: `“Wow,” you think. “That’s awful. But glad they caught him.”`,
            optionA: "Main page",
            optionB: "Do again",
            actionA: "",
            actionB: "story"
        },
        {
            title: "Say you didn’t...",
            actionCode: "1A2B3A4B",
            segment1: `You tell him that you didn’t open it, that you’d just seen something shiny and wondered what it was, and that he’d arrived just after you’d picked it up.`,
            segment2: `He looks at you for a bit, but seems to believe you. “Well,” he says, “I’m sure glad you found it. I might’ve missed it. Thank you.”`,
            segment3: `You tell him it was no problem. You part ways and, much to your relief, are headed in opposite directions.`,
            segment4: `Well, that was close. But now what? You know that the girl pictured in the locket is the girl who’s missing. And that guy clearly didn’t want you to see who was pictured inside the locket. So, do you go to the police to tell them what happened? Or do you just go home and put this behind you?`,
            optionA: "To the police",
            optionB: "Go home",
            actionA: "1A2B3A4B5A",
            actionB: "1A2B3A4B5B"
        },
        {   // Ending
            title: "To the police...",
            actionCode: "1B2A3A4A",
            segment1: `You arrive at the police office and are directed to the lost and found desk. You show them the locket. The officer at the desk opens the locket and has a surprised look on his face. He asks you where you found this locket. You tell him.`,
            segment2: `He sends a team out with you to show them exactly where you found it. You do. They thank you, and since you are near the store again, you go to get the things you were going to get in the first place.`,
            segment3: `Inside the store you pick up what you wanted. At the register, you notice a missing person posted on the counter...It’s the woman in the locket! You pay for your things and head home.`,
            segment4: ` Later, you see a news report on TV that shows the missing woman being saved from an abandoned house not far from where you found the locket. Her captor, an ex-boyfriend is shown in handcuffs and being put in a police car.`,
            optionA: "Main page",
            optionB: "Do again",
            actionA: "",
            actionB: "story"
        },
        {
            title: "To the store...",
            actionCode: "1B2A3A4B",
            segment1: `You go to the store and pick up what you came for. At the register, the cashier is reading the newspaper. You notice there’s a missing person posted on the counter…It’s the woman in the locket!`,
            segment2: `You pay for your things. As you consider whether to go to the police or drop your things off at home first, you notice when you walk outside the store that a man is looking around the area where you found the locket. So...`,
            segment3: `Do you take the locket to the police station? Do you drop your things off at home first, then go go to the police? Or do you go talk to the man?`,
            optionA: "To the police",
            optionB: "Home first",
            optionC: "Talk to the man",
            actionA: "1B2A3A4B5A",
            actionB: "1B2A3A4B5B",
            actionC: "1B2A3A4B5C"
        },
        {   // Ending
            title: "Go back to look at the locket again...",
            actionCode: "1B2A3B4A",
            segment1: `You walk back to where you saw the locket, but to your surprise, it’s gone. You look around but don’t see anyone. You consider maybe the owner came by and found it. Anyway, it’s not here, so you head home.`,
            segment2: `Upon arriving home, you put your things away and sit on the couch to watch TV. You catch up on a few shows you’d missed. Later, the news comes on. There’s a report of the same missing woman that you saw posted at the store.`,
            segment3: `“That’s too bad,” you think to yourself. “Hope they find her.” But, unfortunately, no one ever finds her.`,
            optionA: "Main page",
            optionB: "Do again",
            actionA: "",
            actionB: "story"
        },
        {   // Ending
            title: "Head home",
            actionCode: "1B2A3B4B",
            segment1: `You head home. Upon arriving, you put your things away and sit on the couch to watch TV. You catch up on a few shows you’d missed. Later, the news comes on. There’s a report of the same missing woman that you saw posted at the store.`,
            segment2: `“That’s too bad,” you think to yourself. “Hope they find her.” But, unfortunately, no one ever finds her.`,
            optionA: "Main page",
            optionB: "Do again",
            actionA: "",
            actionB: "story"
        },
        {   // Ending
            title: "To the police...",
            actionCode: "1A2B3A4B5A",
            segment1: `You head to the police station. Once you arrive, tell the officer at the front desk what happened. You tell them about the locket with the missing woman’s picture and about the man who took it from you.`,
            segment2: `They send you to an officer familiar with the missing persons case. That officer shows you a series of pictures and asks if any of them are the man who took the locket. You look through the pictures…and you see him! You point to his picture and tell them that’s him.`,
            segment3: `The officer tells a cohort next to him to send a patrol out to search for this guy. He then sends a team out with you to show them exactly where the locket and this exchange with the man took place.`,
            segment4: `You show them the location. And you show them which direction he walked when you parted. They thank you and you head back home.`,
            optionA: "Next",
            optionB: "",
            actionA: "1A2B3A4B5An1",
            actionB: ""
        },
        {   // Ending part 2
            title: "(Continued...)",
            actionCode: "1A2B3A4B5An1",
            segment1: `Later, you see a news report on TV that shows the missing woman being saved from an abandoned house not far from where you found the locket. Next you see the man you encountered, who according to the report, was the woman’s ex-boyfriend. Police officers are escorting him in handcuffs to their car. Apparently, it had been a very close call for the woman.`,
            segment2: `“Wow,” you think. “Good thing I got to the police when I did.”`,
            optionA: "Main page",
            optionB: "Do again",
            actionA: "",
            actionB: "story"
        },
        {   // Ending
            title: "Go home",
            actionCode: "1A2B3A4B5B",
            segment1: `Really?? You’re going home? In spite of what you know? Well, ok. I just hope this doesn’t come back to bite you.`,
            segment2: `You head home. Upon arriving, you put your things away and sit on the couch to watch TV. You catch up on a few shows you’d missed. Later, the news comes on. There’s a report of the same missing woman that you saw posted at the store.`,
            segment3: `“Well,” you tell yourself. “I’m sure they’ll find her.” But, unfortunately, no one ever finds her. And the more time goes by, you find the more you have to keep quiet about what you know…and to continuously hope that no one ever finds the locket…which almost certainly have your fingerprints on it...`,
            optionA: "Main page",
            optionB: "Do again",
            actionA: "",
            actionB: "story"
        },
        {   // Ending
            title: "To the police...",
            actionCode: "1B2A3A4B5A",
            segment1: `You decide not to talk to that guy and head straight to the police office.`,
            segment2: `At the police office and show them the locket. You explain that you were going to bring it to them as lost and found but then saw the missing person post soon after. You also tell them that there was a man looking around in the area where you’d found the locket.`,
            segment3: `The officer you talk to sends a team out with you to show them the area you’re talking about. At the location, the man is not there anymore, but he did leave footprints. They thank you and you head back home.`,
            segment4: `Later, you see a news report on TV that shows the missing woman being saved from an abandoned house not far from where you found the locket. Her captor, an ex-boyfriend is shown in handcuffs and being put in a police car. It looks like the same guy you saw earlier, searching the area where you found the locket. Apparently, it had been a very close call for the woman.`,
            segment5: `“Wow,” you think. “Good thing I got to the police when I did.”`,
            optionA: "Main page",
            optionB: "Do again",
            actionA: "",
            actionB: "story"
        },
        {   // Ending part 1
            title: "Go home first...",
            actionCode: "1B2A3A4B5B",
            segment1: `You decide not to talk to that guy and head home to drop your things off. You then head off to the police station.`,
            segment2: `Once you arrive, you show them the locket. You explain that you were going to bring it to them as lost and found but then saw the missing person post. You also tell them that there was a man looking around in the area where you’d found the locket.`,
            segment3: `The officer you talk to sends a team out with you to show them the area you’re talking about. At the location, the man is not there anymore, but he did leave footprints. They thank you and you head back home.`,
            optionA: "Next",
            optionB: "",
            actionA: "1B2A3A4B5Bn1",
            actionB: ""
        },
        {   // Ending part 2
            title: "(Continued...)",
            actionCode: "1B2A3A4B5Bn1",
            segment1: `Later, you see a news report on TV. There is an image of the missing woman on the screen. Police officers are escorting a man in handcuffs to their car outside an abandoned house, not far from where you found the locket. It looks like the same guy you saw earlier, when you left the store.`,
            segment2: `Police had found the missing woman, murdered, inside the abandoned house. The man in handcuffs was an ex-boyfriend who had kept her there for three days.`,
            segment3: `“Wow,” you think. “That’s too bad... But glad they caught him.” In the back of your mind, though, you can’t help but wonder if going to the police earlier might have made a difference.`,
            optionA: "Main page",
            optionB: "Do again",
            actionA: "",
            actionB: "story"
        },
        {
            title: "Talk to the man...",
            actionCode: "1B2A3A4B5C",
            segment1: `You walk up to the guy, who is looking around the area you picked up the locket. You ask him if he is looking for something.`,
            segment2: `“Yeah,” he says, “I’m looking for my locket that my girlfriend gave me. She’s gonna be pretty upset with me if I don’t find it.”`,
            segment3: `Girlfriend? The missing woman is his girlfriend? Does he not know that she’s missing? Or does he know? What do you think? Give him the locket? Or keep it?`,
            optionA: "Give it",
            optionB: "Keep it",
            actionA: "1B2A3A4B5C6A",
            actionB: "1B2A3A4B5C6B"
        },
        {
            title: "Give him the locket...",
            actionCode: "1B2A3A4B5C6A",
            segment1: `You hand him the locket, explaining that you’d found it earlier and were going to take it to the police office.`,
            segment2: `“Well,” he said, “I’m sure glad you didn’t do that.” You hear a click and look down to see that he’s holding a switchblade. Before you can react to it, he thrusts his hand holding the blade into your stomach. You collapse to the ground. You can hear his footsteps running away from you, becoming more faint.`,
            segment3: `Off to your left, you can see the glare of the streetlight that had allowed you to see the locket. You start to crawl towards it. Closer…closer. You make it to the pavement under the streetlight and roll over on your back. The light is right above you…shining down on you. It starts to seem brighter, but then starts to dim. Then everything goes black.`,
            optionA: "Next",
            optionB: "",
            actionA: "1B2A3A4B5C6An1",
            actionB: ""
        },
        {   // Ending
            title: "(Continued)",
            actionCode: "1B2A3A4B5C6An1",
            segment1: `Well, that is unfortunate. Normally, this is the part where you’d find out how the story ended, but…since you didn’t make it, I’m afraid this is the end.`,
            optionA: "Main page",
            optionB: "Do again",
            actionA: "",
            actionB: "story"
        },
        {
            title: "You keep the locket and head to the police",
            actionCode: "1B2A3A4B5C6B",
            segment1: `You decide there’s something a little off about that last thing he said…about his girlfriend being upset. So you keep the locket and with the best poker face you can muster, you wish him luck finding it and then head off for the police office.`,
            segment2: `When you arrive, tell the officer at the front desk what happened. You tell them about the locket with the missing woman’s picture and about the man you talked to who was searching for it.`,
            segment3: `They send you to an officer familiar with the missing persons case. That officer shows you a series of pictures and asks if any of them are the man you spoke with. You look through the pictures…and you see him! You point to his picture and tell them that’s him.`,
            segment4: `The officer tells a cohort next to him to send a patrol out to search for this guy. He then sends a team out with you to show them exactly where the locket and this exchange with the man took place.`,
            segment5: `You show them the location. The man is not there anymore, but he did leave footprints. They thank you and you head back home.`,
            optionA: "Next",
            optionB: "",
            actionA: "1B2A3A4B5C6Bn1",
            actionB: ""
        },
        {   // Ending
            title: "(Continued...)",
            actionCode: "1B2A3A4B5C6Bn1",
            segment1: `Later, you see a news report on TV that shows the missing woman being saved from an abandoned house not far from where you found the locket. Next you see the man you encountered, who according to the report, was the woman’s ex-boyfriend. Police officers are escorting him in handcuffs to their car. Apparently, it had been a very close call for the woman.`,
            segment2: `“Wow,” you think. “Good thing I got to the police when I did.”`,
            optionA: "Main page",
            optionB: "Do again",
            actionA: "",
            actionB: "story"
        }
    ])


    // const story = new Story({
    //     title: "",
    //     segment: "",
    //     option1: "",
    //     option2: "",
    //     nextPageA: "",
    //     nextPageB: ""
    // })
    // await story.save()
}

seedDB().then(() => {
    mongoose.connection.close()
})