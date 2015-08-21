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


	this.initScrollFire = function() {
		this.renameULs();
		this.options.push({
			selector: '.parallax', 
			offset: 200, 
			callback: 'toggleInternHacksHoverText()'
		});
    	Materialize.scrollFire(this.options);
	};

};

