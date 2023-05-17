
function loadChars() {
	const images = [
		"./images/char.jpeg",
        "./images/char1.jpeg",
        "./images/char2.jpeg",
        "./images/char3.jpeg",
        "./images/char4.jpeg",
        "./images/char5.jpeg",
        "./images/char6.jpeg",
        "./images/char7.jpeg",
        "./images/char8.jpeg",
        "./images/char9.jpeg"
	];
	let i = 0;

	const displaybtn = document.querySelector("button");
	let mainContainer = document.getElementById("mainContainer");

	displaybtn.addEventListener("click", getChars => {
        
		fetch("https://swapi.dev/api/people")
			.then(res => res.json())
			.then(data => {
				mainContainer.innerHTML = data.results.map(e => {
					i++;
					let figs = `<figure >
				                <img src= ${images[i - 1]} alt= "Character" >
                                <figcaption class="x names">NAME : ${e.name}
				                <figcaption class = "hideT">GENDER : ${e.gender}</figcaption>
                                <figcaption class = "hideT">HEIGTH : ${e.height}</figcaption>
                                </figcaption>
				            </figure>`;
					return figs;
				});
                    const chars = document.querySelectorAll(".x");

                    for (let i = 0; i < chars.length; i++) {
                    chars[i].addEventListener("click", e => {
                        const children = e.target.children;
                        for (let j = 0; j < children.length; j++) {
                        children[j].classList.toggle("hideT");
                        }
                    });
                    }
			});
    });
    
	displaybtn.addEventListener("click", vanish => {
		mainContainer.classList.toggle("hide");	
    });
}
loadChars();

