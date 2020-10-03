'use strict';

class Portfolio {
	constructor() {
		this.loadingEl = document.querySelector('.loading');
		this.backgroundMusicEl = document.querySelector('.background-music');
		this.pagingSound = new Audio('https://raw.githubusercontent.com/rayc2045/raychang-space/master/audio/page.mp3');
		this.typingSound = new Audio('https://raw.githubusercontent.com/rayc2045/raychang-space/master/audio/type.mp3');
		this.containerEl = document.querySelector('.container');
		this.navEl = document.querySelector('nav');
		this.dateEl = document.querySelector('.date');
		this.mainEl = document.querySelector('main');
		this.buildingEl = document.querySelector('.building');
		this.circleYellowEl = document.querySelector('.circle-yellow');
		this.circleOrangeEl = document.querySelector('.circle-orange');
		this.articleLeftEl = document.querySelector('.article-left');
		this.articleRightEl = document.querySelector('.article-right');
		this.nameEl = document.querySelector('.name');
		this.worksEl = document.querySelector('.works');
		this.formEl = document.querySelector('form');
		this.inputEls = document.querySelectorAll('input');
		this.textareaEls = document.querySelectorAll('textarea');
		this.inputNameEl = document.querySelector('.input-name');
		this.inputEmailEl = document.querySelector('.input-email');
		this.inputSubjectEl = document.querySelector('.input-subject');
		this.titleMessageEl = document.querySelector('.title-message');
		this.textareaMessageEl = document.querySelector('.textarea-message');
		this.sendEl = document.querySelector('.send');
		this.sayHelloEl = document.querySelector('.say-hello');
		this.appreciationEl = document.querySelector('.appreciation');
		this.footerEl = document.querySelector('footer');
		this.works = [
			{
				title: 'Ray Chang Space',
				subtitle: '100% Responsive Portfolio Website',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/11317150/media/08465ea718d17273f4800b2f490e65e7.png',
				github: 'https://github.com/rayc2045/raychang-space',
				destination: 'https://rayc2045.github.io/raychang-space/'
			},
			{
				title: 'Horizontal Scrolling Theater',
				subtitle: 'Make purchasing more comfortable',
				cover:'https://cdn.dribbble.com/users/3800131/screenshots/11028118/media/8ba2db964d4f882bd59e50050cb09c46.png',
				github:'https://github.com/rayc2045/f2e-portfolio/tree/master/13%20-%20%E7%94%A8%20Vue%20%E5%92%8C%20API%20%E5%81%9A%E4%B8%80%E5%80%8B%E6%A9%AB%E5%90%91%E6%8D%B2%E5%8B%95%E9%9B%BB%E5%BD%B1%E8%B3%BC%E7%89%A9%E9%A0%81%E9%9D%A2',
				destination: 'https://rayc2045.github.io/horizontal-scrolling-theater/'
			},
			{
				title: 'Linktree Clone',
				subtitle: 'Resizable link-sharing page',
				cover:'https://cdn.dribbble.com/users/3800131/screenshots/10724954/media/529252d97de31baf1548bd817ad6bc1a.png',
				github:'https://github.com/rayc2045/f2e-portfolio/tree/master/12%20-%20%E5%81%9A%E4%B8%80%E5%80%8B%E7%B2%BE%E7%BE%8E%E7%89%88%E6%9C%AC%E7%9A%84%20Linktree%20Clone%20%E2%80%94%20%E8%AA%B0%E8%AA%AA%20Instagram%20bio%20%E5%8F%AA%E8%83%BD%E6%94%BE%E4%B8%80%E5%80%8B%E7%B6%B2%E5%9D%80',
				destination: 'https://rayc2045.github.io/linktree-clone/'
			},
			{
				title: 'Coffee Menu Editor',
				subtitle: 'Editing ingredients is no longer difficult',
				cover:'https://cdn.dribbble.com/users/3800131/screenshots/7101781/media/cbab08496ca35c2f443aa01bbd0d4d31.png',
				github:'https://github.com/rayc2045/f2e-portfolio/tree/master/10%20-%20Menu%20%E5%AE%A2%E8%A3%BD%E5%8C%96%E4%B8%8D%E9%BA%BB%E7%85%A9%EF%BC%8C%E7%94%A8%20Vue%20%E5%81%9A%E4%B8%80%E5%80%8B%E5%92%96%E5%95%A1%E8%8F%9C%E5%96%AE%E7%B7%A8%E8%BC%AF%E5%99%A8',
				destination: 'https://codepen.io/rayc2045/full/MWgOMEL'
			},
			{
				title: 'JS Block Memory Game',
				subtitle: 'How many levels can you accomplish?',
				cover:'https://cdn.dribbble.com/users/3800131/screenshots/10000193/media/5a5acc6684a86a5f46a9b4cd34f4df8e.gif',
				github:'https://github.com/rayc2045/f2e-portfolio/tree/master/09%20-%20%E6%96%B9%E5%A1%8A%E8%A8%98%E6%86%B6%E9%81%8A%E6%88%B2%20%E2%80%93%20%E4%BD%A0%E8%83%BD%E7%8E%A9%E5%88%B0%E7%AC%AC%E5%B9%BE%E9%97%9C%EF%BC%9F',
				destination: 'https://codepen.io/rayc2045/full/eYNmMZe'
			},
			{
				title: 'Elegant Vanilla JS Calculator',
				subtitle: 'Why not shows the result immediately?',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6901484/_____2019-08-02___4.01.34.png',
				github:'https://github.com/rayc2045/f2e-portfolio/tree/master/08%20-%20%E5%81%9A%E4%B8%80%E5%80%8B%E5%84%AA%E9%9B%85%E7%9A%84%20Vanilla%20JS%20%E8%A8%88%E7%AE%97%E6%A9%9F%EF%BC%8C%E5%8D%B3%E6%99%82%E9%A1%AF%E7%A4%BA%E8%A8%88%E7%AE%97%E7%B5%90%E6%9E%9C',
				destination: 'https://rayc2045.github.io/elegant-vanilla-js-calculator/'
			},
			{
				title: 'JavaScript Click Game',
				subtitle: 'How many scores can you get?',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6827214/_____2019-07-21___5.25.09.png',
				github:'https://github.com/rayc2045/f2e-portfolio/tree/master/07%20-%20JavaScript%20%E6%A8%99%E9%9D%B6%E9%81%8A%E6%88%B2%20%E2%80%93%20%E6%BB%91%E9%BC%A0%E4%BD%A0%E4%B8%80%E5%88%86%E9%90%98%E8%83%BD%E6%8C%89%E5%B9%BE%E4%B8%8B%EF%BC%9F',
				destination: 'https://codepen.io/rayc2045/full/EqjXJN'
			},
			{
				title: 'Smoothly Draggable To-do List',
				subtitle: 'And automatically saving in LocalStorage',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6757018/_____2019-07-09___11.03.44.png',
				github:'https://github.com/rayc2045/f2e-portfolio/tree/master/06%20-%20%E5%8F%AF%E6%8B%96%E6%8B%89%E4%BB%BB%E5%8B%99%E7%9A%84%20LocalStorage%20%E5%BE%85%E8%BE%A6%E4%BA%8B%E9%A0%85%E6%B8%85%E5%96%AE',
				destination: 'https://rayc2045.github.io/draggable-localStorage-todoList/'
			},
			{
				title: 'Day/Night Transition Postcard',
				subtitle: 'Absolutely the modern way to share story',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6754986/_____2019-07-05___2.28.36.gif',
				github:'https://github.com/rayc2045/f2e-portfolio/tree/master/05%20-%20%E5%AF%AB%E4%B8%80%E5%BC%B5%E5%8B%95%E6%85%8B%E6%98%8E%E4%BF%A1%E7%89%87%20%E2%80%93%20%E5%B8%8C%E8%87%98%E6%84%9B%E6%83%85%E6%B5%B7%20%E8%81%96%E6%89%98%E9%87%8C%E5%B0%BC%E5%B3%B6%E5%B0%8F%E7%99%BD%E6%88%BF',
				destination: 'https://codepen.io/rayc2045/full/EBGaZQ'
			},
			{
				title: 'Apple Magic Keyboard',
				subtitle: 'Made by pure codes of course',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6736810/_____2019-07-05___2.06.35.png',
				github:'https://github.com/rayc2045/f2e-portfolio/tree/master/03%20-%20%E4%BD%BF%E7%94%A8%20CSS%20Grid%20%E5%92%8C%20Flexbox%20%E6%89%8B%E5%88%BB%E4%B8%80%E5%80%8B%20Mac%20%E9%8D%B5%E7%9B%A4',
				destination: 'https://codepen.io/rayc2045/full/ZdVzmZ'
			},
			{
				title: 'Interactive Chocolate Cake',
				subtitle: 'Animate anytime when you touch it',
				cover: 'https://cdn.dribbble.com/users/3800131/screenshots/6736602/_____2019-07-05___1.51.04.gif',
				github:'https://github.com/rayc2045/f2e-portfolio/tree/master/01%20-%20%E7%94%A8%E7%A8%8B%E5%BC%8F%E7%83%98%E7%84%99%E7%9A%84%20%E3%84%89%E3%84%A8%E3%84%9E%20%E3%84%A7%E3%84%A0%20%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%9B%8B%E7%B3%95',
				destination: 'https://codepen.io/rayc2045/full/ZdmgMr'
			},
			{
				title: 'Medium Blog',
				subtitle: 'Read my latest technical article',
				cover: 'https://raw.githubusercontent.com/rayc2045/raychang-space/master/img/medium-logo-transparent.png',
				destination: 'https://medium.com/@raychangdesign/'
			}
		];
		// this.workEls = document.querySelectorAll('.work');
		this.isTouchDevice = false;
		this.isValidated = false;
		this.events();
	}

