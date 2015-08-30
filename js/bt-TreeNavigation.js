( function() {
		'use strict';

		/**
		 *
		 * Arbol de enlaces
		 *
		 * Tiene dos representaciones
		 * segun su posicion en el layoud
		 * 	drawer
		 *  content
		 *
		 * Dos formas de funcionar:
		 *
		 * 	STANDARD
		 * 		Ultimo nodo es enlace.
		 * 		Los superiores son para plegar/desplegar
		 *
		 * 	TREE_BUTTONS
		 * 		Todos los niveles son enlaces
		 * 		Hay botones en la izquierda para plegar/desplegar
		 *
		 * Los tag a (enlaces) tienen el atributo:
		 * 	data-id="" con el id del nivel
		 * 	class="n-*" Nivel de anidacion
		 *
		 * @param {Object} element
		 */
		function TreeNavigation(element) {
			this.element_ = element;
			this.init();
		}


		TreeNavigation.prototype.CssClasses_ = {
			TREE_BUTTONS : 'bt-tree-buttons',
			HIDDEN : 'hidden',
			LEVEL_N1 : 'l-1',
			LEVEL_N2 : 'l-2',
			LEVEL_N3 : 'l-3'
		};

		TreeNavigation.prototype.Icons_ = {
			ARROW_DOWN : 'keyboard_arrow_down',
			ARROW_UP : 'keyboard_arrow_right'
		};

		TreeNavigation.prototype.Modes_ = {
			STANDARD : 0,
			TREE_BUTTONS : 1
		};

		/**
		 * Enlaza eventos segun modo
		 */
		TreeNavigation.prototype.init = function() {
			if (this.element_) {
				var nodes,
				    size;
				if (this.element_.classList.contains(this.CssClasses_.TREE_BUTTONS)) {
					this.mode = this.Modes_.TREE_BUTTONS;
					this.boundClickHandler = this.clickHandlerTreeButtons.bind(this);

					// eventos click a iconos
					this.boundCollapseHandler = this.CollapseHandler.bind(this);
					nodes = this.element_.querySelectorAll('i');
					size = nodes.length;
					for (var x = 0; x < size; x++) {
						nodes[x].addEventListener('click', this.boundCollapseHandler);
					}
				} else {
					this.mode = this.Modes_.STANDARD;
					this.boundClickHandler = this.clickHandlerStandard.bind(this);
				}

				// eventos click a enlaces
				nodes = this.element_.querySelectorAll('a');
				size = nodes.length;
				for (var x = 0; x < size; x++) {
					nodes[x].addEventListener('click', this.boundClickHandler);
				}
			}
		};

		TreeNavigation.prototype.mdlDowngrade_ = function() {
			if (this.element_) {
				var nodes,
				    size;

				nodes = this.element_.querySelectorAll('a');
				size = nodes.length;
				for (var x = 0; x < size; x++) {
					nodes[x].removeEventListener('click', this.boundClickHandler);
				}

				if (this.mode == this.Modes_.TREE_BUTTONS) {
					nodes = this.element_.querySelectorAll('i');
					size = nodes.length;
					for (var x = 0; x < size; x++) {
						nodes[x].removeEventListener('click', this.boundCollapseHandler);
					}
				}
			}
		};

		/**
		 * modo TREE_BUTTONS
		 *
		 * botones para plegar/desplegar
		 *
		 * @param {Object} event
		 */
		TreeNavigation.prototype.CollapseHandler = function(event) {
			event.preventDefault();
			event.stopPropagation();

			var target = event.target;
			var list = target.parentNode.nextElementSibling;

			if (list) {
				this.Toggle(list, target);
			}
		};

		/**
		 * modo TREE_BUTTONS
		 *
		 * Todos los niveles son eventos
		 *
		 * @param {Object} event
		 */
		TreeNavigation.prototype.clickHandlerTreeButtons = function(event) {
			event.preventDefault();
			event.stopPropagation();

			var target = event.target;
			this.TriggerEvent(target);
		};

		/**
		 * modo STANDARD
		 *
		 * niveles superiores para plegar/desplegar
		 * ultimo nivel eventos enlace
		 *
		 * @param {Object} event
		 */
		TreeNavigation.prototype.clickHandlerStandard = function(event) {
			event.preventDefault();
			event.stopPropagation();

			//Busca en node enlace
			var target = event.target;
			if (target.tagName != 'A') {
				target = target.parentNode;
			}

			//Selecciona el siguiente nodo hermano
			var list = target.nextElementSibling;

			if (list) {
				this.Toggle(list, target.firstChild);
			} else {
				//Ultimo nodo es enlace
				this.TriggerEvent(target);
			}
		};

		TreeNavigation.prototype.Toggle = function(node, icon) {
			if (node.classList.contains(this.CssClasses_.HIDDEN)) {
				node.classList.remove(this.CssClasses_.HIDDEN);
				icon.innerText = this.Icons_.ARROW_DOWN;
			} else {
				node.classList.add(this.CssClasses_.HIDDEN);
				icon.innerText = this.Icons_.ARROW_UP;
			}
		};

		TreeNavigation.prototype.TriggerEvent = function(target) {
			var level;
			var size = target.classList.length;
			for (var i = 0; i < size; i++) {
				var c = target.classList[i];
				if (c.indexOf('l-') == 0) {
					level = c.split('-')[1];
					break;
				}
			}

			var event = new CustomEvent('ClickTree', {
				'detail' : {
					'sender' : this.element_.id,
					'level' : level,
					'id' : target.dataset.id,
					'text' : target.childElementCount == 0 ? target.text : target.childNodes[1].nodeValue
				}
			});
			document.dispatchEvent(event);
		};

		componentHandler.register({
			constructor : TreeNavigation,
			classAsString : 'TreeNavigation',
			cssClass : 'bt-js-tree'
		});
	}());
