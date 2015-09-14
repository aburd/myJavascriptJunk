// Find the correlation of me going to eat pizza
// vs me having a really stressful day at work
// [ Ate pizza, stressful day at work: 26 ] n11
// [ didn't eat pizza, stressful day at work: 20 ] n01
// [ didn't eat pizza, no stressful day at work: 53 ] n00
// [ Ate pizza, no stressful day at work: 1 ] n10

// phi = (n11*n00 - n10n01)/srt(n1*n0*n1*n0)

var res = [53, 20, 1, 26];

function phi(){
	return (res[3]*res[0] - res[2]*res[1]) /
			Math.sqrt(
				(res[2]+res[3])*
				(res[0]+res[1])*
				(res[3]+res[1])*
				(res[2]+res[0]));
}

console.log('The relation between eating pizza and having a stressful day at work is: ');
console.log(phi() + " or " + (phi()*100).toFixed(2) + " percent.");