	events() {
		this.scrollDisable();
		// this.resizeForAddressBarWhenPortrait();

		document.onselectstart = () => {
			return false;
		};
		document.ondragstart = () => {
			return false;
		};
		document.oncontextmenu = () => {
			return false;
		};
		document.onclick = (e) => {
			if (e.target.hasAttribute('href')) this.soundPlay(this.pagingSound);
		};
		document.onmousemove = (e) => {
			this.detectTouchDevice();
			if (!this.isTouchDevice) this.antiMouseMove(e, this.nameEl, 80);
		};
		document.onscroll = () => {
			this.toggleElOverflow(this.mainEl);
		};

		this.parallax();
		this.updateDate();
		this.updateWorks();
		this.activateTouchDeviceHoverInteraction(this.worksEl, this.footerEl);
		this.formEl.onkeydown = () => this.soundPlay(this.typingSound);
		this.textareaEls.forEach((el) => {
			el.oninput = (e) => this.autoExpandTextArea(e);
			el.onkeyup = (e) => this.autoExpandTextArea(e);
			el.oncut = (e) => this.autoExpandTextArea(e);
			el.onpaste = (e) => this.autoExpandTextArea(e);
			el.onchange = (e) => this.autoExpandTextArea(e);
		});
		this.sendEl.onclick = () => this.submitForm();

		// All HTML elements load finished
		window.onload = () => {
			this.hideLoadingPage();
			this.scrollEnable();
			this.backgroundMusicEl.play();
		};
		// window.addEventListener('mousewheel', (e) => {
		// 	e.preventDefault();
		// 	this.smoothVerticalScroll(document.documentElement, 1000, 200);
		// }, {passive: false});
		window.onblur = () => this.backgroundMusicEl.pause();
		window.onfocus = () => this.backgroundMusicEl.play();
	}

