const newsList = document.querySelector('#newsList');

const updateNewsList = async fun => {
	console.log(fun);
	let data = await fun();
	data.forEach(item => {
		console.log(item);
		newsList.innerHTML += `
		<div class="col mb-4">
				<div class="card" id="module">
					<img src="${item.urlToImage}" class="card-img-top" alt="" />
					<div class="card-body">
						<h5 class="card-title">${item.title}</h5>
						<p class="card-text">
							${item.description}
						</p>
						<small class="card-text">${item.source.name},  ${item.publishedAt} </small>
					</div>
					<a href="${item.url}" class="blog-post-cta">Read more</a>
				</div>
			</div>
		`;
	});
};

async function getNewsData() {
	const base = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4e886e545fbd4e9aa080458903f07645`;
	//const key = '4e886e545fbd4e9aa080458903f07645';
	const response = await fetch(base);
	const data = await response.json();
	console.log(data.articles);
	return data.articles;
}

newsList.addEventListener('load', updateNewsList(getNewsData));
