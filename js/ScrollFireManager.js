function ScrollFireManager() {
	var _self = this;
	this.options = [];
	
	this.renameULs = function() {
		var experienceULClassName = "experience-ul";

		$("." + experienceULClassName).each(function(index) {
    		var indexedClassName = experienceULClassName + index;
    		$(this).addClass(indexedClassName).removeClass(experienceULClassName);
    		_self.addStaggeredListScrollFireOptionBySelector("." + indexedClassName);
		});

	};

	this.addStaggeredListScrollFireOptionBySelector = function(selector) {
		var option = {
			selector: selector,
			offset: 100,
			callback: 'Materialize.showStaggeredList("' + selector + '")'
		};
		this.options.push(option);
	}

	this.addParallaxScrollFireOptions = function() {
		this.options.push({
			selector: '#lastButtonInWorkivaLangs', 
			offset: 0, 
			callback: 'toggleHoverTextBySelector(".parallax-googlejump")'
		});
		this.options.push({
			selector: '.parallax-internhacks', 
			offset: 0, 
			callback: 'toggleHoverTextBySelector(".parallax-internhacks")'
		});
	};


	this.initScrollFire = function() {
		this.renameULs();
		this.addParallaxScrollFireOptions();
    	Materialize.scrollFire(this.options);
	};

};

