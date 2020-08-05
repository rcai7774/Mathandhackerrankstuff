function analyze(text){
	debugger;
	text = text.replace(/[\,\.\(\)\&\{\}\[\]\`\~\:\;\"\<\>\?\/]/g,'');
	text = text.replace(/[\-\_\/]/g, ' ');
	let words = text.split(" ");
	
	const wordMap = new Map();
	for(let i = 0; i < words.length; i++){
		if(wordMap.has(words[i])){
			wordMap.set(words[i] , wordMap.get(words[i]) + 1);
		}else{
			wordMap.set(words[i] , 1);
		}
	}
	display(wordMap);
}
function display(wordMap){
	let tblHtml = `
						 <table style = "background-color:#ccFFFF; text-align:center;">
						 <tr>
    <th><u>Word</u></th>
    <th><u>#Of Occurences</u></th> 
  </tr>`
	for(const k of wordMap.entries()){
		tblHtml += createRow(k)
				 }
             tblHtml += `</table>`
						 out.innerHTML = tblHtml;
}
const createRow = function(k){
           let rowHtml = `<tr>
					 <td> ${k[0]} </td>
					 <td> ${k[1]} </td>
					 </tr>
					 `
           return rowHtml;
}
