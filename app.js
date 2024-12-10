const list = document.querySelector('div');

// Более простое и лаконичное решение

// fetch('https://jsonplaceholder.typicode.com/posts3')
// 	.then((res) => {
// 		return res.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 		data.forEach((post) => {
// 			list.insertAdjacentHTML(
// 				'beforeend',
// 				`<h3>Заголовок: ${post.title}</h3><p>Статья: ${post.body}</p>`
// 			);
// 		});
// 	})
// 	.catch((error) => {
// 		console.error('Ошибка загрузки постов:', error);
// 		list.textContent = 'Не удалось загрузить посты.';
// 	});

// Решение согласно заданию

function createPostHTML(post) {
	return `<h3>${post.id}. Заголовок: ${post.title}</h3><p>Статья: ${post.body}</p>`;
}
function addPost(container, html) {
	container.insertAdjacentHTML('beforeend', html);
}
function fetchAndDisplayPosts() {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			data.forEach((el) => {
				let post = createPostHTML(el);
				addPost(list, post);
			});
		})
		.catch((error) => {
			console.error('Ошибка загрузки постов:', error);
			list.textContent = 'Не удалось загрузить посты.';
		});
}

fetchAndDisplayPosts();
