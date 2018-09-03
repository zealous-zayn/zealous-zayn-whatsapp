let x = document.getElementById('checkChat')
let y = document.getElementById('checkCall')
let z = document.getElementById('setting')
let p = document.getElementById('checkProfile')
let call=() =>{

	if(y.className==="d-none call-center"){
			x.className="d-none msg-center"
			y.className="call-center"
			z.className="d-none settings"
			p.className="d-none profile"
	}else{
		x.className="msg-center"
		y.className="d-none call-center"
		z.className="d-none settings"
		p.className="d-none profile"
	}
}

let chat=() =>{
	if(x.className==="d-none msg-center"){
			x.className="msg-center"
			y.className="d-none call-center"
			z.className="d-none settings"
			p.className="d-none profile"
	}else{
		x.className="msg-center"
		y.className="d-none call-center"
		z.className="d-none settings"
		p.className="d-none profile"
	}
}

let sets=() =>{
	if(z.className==="d-none settings"){
		x.className="d-none msg-center"
		y.className="d-none call-center"
		z.className="settings"
		p.className="d-none profile"
	}else{
		x.className="msg-center"
		y.className="d-none call-center"
		z.className="d-none settings"
		p.className="d-none profile"
	}
}

let prof=() =>{
	if(p.className==="d-none profile"){
		x.className="d-none msg-center"
		y.className="d-none call-center"
		z.className="d-none settings"
		p.className="profile"
	}else{
		x.className="msg-center"
		y.className="d-none call-center"
		z.className="d-none settings"
		p.className="d-none profile"
	}
}

let chatBody = document.getElementById('message-body')
let mainBody = document.getElementById('main-body')

let mess=() =>{
	if(chatBody.className==="d-none d-md-block col-md-8 border-left border-dark" && window.screen.width<=768){
		chatBody.className="col-md-8"
		mainBody.className="d-none"

	}else{
		chatBody.className="d-none d-md-block col-md-8 border-left border-dark"
		mainBody.className="col-md-4 p-0"
	}
}

let symb=() =>{
	if(mainBody.className==="d-none"){
		chatBody.className="d-none d-md-block col-md-8 border-left border-dark"
		mainBody.className="col-md-4 p-0"

	}else{
		chatBody.className="d-none d-md-block col-md-8 border-left border-dark"
		mainBody.className="col-md-4 p-0"
	}
}

$('#myModal').modal()