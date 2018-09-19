(function () {
	'use strict';

	var byId = function (id) { return document.getElementById(id); },

		loadScripts = function (desc, callback) {
			var deps = [], key, idx = 0;

			for (key in desc) {
				deps.push(key);
			}

			(function _next() {
				var pid,
					name = deps[idx],
					script = document.createElement('script');

				script.type = 'text/javascript';
				script.src = desc[deps[idx]];

				pid = setInterval(function () {
					if (window[name]) {
						clearTimeout(pid);

						deps[idx++] = window[name];

						if (deps[idx]) {
							_next();
						} else {
							callback.apply(null, deps);
						}
					}
				}, 30);

				document.getElementsByTagName('head')[0].appendChild(script);
			})()
		},

		console = window.console;


	if (!console.log) {
		console.log = function () {
			alert([].join.apply(arguments, ' '));
		};
	}


	




	// Multi groups
	Sortable.create(byId('firstDragSlide'), {
		animation: 150,
		draggable: '.desk',
		handle: '.tile__name'
	});

	[].forEach.call(byId('firstDragSlide').getElementsByClassName('desk__iconList'), function (el){
		Sortable.create(el, {
			group: 'icons',
			animation: 200
		});
	});

	// Multi groups
	Sortable.create(byId('secondDragSlide'), {
		animation: 150,
		draggable: '.desk',
		handle: '.tile__name'
	});

	[].forEach.call(byId('secondDragSlide').getElementsByClassName('desk__iconList'), function (el){
		Sortable.create(el, {
			group: 'icons',
			animation: 200
		});
	});

	// Multi groups
	Sortable.create(byId('thirdDragSlide'), {
		animation: 150,
		draggable: '.desk',
		handle: '.tile__name'
	});

	[].forEach.call(byId('thirdDragSlide').getElementsByClassName('desk__iconList'), function (el){
		Sortable.create(el, {
			group: 'icons',
			animation: 200
		});
	});


	// Editable list
	var editableList = Sortable.create(byId('editable'), {
		animation: 150,
		filter: '.js-remove',
		onFilter: function (evt) {
			evt.item.parentNode.removeChild(evt.item);
		}
	});


	byId('addUser').onclick = function () {
		Ply.dialog('prompt', {
			title: 'Add',
			form: { name: 'name' }
		}).done(function (ui) {
			var el = document.createElement('li');
			el.innerHTML = ui.data.name + '<i class="js-remove">✖</i>';
			editableList.el.appendChild(el);
		});
	};


	// Advanced groups
	[{
		name: 'advanced',
		pull: true,
		put: true
	},
	{
		name: 'advanced',
		pull: 'clone',
		put: false
	}, {
		name: 'advanced',
		pull: false,
		put: true
	}].forEach(function (groupOpts, i) {
		Sortable.create(byId('advanced-' + (i + 1)), {
			sort: (i != 1),
			group: groupOpts,
			animation: 150
		});
	});


	// 'handle' option
	Sortable.create(byId('handle-1'), {
		handle: '.drag-handle',
		animation: 150
	});


	// Angular example
	angular.module('todoApp', ['ng-sortable'])
		.constant('ngSortableConfig', {onEnd: function() {
			console.log('default onEnd()');
		}})
		.controller('TodoController', ['$scope', function ($scope) {
			$scope.todos = [
				{text: 'learn angular', done: true},
				{text: 'build an angular app', done: false}
			];

			$scope.addTodo = function () {
				$scope.todos.push({text: $scope.todoText, done: false});
				$scope.todoText = '';
			};

			$scope.remaining = function () {
				var count = 0;
				angular.forEach($scope.todos, function (todo) {
					count += todo.done ? 0 : 1;
				});
				return count;
			};

			$scope.archive = function () {
				var oldTodos = $scope.todos;
				$scope.todos = [];
				angular.forEach(oldTodos, function (todo) {
					if (!todo.done) $scope.todos.push(todo);
				});
			};
		}])
		.controller('TodoControllerNext', ['$scope', function ($scope) {
			$scope.todos = [
				{text: 'learn Sortable', done: true},
				{text: 'use ng-sortable', done: false},
				{text: 'Enjoy', done: false}
			];

			$scope.remaining = function () {
				var count = 0;
				angular.forEach($scope.todos, function (todo) {
					count += todo.done ? 0 : 1;
				});
				return count;
			};

			$scope.sortableConfig = { group: 'todo', animation: 150 };
			'Start End Add Update Remove Sort'.split(' ').forEach(function (name) {
				$scope.sortableConfig['on' + name] = console.log.bind(console, name);
			});
		}]);
})();



// Background
document.addEventListener("DOMContentLoaded", function () {
	function setNoiseBackground(el, width, height, opacity) {
		var canvas = document.createElement("canvas");
		var context = canvas.getContext("2d");

		canvas.width = width;
		canvas.height = height;

		for (var i = 0; i < width; i++) {
			for (var j = 0; j < height; j++) {
				var val = Math.floor(Math.random() * 255);
				context.fillStyle = "rgba(" + val + "," + val + "," + val + "," + opacity + ")";
				context.fillRect(i, j, 1, 1);
			}
		}

		el.style.background = "url(" + canvas.toDataURL("image/png") + ")";
	}

	setNoiseBackground(document.getElementsByTagName('body')[0], 50, 50, 0.02);
}, false);
