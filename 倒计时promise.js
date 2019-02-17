function countdown(num){
	let promise = new Promise((resolve,reject)=>{
		let timer = setInterval(()=>{
			console.log(num);
			if(num<1){
				clearInterval(timer);
				resolve();
			}else{
				num--;
			}
		},1e3);
	});
	return promise
}



