import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import BookFilters from './BookFilters';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const books = [
  {
    "id": 1,
    "author": "Chetan Bhagat",
    "title": "The Girl in Room 105",
    "image": "http://books.google.com/books/content?id=GHt_uwEACAAJ&printsec=frontcover&img=1&zoom=5",
    "price": 193,
    "description": "Hi, I'm Keshav, and my life is screwed. I hate my job and my girlfriend left me. Ah, the beautiful Zara. Zara is from Kashmir. She is a Muslim. And did I tell you my family is a bit, well, traditional? Anyway, leave that. Zara and I broke up four years ago. She moved on in life. I didnt. I drank every night to forget her. I called, messaged, and stalked her on social media. She just ignored me. However, that night, on the eve of her birthday, Zara messaged me. She called me over, like old times, to her hostel room 105. I shouldnt have gone, but I did... and my life changed forever. This is not a love story. It is an unlove story.From the author of Five Point Someone and 2 States, comes a fast-paced, funny and unputdownable thriller about obsessive love and finding purpose in life against the backdrop of contemporary India."
  },
  {
    "id": 2,
    "author": "Rujuta Divekar",
    "title": "Indian Superfoods",
    "image": "http://books.google.com/books/content?id=4oFoDwAAQBAJ&printsec=frontcover&img=1&zoom=5",
    "price": 495,
    "description": "Forget about acacia seeds and goji berries. The secret foods for health, vitality and weight loss lie in our own kitchens and backyards. Top nutritionist Rujuta Diwekar talks you through the ten Indian superfoods that will completely transform you"
  },
  {
    "id": 3,
    "author": "Dan Brown",
    "title": "Angels And Demons",
    "image": "http://books.google.com/books/content?id=d5xgYw4Ts0gC&printsec=frontcover&img=1&zoom=5",
    "price": 218,
    "description": "*INCLUDES A SNEAK PREVIEW OF ORIGIN,THE NEW THRILLER BY DAN BROWN: OUT 3RD OCTOBER. PRE-ORDER TODAY* --------------------------------------------------------------------------------------------------- CERN Institute, Switzerland: a world-renowned scientist is found brutally murdered with a mysterious symbol seared onto his chest. The Vatican, Rome: the College of Cardinals assembles to elect a new pope. Somewhere beneath them, an unstoppable bomb of terrifying power relentlessly counts down to oblivion. In a breathtaking race against time, Harvard professor Robert Langdon must decipher a labyrinthine trail of ancient symbols if he is to defeat those responsible - the Illuminati, a secret brotherhood presumed extinct for nearly four hundred years, reborn to continue their deadly vendetta against their most hated enemy, the Catholic Church."
  },
  {
    "id": 4,
    "author": "Dan Brown",
    "title": "Angels & Demons - Movie Tie-In",
    "image": "http://books.google.com/books/content?id=GXznEnKwTdAC&printsec=frontcover&img=1&zoom=5",
    "price": 462,
    "description": "The murder of a world-famous physicist raises fear that the Illuminati are operating again after centuries of silence, and religion professor Robert Langdon is called in to assist with the case. By the author of Digital Fortress. Reprint."
  },
  {
    "id": 5,
    "author": "Dan Brown",
    "title": "Origin",
    "image": "http://books.google.com/books/content?id=95wnDQAAQBAJ&printsec=frontcover&img=1&zoom=5",
    "price": 174,
    "description": "Sunday Times #1 Bestseller New York Times #1 Bestseller The global bestseller - Origin is the latest Robert Langdon novel from the author of The Da Vinci Code. Fans will not be disappointed The Times Robert Langdon, Harvard professor of symbology and religious iconology, arrives at the Guggenheim Museum Bilbao to attend the unveiling of an astonishing scientific breakthrough. The evening’s host is billionaire Edmond Kirsch, a futurist whose dazzling high-tech inventions and audacious predictions have made him a controversial figure around the world. But Langdon and several hundred guests are left reeling when the meticulously orchestrated evening is suddenly blown apart. There is a real danger that Kirsch’s precious discovery may be lost in the ensuing chaos. With his life under threat, Langdon is forced into a desperate bid to escape Bilbao, taking with him the museum’s director, Ambra Vidal. Together they flee to Barcelona on a perilous quest to locate a cryptic password that will unlock Kirsch’s secret. To evade a devious enemy who is one step ahead of them at every turn, Langdon and Vidal must navigate the labyrinthine passageways of extreme religion and hidden history. On a trail marked only by enigmatic symbols and elusive modern art, Langdon and Vidal will come face-to-face with a breathtaking truth that has remained buried – until now. ‘Dan Brown is the master of the intellectual cliffhanger’ Wall Street Journal ‘As engaging a hero as you could wish for’ Mail on Sunday ‘For anyone who wants more brain-food than thrillers normally provide’ Sunday Times"
  },
  {
    "id": 6,
    "author": "Dan Brown",
    "title": "Deception Point",
    "image": "http://books.google.com/books/content?id=tYwq0H5HcrcC&printsec=frontcover&img=1&zoom=5",
    "price": 128,
    "description": "*INCLUDES A SNEAK PREVIEW OF ORIGIN,THE NEW THRILLER BY DAN BROWN: OUT 3RD OCTOBER. PRE-ORDER TODAY* --------------------------------------------------------------------------------------------------- When a new NASA satellite detects evidence of an astonishingly rare object buried deep in the Arctic ice, the floundering space agency proclaims a much-needed victory...a victory that has profound implications for U.S. space policy and the impending presidential election. With the Oval Office in the balance, the President dispatches White House Intelligence analyst Rachel Sexton to the Arctic to verify the authenticity of the find. Accompanied by a team of experts, including the charismatic academic Michael Tolland, Rachel uncovers the unthinkable - evidence of scientific trickery - a bold deception that threatens to plunge the world into controversy..."
  },
  {
    "id": 7,
    "author": "Dan Brown",
    "title": "Digital Fortress",
    "image": "http://books.google.com/books/content?id=pfB9VsrdX4IC&printsec=frontcover&img=1&zoom=5",
    "price": 573,
    "description": "*INCLUDES A SNEAK PREVIEW OF ORIGIN,THE NEW THRILLER BY DAN BROWN: OUT 3RD OCTOBER. PRE-ORDER TODAY* --------------------------------------------------------------------------------------------------- When the National Security Agencys invincible code-breaking machine encounters a mysterious code it cannot break, the agency calls in its head cryptographer, Susan Fletcher, a brilliant, beautiful mathematician. What she uncovers sends shock waves through the corridors of power. The NSA is being held hostage - not by guns or bombs, but by a code so complex that if released would cripple U.S. intelligence. Caught in an accelerating tempest of secrecy and lies, Fletcher battles to save the agency she believes in. Betrayed on all sides, she finds herself fighting not only for her country but for her life, and in the end, for the life of the man she loves..."
  },
  {
    "id": 8,
    "author": "Dan Brown",
    "title": "Inferno",
    "image": "http://books.google.com/books/content?id=9nloexmq6QsC&printsec=frontcover&img=1&zoom=5",
    "price": 951,
    "description": "#1 WORLDWIDE BESTSELLER Harvard professor of symbology Robert Langdon awakens in an Italian hospital, disoriented and with no recollection of the past thirty-six hours, including the origin of the macabre object hidden in his belongings. With a relentless female assassin trailing them through Florence, he and his resourceful doctor, Sienna Brooks, are forced to flee. Embarking on a harrowing journey, they must unravel a series of codes, which are the work of a brilliant scientist whose obsession with the end of the world is matched only by his passion for one of the most influential masterpieces ever written, Dante Alighieris The Inferno. Dan Brown has raised the bar yet again, combining classical Italian art, history, and literature with cutting-edge science in this captivating thriller."
  },
  {
    "id": 9,
    "author": "Dan Brown",
    "title": "The Da Vinci Code",
    "image": "http://books.google.com/books/content?id=ivzfRJGrdFsC&printsec=frontcover&img=1&zoom=5",
    "price": 348,
    "description": "*INCLUDES AN EXTRACT FROM ORIGIN,THE NEW THRILLER BY DAN BROWN: OUT NOW* --------------------------------------------------------------------------------------------------- Harvard professor Robert Langdon receives an urgent late-night phone call while on business in Paris: the elderly curator of the Louvre has been brutally murdered inside the museum. Alongside the body, police have found a series of baffling codes. As Langdon and a gifted French cryptologist, Sophie Neveu, begin to sort through the bizarre riddles, they are stunned to find a trail that leads to the works of Leonardo Da Vinci - and suggests the answer to a mystery that stretches deep into the vault of history. Unless Langdon and Neveu can decipher the labyrinthine code and quickly assemble the pieces of the puzzle, a stunning historical truth will be lost forever..."
  },
  {
    "id": 10,
    "author": "Dan Brown",
    "title": "Robert Langdon Omnibus",
    "image": "http://books.google.com/books/content?id=IqPW7mqq6GIC&printsec=frontcover&img=1&zoom=5",
    "price": 451,
    "description": "Thriller. Two books in one."
  },
  {
    "id": 11,
    "author": "Dan Brown",
    "title": "Angels And Demons",
    "image": "http://books.google.com/books/content?id=d5xgYw4Ts0gC&printsec=frontcover&img=1&zoom=5",
    "price": 612,
    "description": "*INCLUDES A SNEAK PREVIEW OF ORIGIN,THE NEW THRILLER BY DAN BROWN: OUT 3RD OCTOBER. PRE-ORDER TODAY* --------------------------------------------------------------------------------------------------- CERN Institute, Switzerland: a world-renowned scientist is found brutally murdered with a mysterious symbol seared onto his chest. The Vatican, Rome: the College of Cardinals assembles to elect a new pope. Somewhere beneath them, an unstoppable bomb of terrifying power relentlessly counts down to oblivion. In a breathtaking race against time, Harvard professor Robert Langdon must decipher a labyrinthine trail of ancient symbols if he is to defeat those responsible - the Illuminati, a secret brotherhood presumed extinct for nearly four hundred years, reborn to continue their deadly vendetta against their most hated enemy, the Catholic Church."
  },
  {
    "id": 12,
    "author": "Dan Brown",
    "title": "Origin – Read a Free Sample Now",
    "image": "http://books.google.com/books/content?id=Wj81DwAAQBAJ&printsec=frontcover&img=1&zoom=5",
    "price": 530,
    "description": "An extract from Origin, the spell-binding new thriller from the bestselling author of The Da Vinci Code and Inferno. Dan Brown’s new novel, Origin, features renowned Harvard symbologist Robert Langdon and is set in Spain, where Langdon is drawn into a terrifying race against time that will bring him face-to-face with a world-shaking truth that has remained buried – until now. This preview includes the prologue and first chapter of Origin. Origin is out on 3rd October 2017. ‘Dan Brown is the master of the intellectual cliffhanger’ Wall Street Journal ‘As engaging a hero as you could wish for’ Mail on Sunday ‘For anyone who wants more brain-food than thrillers normally provide’ Sunday Times"
  },
  {
    "id": 13,
    "author": "Dan Brown",
    "title": "Inferno - Illustrated Edition",
    "image": "http://books.google.com/books/content?id=IPsKBAAAQBAJ&printsec=frontcover&img=1&zoom=5",
    "price": 415,
    "description": "SEEK AND YOU WILL FIND Florence: Harvard symbologist Robert Langdon awakes in a hospital bed with no recollection of where he is or how he got there. Nor can he explain the origin of the macabre object that is found hidden in his belongings. A threat to his life will propel him and a young doctor, Sienna Brooks, into a breakneck chase across the city. Only Langdon’s knowledge of the hidden passageways and ancient secrets that lie behind its historic facade can save them from the clutches of their unknown pursuers. With only a few lines from Dante’s The Inferno to guide them, they must decipher a sequence of codes buried deep within some of the Renaissance’s most celebrated artworks to find the answers to a puzzle which may, or may not, help them save the world from a terrifying threat... When it was published in the summer of 2013, Inferno became a global sensation, selling over 15 million copies in hardcover. This new and exclusive illustrated edition illuminates the sights and cities which form the backdrop to Dan Brown’s most thought-provoking and compelling novel yet, and reveals the rich tapestry of history, art and literature which inspired its narrative."
  },
  {
    "id": 14,
    "author": "Stephen King",
    "title": "Carrie",
    "image": "http://books.google.com/books/content?id=KOPSjMuVN4kC&printsec=frontcover&img=1&zoom=5",
    "price": 444,
    "description": "Stephen Kings legendary debut, about a teenage outcast and the revenge she enacts on her classmates, is a Classic. CARRIE is the novel which set him on the road to the Number One bestselling author King is today. Carrie White is no ordinary girl. Carrie White has the gift of telekinesis. To be invited to Prom Night by Tommy Ross is a dream come true for Carrie - the first step towards social acceptance by her high school colleagues. But events will take a decidedly macabre turn on that horrifying and endless night as she is forced to exercise her terrible gift on the town that mocks and loathes her . . ."
  },
  {
    "id": 15,
    "author": "Stephen King",
    "title": "On Writing",
    "image": "http://books.google.com/books/content?id=d999Z2KbZJYC&printsec=frontcover&img=1&zoom=5",
    "price": 233,
    "description": "The author shares his insights into the craft of writing and offers a humorous perspective on his own experience as a writer."
  },
  {
    "id": 16,
    "author": "Stephen King",
    "title": "Night Shift",
    "image": "http://books.google.com/books/content?id=YTDDiSUsD-EC&printsec=frontcover&img=1&zoom=5",
    "price": 441,
    "description": "More than twenty-five stories of horror and nightmarish fantasy transform everyday situations into experiences of compelling terror in the worlds of the living, the dying, and the nonliving."
  },
  {
    "id": 17,
    "author": "Stephen King",
    "title": "The Stephen King companion",
    "image": "http://books.google.com/books/content?id=27ghAQAAIAAJ&printsec=frontcover&img=1&zoom=5",
    "price": 1034,
    "description": "Contains articles, interviews, profiles, synopses, and sidebars on Kings life and works."
  },
  {
    "id": 18,
    "author": "Stephen King",
    "title": "Just After Sunset",
    "image": "http://books.google.com/books/content?id=3833y1SEHG4C&printsec=frontcover&img=1&zoom=5",
    "price": 1024,
    "description": "This collection of short works is comprised of pieces that previously appeared in such publications as The New Yorker, Playboy, and McSweeneys, in a volume that includes such tales as The Gingerbread Girl and N."
  },
  {
    "id": 19,
    "author": "Stephen King",
    "title": "The Stand",
    "image": "http://books.google.com/books/content?id=UbfnTcmkaKkC&printsec=frontcover&img=1&zoom=5",
    "price": 995,
    "description": "Stephen King’s apocalyptic vision of a world blasted by plague and tangled in an elemental struggle between good and evil remains as riveting and eerily plausible as when it was first published. Nominated as one of America’s best-loved novels by PBS’s The Great American Read A patient escapes from a biological testing facility, unknowingly carrying a deadly weapon: a mutated strain of super-flu that will wipe out 99 percent of the world’s population within a few weeks. Those who remain are scared, bewildered, and in need of a leader. Two emerge—Mother Abagail, the benevolent 108-year-old woman who urges them to build a peaceful community in Boulder, Colorado; and Randall Flagg, the nefarious “Dark Man,” who delights in chaos and violence. As the dark man and the peaceful woman gather power, the survivors will have to choose between them—and ultimately decide the fate of all humanity. (This edition includes all of the new and restored material first published in The Stand: The Complete And Uncut Edition.)"
  },
  {
    "id": 20,
    "author": "Stephen King",
    "title": "Danse Macabre",
    "image": "http://books.google.com/books/content?id=Rs1WbPRa3LoC&printsec=frontcover&img=1&zoom=5",
    "price": 563,
    "description": "From the author of dozens of #1 New York Times bestsellers and the creator of many unforgettable movies comes a vivid, intelligent, and nostalgic journey through three decades of horror as experienced through the eyes of the most popular writer in the genre. In 1981, years before he sat down to tackle On Writing, Stephen King decided to address the topic of what makes horror horrifying and what makes terror terrifying. Here, in ten brilliantly written chapters, King delivers one colorful observation after another about the great stories, books, and films that comprise the horror genre—from Frankenstein and Dracula to The Exorcist, The Twilight Zone, and Earth vs. The Flying Saucers. With the insight and good humor his fans appreciated in On ?Writing , Danse Macabre is an enjoyably entertaining tour through Stephen King’s beloved world of horror."
  },
  {
    "id": 21,
    "author": "Stephen King",
    "title": "It",
    "image": "http://books.google.com/books/content?id=KiszDwAAQBAJ&printsec=frontcover&img=1&zoom=5",
    "price": 967,
    "description": "It began -- and ended -- in 1958 when seven children searched in the drains beneath Derry for an evil creature, but in 1985, Mike, once one of those children, makes six phone calls and disinters an unremembered promise that sets off the ultimate terror."
  },
  {
    "id": 22,
    "author": "Stephen King",
    "title": "Cell",
    "image": "http://books.google.com/books/content?id=y0L2B1E8w74C&printsec=frontcover&img=1&zoom=5",
    "price": 238,
    "description": "From international bestseller Stephen King, a high-concept, ingenious and terrifying story about the mayhem unleashed when a pulse from a mysterious source transforms all cell phone users into homicidal maniacs. There’s a reason cell rhymes with hell. On October 1, God is in His heaven, the stock market stands at 10,140, most of the planes are on time, and Clayton Riddell, an artist from Maine, is almost bouncing up Boylston Street in Boston. He’s just landed a comic book deal that might finally enable him to support his family by making art instead of teaching it. He’s already picked up a small (but expensive!) gift for his long-suffering wife, and he knows just what he’ll get for his boy Johnny. Why not a little treat for himself? Clay’s feeling good about the future. That changes in a hurry. The cause of the devastation is a phenomenon that will come to be known as The Pulse, and the delivery method is a cell phone. Everyone’s cell phone. Clay and the few desperate survivors who join him suddenly find themselves in the pitch-black night of civilization’s darkest age, surrounded by chaos, carnage, and a human horde that has been reduced to its basest nature...and then begins to evolve. There’s really no escaping this nightmare. But for Clay, an arrow points home to Maine, and as he and his fellow refugees make their harrowing journey north they begin to see crude signs confirming their direction. A promise, perhaps. Or a threat... There are 193 million cell phones in the United States alone. Who doesn’t have one? Stephen King’s utterly gripping, gory, and fascinating novel doesn’t just ask the question “Can you hear me now?” It answers it with a vengeance."
  },
  {
    "id": 23,
    "author": "Stephen King",
    "title": "Salems Lot",
    "image": "http://books.google.com/books/content?id=7_4NgDQhtDYC&printsec=frontcover&img=1&zoom=5",
    "price": 465,
    "description": "‘Turn off the television – in fact, why don’t you turn off all the lights except for the one over your favourite chair? – and we’ll talk about vampires here in the dim. I think I can make you believe in them.’ Stephen King, from the Introduction ’Salem’s Lot is a small New England town with the usual quota of gossips, drinkers, weirdos and respectable folk. Of course there are tales of strange happenings – but not more than in any other town its size. Ben Mears, a moderately successful writer, returns to the Lot to write a novel based on his early years, and to exorcise the terrors that have haunted him since childhood. The event he witnessed in the house now rented by a new resident. A newcomer with a strange allure. A man who causes Ben some unease as things start to happen: a child disappears, a dog is brutally killed – nothing unusual, except the list starts to grow. Soon surprise will turn to bewilderment, bewilderment to confusion and finally to terror..."
  },
  {
    "id": 24,
    "author": "Stephen King",
    "title": "Pet Sematary",
    "image": "http://books.google.com/books/content?id=FNn5DQAAQBAJ&printsec=frontcover&img=1&zoom=5",
    "price": 645,
    "description": "Newly introduced by the author--Cover."
  },
  {
    "id": 25,
    "author": "Stephen King",
    "title": "Christine",
    "image": "http://books.google.com/books/content?id=DdHRpPUi5LsC&printsec=frontcover&img=1&zoom=5",
    "price": 1078,
    "description": "A scarlet-and-white, 1958 Plymouth--salvaged, over every rational dissent and objection, from decay--possesses its new owner and brings hellish terror to him, his friends, and his classmates. Reissue."
  },
  {
    "id": 26,
    "author": "Stephen King",
    "title": "11/22/63",
    "image": "http://books.google.com/books/content?id=xcBR6LCcsd4C&printsec=frontcover&img=1&zoom=5",
    "price": 511,
    "description": "ON NOVEMBER 22,1963, THREE SHOTS RANG OUT IN DALLAS, PRESIDENT KENNEDY DIED, AND THE WORLD CHANGED. WHAT IF YOU COULD CHANGE IT BACK? In this brilliantly conceived tour de force, Stephen King—who has absorbed the social, political, and popular culture of his generation more imaginatively and thoroughly than any other writer—takes readers on an incredible journey into the past and the possibility of altering it. It begins with Jake Epping, a thirty-five-year-old English teacher in Lisbon Falls, Maine, who makes extra money teaching GED classes. He asks his students to write about an event that changed their lives, and one essay blows him away—a gruesome, harrowing story about the night more than fifty years ago when Harry Dunning’s father came home and killed his mother, his sister, and his brother with a sledgehammer. Reading the essay is a watershed moment for Jake, his life—like Harry’s, like America’s in 1963—turning on a dime. Not much later his friend Al, who owns the local diner, divulges a secret: his storeroom is a portal to the past, a particular day in 1958. And Al enlists Jake to take over the mission that has become his obsession—to prevent the Kennedy assassination. So begins Jake’s new life as George Amberson, in a different world of Ike and JFK and Elvis, of big American cars and sock hops and cigarette smoke everywhere. From the dank little city of Derry, Maine (where there’s Dunning business to conduct), to the warmhearted small town of Jodie, Texas, where Jake falls dangerously in love, every turn is leading eventually, of course, to a troubled loner named Lee Harvey Oswald and to Dallas, where the past becomes heart-stoppingly suspenseful, and where history might not be history anymore. Time-travel has never been so believable. Or so terrifying."
  },
  {
    "id": 27,
    "author": "Stephen King",
    "title": "Different Seasons",
    "image": "http://books.google.com/books/content?id=XSIUoqwXhH0C&printsec=frontcover&img=1&zoom=5",
    "price": 984,
    "description": "Read the original stories which became the celebrated films STAND BY ME, APT PUPIL and THE SHAWSHANK REDEMPTION, voted the worlds most popular movie. In this classic collection of four novellas, the grand master takes you on irresistible journeys into the far reaches of horror, heartache and hope. Rita Hayworth and Shawshank Redemption is the story of two men convicted of murder - one guilty, one innocent - who form the perfect partnership as they dream up a scheme to escape from prison. In Apt Pupil a golden schoolboy entices an old man with a past to join in a dreadful union. The Body sees four young boys venture into the woods and find life, death . . . and the end of innocence. The Breathing Method is the tale of a doctor who goes to his club and discovers a woman determined to give birth - no matter what."
  },
  {
    "id": 28,
    "author": "Stephen King",
    "title": "Bag of Bones",
    "image": "http://books.google.com/books/content?id=kDZSh9rtva4C&printsec=frontcover&img=1&zoom=5",
    "price": 1079,
    "description": "Set in the fictional town of Castle Rock, Maine From #1 New York Times bestselling author Stephen King, a powerful tale of grief, of loves enduring bonds, and the haunting secrets of the past. Set in the Maine territory King has made mythic, Bag of Bones recounts the plight of forty-year-old bestselling novelist Mike Noonan, who is unable to stop grieving following the sudden death of his wife Jo, and who can no longer bear to face the blank screen of his computer. Now his nights are plagued by vivid nightmares, all set at the Maine summerhouse he calls Sara Laughs. Despite these dreams, or perhaps because of them, Mike returns to the lakeside getaway. There he finds his beloved Yankee town held in the grip of a powerful millionaire, Max Devore, who will do anything to take his three-year-old granddaughter away from her widowed young mother. As Mike is drawn into their struggle, as he falls in love with both mother and child, he is also drawn into the mystery of Sara Laughs, now the site of ghostly visitations, ever-escalating nightmares, and the sudden recovery of his writing ability. What are the forces that have been unleashed here—and what do they want of Mike Noonan? First published in 1998, Bag of Bones was an instant #1 New York Times bestseller. It was lauded at its publication as “hands down, Stephen King’s most narratively subversive fiction” (Entertainment Weekly) and his “most ambitious novel” (The Atlanta Journal-Constitution)."
  },
  {
    "id": 29,
    "author": "Stephen King",
    "title": "The Shining",
    "image": "http://books.google.com/books/content?id=zVq8BF_5vSUC&printsec=frontcover&img=1&zoom=5",
    "price": 780,
    "description": "One of the true classics of horror fiction, THE SHINING is regarded as one of Stephen Kings masterpieces. Danny is only five years old, but in the words of old Mr Hallorann he is a shiner, aglow with psychic voltage. When his father becomes caretaker of the Overlook Hotel, Dannys visions grow out of control. As winter closes in and blizzards cut them off, the hotel seems to develop a life of its own. It is meant to be empty. So who is the lady in Room 217 and who are the masked guests going up and down in the elevator? And why do the hedges shaped like animals seem so alive? Somewhere, somehow, there is an evil force in the hotel - and that, too, is beginning to shine . . ."
  },
  {
    "id": 30,
    "author": "Stephen King",
    "title": "Everythings Eventual",
    "image": "http://books.google.com/books/content?id=XCMu2NrzCpwC&printsec=frontcover&img=1&zoom=5",
    "price": 975,
    "description": "A collection of short fiction features L.T.s Theory of Pets, Lunch at the Gotham Cafâe, and In the Deathroom, as well as 1408, about a writer whose stay in Room 1408 at the Dolphin Hotel turns his life upside down."
  },
  {
    "id": 31,
    "author": "Stephen King",
    "title": "The Green Mile",
    "image": "http://books.google.com/books/content?id=KNA7gfXJw9sC&printsec=frontcover&img=1&zoom=5",
    "price": 552,
    "description": "Stephen Kings international bestselling and highly acclaimed novel, also a hugely successful film starring Tom Hanks The Green Mile: those who walk it do not return, because at the end of that walk is the room in which sits Cold Mountain penitentiarys electric chair. In 1932 the newest resident on death row is John Coffey, a giant black man convicted of the brutal murder of two little girls. But nothing is as it seems with John Coffey, and around him unfolds a bizarre and horrifying story. Evil murderer or holy innocent - whichever he is - Coffey has strange powers which may yet offer salvation to others, even if they can do nothing to save him."
  },
  {
    "id": 32,
    "author": "Stephen King",
    "title": "Insomnia",
    "image": "http://books.google.com/books/content?id=lhUmmcwQEgMC&printsec=frontcover&img=1&zoom=5",
    "price": 925,
    "description": "Ralph Roberts, a widower suffering from insomnia, begins to experience strange visual phenomena and is unable to believe that they are merely hallucinations"
  },
  {
    "id": 33,
    "author": "Stephen King",
    "title": "The Talisman",
    "image": "http://books.google.com/books/content?id=oZie_Bx1B1MC&printsec=frontcover&img=1&zoom=5",
    "price": 1100,
    "description": "Twelve-year-old Jack Sawyer braves the mysterious dangers of the Territories, a surreal parallel world, in his cross-country quest through the U.S. for the Talisman, the only hope for his dying mother and for his own survival."
  },
  {
    "id": 34,
    "author": "Stephen King",
    "title": "Stephen King Goes to the Movies",
    "image": "http://books.google.com/books/content?id=Qbm5ejIoY5sC&printsec=frontcover&img=1&zoom=5",
    "price": 1048,
    "description": "A collection of five short stories that have been made into movies includes The Mangler, in which a skeptical writer investigates a supposedly haunted hotel room that has apparently caused at least forty-two deaths."
  },
  {
    "id": 35,
    "author": "Stephen King",
    "title": "The Mist",
    "image": "http://books.google.com/books/content?id=41LdDgAAQBAJ&printsec=frontcover&img=1&zoom=5",
    "price": 117,
    "description": "#1 New York Times bestselling author Stephen King’s terrifying novella about a town engulfed in a dense, mysterious mist as humanity makes its last stand against unholy destruction—originally published in the acclaimed short story collection Skeleton Crew and made into a TV series, as well as a feature film starring Thomas Jane and Marcia Gay Harden. In the wake of a summer storm, terror descends...David Drayton, his son Billy, and their neighbor Brent Norton join dozens of others and head to the local grocery store to replenish supplies following a freak storm. Once there, they become trapped by a strange mist that has enveloped the town. As the confinement takes its toll on their nerves, a religious zealot, Mrs. Carmody, begins to play on their fears to convince them that this is God’s vengeance for their sins. She insists a sacrifice must be made and two groups—those for and those against—are aligned. Clearly, staying in the store may prove fatal, and the Draytons, along with store employee Ollie Weeks, Amanda Dumfries, Irene Reppler, and Dan Miller, attempt to make their escape. But what’s out there may be worse than what they left behind. This exhilarating novella explores the horror in both the enemy you know—and the one you can only imagine."
  },
  {
    "id": 36,
    "author": "Stephen King",
    "title": "The Essential Stephen King",
    "image": "http://books.google.com/books/content?id=OeL8swEACAAJ&printsec=frontcover&img=1&zoom=5",
    "price": 917,
    "description": "In this newly available paperback edition, Spignesi selects and ranks the top 101 works out of the more than 550 created by Stephen King during his prolific career. Each chosen work is synopsized and reviewed by the writer who Entertainment Weekly has called the worlds leading expert on Stephen King. Fiction and nonfiction, well known and obscure, scary and scarier -- discussions of Kings best short stories, novellas, screenplays, novels, essays, forewords, articles, introductions, and more are all here! From his best-selling novels (The Dead Zone, The Shining, Carrie, The Green Mile, Pet Sematary, It, Riding the Bullet, The Plant, The Dark Tower series, Insomnia), to short stories and novellas (Survivor Type, The Last Rung on the Ladder, Gramma, Shawshank Redemption), thought-provoking nonfiction (Danse Macabre, On Writing, Remembering John, My Little Serrated Security Blanket, Leaf-Peepers),...even an amazing column from Kings college newspaper (The Subject This Week is Cops)! The Essential Stephen King provides uncompromising summation and review of Kings work by an acknowledged King authority. It is a must for both the serious and casual fan. Book jacket."
  },
  {
    "id": 37,
    "author": "Stephen King",
    "title": "Liseys Story",
    "image": "http://books.google.com/books/content?id=u5aJe6Mb0YIC&printsec=frontcover&img=1&zoom=5",
    "price": 280,
    "description": "Two years after losing her husband of twenty-five years, Lisey looks back at the sometimes frightening intimacy that marked their marriage, her husbands successes as an award-winning novelist, and his secretive nature that established Liseys supernatural belief systems, on which she eventually comes to depend for survival. Reprint. 50,000 first printing."
  },
  {
    "id": 38,
    "author": "Stephen King",
    "title": "American Vampire",
    "image": "http://books.google.com/books/content?id=FwlDtQEACAAJ&printsec=frontcover&img=1&zoom=5",
    "price": 336,
    "description": "Features a new breed of vampire - muscular, vicious, and distinctly American."
  },
  {
    "id": 39,
    "author": "Stephen King",
    "title": "Misery",
    "image": "http://books.google.com/books/content?id=t-ArDgAAQBAJ&printsec=frontcover&img=1&zoom=5",
    "price": 777,
    "description": "Originally published: New York: Viking, 1987."
  },
  {
    "id": 40,
    "author": "Stephen King",
    "title": "Needful Things",
    "image": "http://books.google.com/books/content?id=LlXKLAjHAeYC&printsec=frontcover&img=1&zoom=5",
    "price": 384,
    "description": "Set in the fictional town of Castle Rock, Maine Master storyteller Stephen King presents the classic #1 New York Times bestseller about a mysterious store than can sell you whatever you desire—but not without exacting a terrible price in return. The town of Castle Rock, Maine has seen its fair share of oddities over the years, but nothing is as peculiar as the little curio shop that’s just opened for business here. Its mysterious proprietor, Leland Gaunt, seems to have something for everyone out on display at Needful Things…interesting items that run the gamut from worthless to priceless. Nothing has a price tag in this place, but everything is certainly for sale. The heart’s desire for any resident of Castle Rock can easily be found among the curiosities…in exchange for a little money and—at the specific request of Leland Gaunt—a whole lot of menace against their fellow neighbors. Everyone in town seems willing to make a deal at Needful Things, but the devil is in the details. And no one takes heed of the little sign hanging on the wall: Caveat emptor. In other words, let the buyer beware…"
  },
  {
    "id": 41,
    "author": "Stephen King",
    "title": "The Running Man",
    "image": "http://books.google.com/books/content?id=XvuoCwAAQBAJ&printsec=frontcover&img=1&zoom=5",
    "price": 966,
    "description": "With an Introduction by the author, The Importance of Being Bachman."
  },
  {
    "id": 42,
    "author": "Stephen King",
    "title": "Firestarter",
    "image": "http://books.google.com/books/content?id=VyWagxzwDrQC&printsec=frontcover&img=1&zoom=5",
    "price": 1032,
    "description": "Stephen King’s “gem of a story” (Chicago Tribune) about a child with extraordinary psychic powers who is on the run from the government. A #1 national bestseller. Andy McGee and Vicky Tomlinson participated in a drug experiment run by a veiled government agency known as The Shop. One year later, they marry. Two years later, their little girl, Charlie, sets her teddy bear on fire by simply staring at it. Now that Charlie is eight, she doesn’t start fires anymore. Her parents have taught her to control her pyrokinesis, the ability to set anything—toys, clothes, even people—aflame. But The Shop knows about and wants this pigtailed “ultimate weapon.” Shop agents set out to hunt down Charlie and her father in a ruthless chase that traverses the streets of New York and the backwoods of Vermont. “Terrifying and gripping” (The Miami Herald) Firestarter is chilling proof that “Stephen King is superb” (Time)."
  },
  {
    "id": 43,
    "author": "Stephen King",
    "title": "Bare Bones",
    "image": "http://books.google.com/books/content?id=9GJAPgAACAAJ&printsec=frontcover&img=1&zoom=5",
    "price": 934,
    "description": "In a series of interviews, the acknowledged master of horror fiction reveals the creative source behind his stories, discussing his life, his career, and his philosophy on writing, and what he believes makes horror stories so popular"
  },
  {
    "id": 44,
    "author": "Stephen King",
    "title": "The Long Walk",
    "image": "http://books.google.com/books/content?id=RlkzWP9JvE8C&printsec=frontcover&img=1&zoom=5",
    "price": 725,
    "description": "In this #1 national bestseller, “master storyteller” (Houston Chronicle) Stephen King, writing as Richard Bachman, tells the tale of the contestants of a grueling walking competition where there can only be one winner—the one that survives. In the near future, when America has become a police state, one hundred boys are selected to enter an annual contest where the winner will be awarded whatever he wants for the rest of his life. Among them is sixteen-year-old Ray Garraty, and he knows the rules—keep a steady walking pace of four miles per hour without stopping. Three warnings and you’re out—permanently. A “psychologically dark tale with commentary on society, teenage life, and cultural entertainment, The Long Walk is still poignant decades after its original publication” (Publishers Weekly). This edition features an introduction by Stephen King on “The Importance of Being Bachman.”"
  },
  {
    "id": 45,
    "author": "Stephen King",
    "title": "Dyneins",
    "image": "http://books.google.com/books/content?id=PcBvQC_O870C&printsec=frontcover&img=1&zoom=5",
    "price": 128,
    "description": "With an accompanying Web site showing more than 100 streaming videos of cell dynamic behavior for best comprehension of material, Dyneins is the only reference covering the structure, biology, and application of dynein research to human disease. From bench to bedside, this book offers research on fundamental cellular processes to researchers and clinicians across developmental biology, cell biology, molecular biology, biophysics, biomedicine, genetics, and medicine."
  },
  {
    "id": 46,
    "author": "Stephen King",
    "title": "Sleeping Beauties",
    "image": "http://books.google.com/books/content?id=G4Q2DwAAQBAJ&printsec=frontcover&img=1&zoom=5",
    "price": 444,
    "description": "The authors tell the highest of high-stakes stories: what might happen if women disappeared from the world of men?"
  },
  {
    "id": 47,
    "author": "Stephen King",
    "title": "Under the Dome",
    "image": "http://books.google.com/books/content?id=GR1m1MZwTjoC&printsec=frontcover&img=1&zoom=5",
    "price": 311,
    "description": "The second season of the television adaptation of UNDER THE DOME will receive its UK premiere on Channel 5 on Monday, August 25th (produced by Steven Spielberg). Kings bestselling novel centres on a small town suddenly and inexplicably sealed off from the rest of the world by an invisible dome. In UNDER THE DOME, King has produced another riveting masterpiece. The end of every chapter hooks you into the next, drawing you inside a psychological drama that is so rich, you dont read it, you live it. It is the story of the small town of Chesters Mill, Maine which is inexplicably and suddenly sealed off from the rest of the world by an invisible force field. No one can get in and no one can get out. The normal rules of society are suddenly changed and when food, electricity and water run short, the community begins to crumble. As a new and more sinister social order develops, Dale Barbara, Iraq veteran, teams up with a handful of intrepid citizens to fight against the corruption that is sweeping through the town and to try to discover the source of the Dome before it is too late . . ."
  },
  {
    "id": 48,
    "author": "Stephen King",
    "title": "The Dark Half",
    "image": "http://books.google.com/books/content?id=G7OxASGZpUMC&printsec=frontcover&img=1&zoom=5",
    "price": 1089,
    "description": "Set in the fictional town of Castle Rock, Maine A “wondrously frightening” (Publishers Weekly) tale of terror and #1 national bestseller about a writer’s pseudonym that comes alive and destroys everyone on the path that leads to the man who created him. Thad Beaumont is a writer, and for a dozen years he has secretly published violent bestsellers under the name of George Stark. But Thad is a healthier and happier man now, the father of infant twins, and starting to write as himself again. He no longer needs George Stark and so, with nationwide publicity, the pseudonym is retired. But George Stark won’t go willingly. And now Thad would like to say he is innocent. He’d like to say he has nothing to do with the twisted imagination that produced his bestselling novels. He’d like to say he has nothing to do with the series of monstrous murders that keep coming closer to his home. But how can Thad deny the ultimate embodiment of evil that goes by the name he gave it—and signs its crimes with Thad’s bloody fingerprints? The Dark Half is “a chiller” (The New York Times Book Review), so real and fascinating that you’ll find yourself squirming in Stephen King’s heart-stopping, blood-curdling grip—and loving every minute of it."
  },
  {
    "id": 49,
    "author": "Stephen King",
    "title": "Dolores Claiborne",
    "image": "http://books.google.com/books/content?id=dUQat2unQE8C&printsec=frontcover&img=1&zoom=5",
    "price": 833,
    "description": "Dolores Claiborne has a story to tell. But it is not quite what the police had expected. Dolores Claiborne has a confession to make . . . She will take her time. Wont be hurried. Will do it her way, sparing neither details nor feelings. Hers or anyone elses. This is the truth, the whole truth and nothing but the truth. Truth that takes you to the edge of darkness. Dolores Claiborne has a story to tell and youd better pay attention - or else. DOLORES CLAIBORNE is a film starring Kathy Bates."
  },
  {
    "id": 50,
    "author": "Stephen King",
    "title": "The Second Stephen King Quiz Book",
    "image": "http://books.google.com/books/content?id=aUirWV4S8psC&printsec=frontcover&img=1&zoom=5",
    "price": 237,
    "description": "A follow-up to The Stephen King Quiz Book tests the horror knowledge of King fans with questions about collectors editions, movie and television versions of his books, and more. Original."
  },
  {
    "id": 51,
    "author": "Stephen King",
    "title": "The Dark Tower VII",
    "image": "http://books.google.com/books/content?id=Geq0uKAxZPEC&printsec=frontcover&img=1&zoom=5",
    "price": 639,
    "description": "The final installment in the epic series completes the quest of Roland Deschain, who works to outmaneuver the increasingly desperate acts of his adversaries and confronts losses within his circle of companions."
  },
  {
    "id": 52,
    "author": "Stephen King",
    "title": "Doctor Sleep",
    "image": "http://books.google.com/books/content?id=DQTgAAAAQBAJ&printsec=frontcover&img=1&zoom=5",
    "price": 245,
    "description": "After decades as an itinerant alcoholic, middle-aged Dan Torrance uses his remnant powers to assist the dying before coming to the aid of a twelve-year-old girl being tortured by a tribe of murderous paranormals."
  }
];

const VQStore = () => {
  const [authors] = useState([...new Set(books.map(item => item.author))]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (selectedAuthors.length >= 1) {
      // console.log('Executed');console.Log (selectedAuthors);

      // setFilteredBooks(books.filter(item => selectedAuthors.findIndex(item.author) >= -1));
      setFilteredBooks(books.filter(item => selectedAuthors.includes(item.author)));
    }
    else {
      setFilteredBooks(books);
    }
  }, [selectedAuthors]);

  useEffect(() => {
    const fetchData = async () => {
      var config = {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Allow-Origin': '*'
        }
      };
      const result = await axios(
        'https://us-central1-fire-app-bykk.cloudfunctions.net/allbooks', config
      );
      setData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);

  return (
    <Container style={{ margin: '0px' }}>
      {/* <Row>
        {data.map((d,i) =>
          <>
            <div key={i}>{d.author}</div>
          </>
        )}
      </Row> */}
      <Row>
        <Col md={2}><BookFilters authors={authors} selectedAuthors={selectedAuthors} handleSelectAuthor={setSelectedAuthors} /></Col>
        <Col md={10}><BookList books={filteredBooks} /></Col>
      </Row>
    </Container>
  );
}



export default withRouter(VQStore);
