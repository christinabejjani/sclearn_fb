		function shuffle(array)
 		{
			var currentIndex = array.length, temporaryValue, randomIndex;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {

				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				// And swap it with the current element.
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}

			return array;
		}

	var Stimuli1 = [];
	var Stimuli2 = [];
	var Stimuli3 = [];
	var Stimuli4 = [];
	var Stimuli5 = [];
	var Stimuli6 = [];
	var Stimuli7 = [];
	var Stimuli8 = [];
	var Stimuli9 = [];
	var Stimuli10 = [];
	var Stimuli11 = [];
	var Stimuli12 = [];
	var Stimuli13 = [];
	var Stimuli14 = [];
	var Stimuli15 = [];
	var Stimuli16 = [];
	var StroopNum = [];
	var StimProbBlock1 = [];
	var StimProbBlock2 = [];
	var StimProbBlock3 = [];
	var StimProbBlock4 = [];
	
	//example pairings
	//1 BEAR / BEAR
	//2 TURTLE / TURTLE
	//3 BIRD / BIRD
	//4 DEER / DEER
	//5 BEAR / BIRD or BEAR / DEER
	//6 TURTLE / DEER or TURTLE / BIRD
	//7 BIRD / BEAR or BIRD / TURTLE
	//8 DEER / TURTLE or DEER / BEAR

	for (i=0; i < 27; i++) //144 total trials
	{
		Stimuli1=Stimuli1.concat(1); // congruent 75
		Stimuli2=Stimuli2.concat(2); // congruent 75
		Stimuli7=Stimuli7.concat(7); // incongruent 75
		Stimuli8=Stimuli8.concat(8); // incongruent 75
	}

	for (i=0; i < 9; i++) //144 total trials
	{
		Stimuli3=Stimuli3.concat(3); // incongruent 75
		Stimuli4=Stimuli4.concat(4); // incongruent 75
		Stimuli5=Stimuli5.concat(5); // congruent 75
		Stimuli6=Stimuli6.concat(6); // congruent 75
	}

	for (i=0; i < 18; i++) // transfer block
	{
		Stimuli11=Stimuli11.concat(1);
		Stimuli11=Stimuli11.concat(2);
		Stimuli11=Stimuli11.concat(3);
		Stimuli12=Stimuli12.concat(4);
		Stimuli13=Stimuli13.concat(5);
		Stimuli14=Stimuli14.concat(6);
		Stimuli15=Stimuli15.concat(7);
		Stimuli16=Stimuli16.concat(8);
	}

	StimProbBlock1 = StimProbBlock1.concat(Stimuli1,Stimuli2,Stimuli3,Stimuli4,Stimuli5,Stimuli6,Stimuli7,Stimuli8);
	shuffle(StimProbBlock1);
    StimProbBlock2 = StimProbBlock2.concat(Stimuli8,Stimuli7,Stimuli6,Stimuli5,Stimuli4,Stimuli3,Stimuli2,Stimuli1);
	shuffle(StimProbBlock2);
    StimProbBlock3 = StimProbBlock3.concat(Stimuli5,Stimuli8,Stimuli3,Stimuli2,Stimuli1,Stimuli4,Stimuli6,Stimuli7);
	shuffle(StimProbBlock3);
    StimProbBlock4 = StimProbBlock4.concat(Stimuli9,Stimuli11,Stimuli16,Stimuli15,Stimuli14,Stimuli12,Stimuli13,Stimuli10);
	shuffle(StimProbBlock4);

	for (i=1; i < 144; i++) // for each block, if there's a repeat (after shuffling), i push the number to the end and delete it where it used to be. this should limit the # of repetitions.
	{
		if (StimProbBlock1[i] == StimProbBlock1[i-1])
		{
			StimProbBlock1.push(StimProbBlock1[i]);
			StimProbBlock1.splice(i, 1);
		}
		if (StimProbBlock4[i] == StimProbBlock4[i-1])
		{
			StimProbBlock4.push(StimProbBlock4[i]);
			StimProbBlock4.splice(i, 1);
		}
		if (StimProbBlock2[i] == StimProbBlock2[i-1])
		{
			StimProbBlock2.push(StimProbBlock2[i]);
			StimProbBlock2.splice(i, 1);
		}
		if (StimProbBlock3[i] == StimProbBlock3[i-1])
		{
			StimProbBlock3.push(StimProbBlock3[i]);
			StimProbBlock3.splice(i, 1);
		}
	}

    StroopNum = StroopNum.concat(StimProbBlock1,StimProbBlock2,StimProbBlock3,StimProbBlock4);
    console.log(StroopNum);
