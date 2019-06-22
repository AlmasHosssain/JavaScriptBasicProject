
const color = ['red','green','blue','yellow','white'];

const git = document.querySelector('.btn');
git.addEventListener('click',()=>{
	const random = Math.floor(Math.random() * color.length);
	const kip = document.body;
	kip.style.backgroundColor = color[random];
})






//Random Background Color Generator
const boss = (()=>{
	const $ = (container) =>{
	return document.querySelector(container);
}
	const kip = $('.btn');
	const kip2 = $('.git');

	kip.addEventListener('click',()=>{
		const ar = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

		let kop = '#';

		for(let i = 0; i< 6 ; i++){
			let as = Math.floor(Math.random()* ar.length);
			kop += ar[as];
		}

		const vb = document.body;
		vb.style.backgroundColor = kop;

		kip2.textContent = kop;	
	})

})();
//End Random Background Color Generator




// <!-- Random Quata Generator -->

// 	const boss = (()=>{

		let $ = (container) =>{
			return document.querySelector(container);
		}
		let quota = [];

		class qkt{
			constructor(quta,author){
				this.quta = quta;
				this.author = author;
			}
		}

		let kip =(quta,author)=>{
			const obj = new qkt(quta,author);
			quota.push(obj);
		}

		let anotherCall = ()=>{
			kip("Lorem Ipsum is simply dummy text of the printing and typesetting Almas industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Almas");
			kip("Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Hossain");
			kip(" Atriu simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply Siddika dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Antar");
		}

		anotherCall();
		
		let bj = $('.btn');
		bj.addEventListener('click',()=>{

			let dj = $('.quota');
			let oj = $('.author');
			let random = Math.floor(Math.random()*quota.length);
			dj.textContent = quota[random].quta;
			oj.textContent = quota[random].author;
		})
	})();

// <!-- End of Random Quata Generator -->



// <!-- Message Passing System -->

	const boss = (() =>{

		let $ = (container) =>{
			return document.querySelector(container);
		}

		const kip = $('#message-form');
		// console.log(kip);

		kip.addEventListener('submit',(event)=>{
			event.preventDefault();

			const aj = $('#message');
			const value = aj.value;
			// console.log(value);

			let bj = $('.message-content');
			bj.textContent = value;
			aj.value = '';

			if(value === ''){
				const k = $('.feedback');
				k.classList.add('show');

				setTimeout(()=>{
					k.classList.remove('show');
				},2000);
			}

		})
	})();

// <!-- End of Message Passing System -->



//<!-- Counter -->

	const count = (()=>{
		let counterValue = 0;

		const $ = (container) =>{
			return document.querySelector(container);
		}

		const btnValue = document.querySelectorAll('.counterBtn');
		// console.log(btnValue);
		const countValue = $('#counter');

		btnValue.forEach((element)=>{
			element.addEventListener('click',(event)=>{
				if(event.target.classList.contains('prevBtn')){
					counterValue--;
					countValue.textContent = counterValue
				}

				else if(event.target.classList.contains('nextBtn')){
					counterValue++;
					countValue.textContent = counterValue
				}

				if(counterValue < 0){
					countValue.style.color = '#800000';
				}
				else if (counterValue>0){
					countValue.style.color = '#66ffff';
				}
			})
		})

	})();

//<!-- End Counter -->


//<!-- Image Slider -->
	const imj = (()=>{

		let arr = ["1","2","3","4","5","6","7"];

		

		let counterValue = 0;
		let $ = (container) =>{
			return document.querySelector(container);
		}

		const btnSelect = document.querySelectorAll('.btn');
		// console.log(btnSelect);
		btnSelect.forEach(doit=(btn)=>{
			btn.addEventListener('click',(event)=>{
				if(event.target.classList.contains("btn-left")){
					counterValue--;
					if(counterValue<0){
						counterValue = arr.length-1;
					}

					// console.log(counterValue);

					let jk = $('.img-container');
					jk.style.backgroundImage = `url('image/${arr[counterValue]}.jpg')`;
				}

				if(event.target.classList.contains("btn-right")){
					counterValue++;
					if(counterValue > arr.length-1){
						counterValue = 0;
					}
					// console.log(counterValue);

					let kk = $('.img-container');
					kk.style.backgroundImage = `url('image/${arr[counterValue]}.jpg')`;
				}
			})
		})


	})();
//<!-- End of Image Slider -->


// <!-- Testimonial -->

	const testimonial = (()=>{

		let $ = (container) =>{
			return document.querySelector(container);
		}


		let count = 0;
		let contentArray = [];

		class test{
			constructor(name,image,text){
				this.name = name;
				this.image = image;
				this.text = text;
			}
		}

		let firstFunction = (name,image,text) =>{
			let pic = `image/${image}.jpg`;

			const obj = new test(name,pic,text);
			contentArray.push(obj);
		}

		let lastCall = () =>{
			firstFunction('VC',61,`Lorem Ipsum is simply dummy text
			 of the printing and typesetting industry.
			  Lorem Ipsum has been the industrys 
			  standard dummy text ever since the1500when
			   an unknown printer took a galley of type and scrambled`);

			firstFunction('DIN',63,`It has survived not only five centuries,
			 but also the leap into electronic typesetting, 
			 remaining essentially unchanged. It was popularised in
			  the 1960s with the release
			 of Letraset sheets containing Lorem Ipsum passages`);

			firstFunction('Chairman',64,`It is a long established fact
			 that a reader will be distracted by the readable content
			  of a page when looking at its layout. The point of using
			   Lorem Ipsum is that it has a more-or-less normal distribution
			    of letters, as opposed to using
			 'Content here, content here', making it look like readable English.`);

			firstFunction('Student',62,`Many desktop publishing packages
			 and web page editors now use Lorem Ipsum as their default
			  model text, and a search for 'lorem ipsum' will uncover 
			  many web sites still in their infancy.
			 Various versions have evolved over the years`);
		}

		lastCall();

		//console.log(contentArray);

		let btnCatcher = document.querySelectorAll('.btn');

		btnCatcher.forEach((element)=>{
			element.addEventListener('click',(event)=>{
				event.preventDefault();
				let value = event.target;
				console.log(value);
				if(value.parentElement.classList.contains("prevBtn")){
					if(count ===  0){
						count = contentArray.length;
					}
					count--;
					let kip = $('#customer-img');
					let kip2 = $('#customer-name');
					let kip3 = $('#customer-text');

					kip.src = contentArray[count].image;
					kip2.textContent = contentArray[count].name;
					kip3.textContent = contentArray[count].text;
				}

				if(value.parentElement.classList.contains("nextBtn")){
					if(count ===  (contentArray.length - 1) ){
						count = -1;
					}
					count++;
					let kip = $('#customer-img');
					let kip2 = $('#customer-name');
					let kip3 = $('#customer-text');

					kip.src = contentArray[count].image;
					kip2.textContent = contentArray[count].name;
					kip3.textContent = contentArray[count].text;
				}
			})
		})

	})();

// <!-- End of  Testimonial -->


//Ludu Maker

const kip = (()=>{
	let arr = [];

	class ludu{
		constructor(img){
			this.img = img;
		}
	}

	call = (img) =>{
		let fullimg = `image/${img}.jpg`;
		const obj = new ludu(fullimg);
		arr.push(obj);
	}

	letCall = () =>{
		let getValue = Math.floor(Math.random() * 7);
		call(getValue);
		console.log(arr);
	}
	letCall();
})();