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
			selector: '.parallax-internhacks', 
			offset: 200, 
			callback: 'toggleHoverTextBySelector(".parallax-internhacks")'
		});
		this.options.push({
			selector: '.parallax-googlejump', 
			offset: 200, 
			callback: 'toggleHoverTextBySelector(".parallax-googlejump")'
		});
	};


	this.initScrollFire = function() {
		this.renameULs();
		this.addParallaxScrollFireOptions();
    	Materialize.scrollFire(this.options);
	};

};

