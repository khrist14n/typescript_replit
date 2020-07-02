class Speaker{
	hi(nombre : string){
		let message: string = 'Hola '+nombre;
		return message;
	}
}

let speaker: Speaker = new Speaker();
let greeting : string = speaker.hi("juan");
console.log(greeting);