	soundPlay(audio) {
		audio.currentTime = 0;
		audio.play();
	}

	scrollToTop() {
		window.scrollTo(0, 0);
	}

	scrollDisable() {
		document.documentElement.style.overflow = 'hidden';
		// document.documentElement.style.marginRight = m + "px";
		// document.documentElement.style.paddingRight = m + "px";
	}

	scrollEnable() {
		document.documentElement.style.overflow = 'visible';
		// document.documentElement.style.marginRight = "0px";
		// document.documentElement.style.paddingRight = "0px";
	}

	parallax() {
		this.parallaxElementSet(this.circleYellowEl, '-3');
		this.parallaxElementSet(this.circleOrangeEl, '-6');
		this.parallaxElementSet(this.articleLeftEl, '-1.5');
		this.parallaxElementSet(this.articleRightEl, '-1.5');

		let rellax = new Rellax('.rellax');
	}

	parallaxElementSet(el, rellaxSpeed) {
		el.classList.add('rellax');
		el.setAttribute('data-rellax-speed', rellaxSpeed);
	}

	toggleElOverflow(el) {
		// const documentElPositionTop = document.documentElement.scrollTop; // body scroll position
		const elPositionTop = el.getBoundingClientRect().top;
		const elHeight = el.getBoundingClientRect().height / 2;
		// console.log(elPositionTop + elHeight/2);

		if (elPositionTop + elHeight/100 < 0) {
			el.style.overflow = 'hidden';
			// console.log('hidden');
		} else {
			el.style.overflow = 'visible';
			// console.log('visible');
		}
	}

	// resizeForAddressBarWhenPortrait() {
	// 	// Portrait
	// 	if (window.innerHeight > window.innerWidth) {
	// 		const addressBarHeight = window.outerHeight - window.innerHeight;
	// 		console.log(addressBarHeight);
			
	// 		this.containerEl.style.width = window.innerHeight;
	// 		this.containerEl.style.marginTop = addressBarHeight;
	// 	}
	// }

	hideLoadingPage() {
		this.loadingEl.classList.add('animated');

		setTimeout(() => {
			this.loadingEl.classList.add('hide');
			// this.loadingEl.remove();
		}, 2000)
	}
	
