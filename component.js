class Component {
	
	getParam(){
		const e = document.getElementById("param");
		return e.options[e.selectedIndex].value;
	}
	getModifier(){
		const e = document.getElementById("modifier");
		return e.options[e.selectedIndex].value;
	}
	getText(){
		const e = document.getElementById("text");
		return e.value;
	}
	getEvent(){
		const e = document.getElementById("event");
		return e.options[e.selectedIndex].value;
	}
	alertEvent(){
		alert("Alert event");
	}
	promptEvent(){
		prompt('Prompt event');
	}
	confirmEvent(){
		confirm('Confirm event')
	}

	render(){
		let style = '';
		const param = this.getParam();
		const mod = this.getModifier();
		const text = this.getText();
		const event = this.getEvent();

		if(param!=='select'){
			style += `background-color: ${param}; `;
		}
		if(mod==='border'){
			style += `border: 3px solid black; `;
		} else if(mod==='shadow'){
			style += `box-shadow: 10px 5px 5px black; `;
		} else if(mod==='radius'){
			style += `border-radius: 10px; `;
		}

		let result = document.getElementById('result');
		let code = document.getElementById('code');
		let resultButton = document.createElement("button");
		resultButton.innerHTML = text;
		resultButton.style.cssText = style;
		if(event==='alert'){
			resultButton.onclick = () => {this.alertEvent()}
		} else if(event==='prompt'){
			resultButton.onclick = () => {this.promptEvent()}
		} else if(event==='confirm'){
			resultButton.onclick = () => {this.confirmEvent()}
		}
		if(result.lastChild) result.removeChild(result.lastChild);
		result.appendChild(resultButton);
		code.value = `<button style=" ${style}"> ${text} </button>`;
	}
}

window.onload = () => {
	let renderButton = document.getElementById('render');

	let component = new Component();
	renderButton.onclick = () => 	{
		component.render();
	}
}

