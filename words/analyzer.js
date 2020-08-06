function analyze(text){
	debugger;
	text = text.toLowerCase().replace(/[\,\=\.\(\)\&\{\}\[\]\`\~\:\;\"\<\>\?\/]/g,'');
	text = text.toLowerCase().replace(/[\-\_\/]/g, ' ');
	let words = text.split(" ");
	
	const wordMap = new Map();
	for(let i = 0; i < words.length; i++){
		if(wordMap.has(words[i])){
			wordMap.set(words[i] , wordMap.get(words[i]) + 1);
		}else{
			wordMap.set(words[i] , 1);
		}
	}
	let sum = frequency(wordMap);
	let entries = wordMap.entries();
	let sortedEntries = Array.from(entries).sort(compareFunction);
	display(sum, sortedEntries);
}
function display(sum, sortedEntries){
	
	let tblHtml = `
						 <table style = "background-color:#ccFFFF; text-align:center;">
						 <tr>
    <th><u>Word</u></th>
    <th><u>#Of Occurences</u></th> 
		<th><u>Frequency</u></th>
  </tr>`
	for(const k of sortedEntries){
		tblHtml += createRow(k , sum)
				 }
             tblHtml += `</table>`
						 out.innerHTML = tblHtml;
}
const createRow = function(k , sum){
           let rowHtml = `<tr>
					 <td> ${k[0]} </td>
					 <td> ${k[1]} </td>
					 <td> ${(100*(k[1] / sum)).toFixed(2)}%</td>
					 </tr>
					 `
           return rowHtml;
}
function frequency(wordMap){
	let sum = 0;
	for(const m of wordMap.values()){
		sum += m;
	}
	return sum;
}
const compareFunction = function(entrya, entryb){
	return entryb[1] - entrya[1];
}