	updateDate() {
		const today = new Date();
		const date = `${this.convertNumToMonth(today.getMonth() + 1)} ${today.getDate()}, ${today.getFullYear()}`;

		this.dateEl.textContent = date;
	}

	convertNumToMonth(num) {
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 
		'July', 'August', 'September', 'October', 'November', 'December'];

		return months[num - 1];
	}

	antiMouseMove(e, el, max=20) {
		const x = e.clientX;
    const y = e.clientY;
    //console.log(x);
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    const halfWidth = winWidth / 2;
    const halfHeight = winHeight / 2;
    const rx = x - halfWidth;
    const ry = y - halfHeight;

		const dx = (el.getBoundingClientRect().width / max) * (rx / -halfWidth);
		const dy = (el.getBoundingClientRect().height / max) * (ry / -halfHeight);
		
		el.style['transform'] = el.style['-webkit-transform'] = `translate(${dx}px, ${dy}px)`;
	}

	updateWorks() {
		for (let i = 0; i < this.works.length; i++) {
			const listEl = document.createElement('li');

			listEl.classList.add('work');
			listEl.innerHTML = `
				<a href="${this.works[i].destination}" target="_blank" rel="noreferrer noopener">
          <img src="${this.works[i].cover}" alt="${this.works[i].title}" loading="lazy">
        </a>
        <section>
          <div class="number">${this.addZeroToNumberUnderTen(this.works.length - i)}</div>
          <div class="title">${this.works[i].title}</div>
          <div class="subtitle">${this.works[i].subtitle}${this.works[i].github ? ` (<a class="link-github" href="${this.works[i].github}" target="_blank" rel="noreferrer noopener">info</a>)` : ''}</div>
        </section>`;

			this.worksEl.appendChild(listEl);
		}
	}

	addZeroToNumberUnderTen(num) {
		return num < 10 ? '0' + num : '' + num;
	}

	activateTouchDeviceHoverInteraction(...els) {
		this.detectTouchDevice();

		if (!this.isTouchDevice) {
			els.forEach((el) => {
				el.classList.add('hover-interaction');
			})
		}
	}

	detectTouchDevice() {
		return ("ontouchstart" in document.documentElement) ? this.isTouchDevice = true : this.isTouchDevice = false;
	}

	autoExpandTextArea(e){
		// console.log(e.target.scrollHeight);
		const offset = e.target.offsetHeight - e.target.clientHeight;

		e.target.style.height = 'auto';
		e.target.style.height = e.target.scrollHeight + offset + 'px';
	}

	submitForm() {
		this.isValidated = true;
		this.checkForm();
		if (!this.isValidated) return false;

		const receiver = 'rayc2045@gmail.com';

		location.href = `mailto:${receiver}?subject=${this.inputSubjectEl.value}&body=${this.textareaMessageEl.value}`; // 製作網頁表單：https://medium.com/@AntheaLee/%E5%A6%82%E4%BD%95%E8%A3%BD%E4%BD%9C-%E8%81%AF%E7%B5%A1%E6%88%91%E5%80%91-%E7%B6%B2%E9%A0%81%E8%A1%A8%E5%96%AE-3df78756ec81

		this.emptyForm();
		this.sayHelloEl.classList.add('hide');
		this.appreciationEl.classList.remove('hide');
	}

	checkForm() {
		// Check empty
		if (!this.inputNameEl.value.trim()) {
			this.alertAnimate(this.inputNameEl.parentNode);
			this.isValidated = false;
		}
		if (!this.inputEmailEl.value.trim()) {
			this.alertAnimate(this.inputEmailEl.parentNode);
			this.isValidated = false;
		}
		if (!this.inputSubjectEl.value.trim()) {
			this.alertAnimate(this.inputSubjectEl.parentNode);
			this.isValidated = false;
		}
		if (!this.textareaMessageEl.value.trim()) {
			this.alertAnimate(this.titleMessageEl);
			this.alertAnimate(this.textareaMessageEl.parentNode);
			this.isValidated = false;
		}

		// Check email format
		const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!this.inputEmailEl.value.trim().match(emailFormat)) {
			this.alertAnimate(this.inputEmailEl.parentNode);
			this.isValidated = false;
		}
	}

	alertAnimate(el) {
		if (el.classList.contains('alert')) return;

		el.classList.add('alert');

		setTimeout(() => {
			el.classList.remove('alert');
		}, 1000)
	}

	emptyForm() {
		this.inputEls.forEach((el) => {
			el.value = '';
		})

		this.textareaEls.forEach((el) => {
			el.value = '';
		})
	}
}

let portfolio = new Portfolio();