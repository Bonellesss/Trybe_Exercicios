const express = require('express');
const { getAll, findById, isValid, create } = require('./models/Author');
const { getAllBooks, getByAuthorId, getById } = require('./models/Book');

const app = express();

app.use(express.json());

app.get('/authors', async (_req, res) => {
	const authors = await getAll();

	res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const author = await findById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.get('/books', async (_req, res) => {
	const books = await getAllBooks(); 

	res.status(200).json(books);
})

app.get('/books/search', async (req, res) => {
	const { id } = req.query;
	const books = await getByAuthorId(Number(id)); 

	res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
	const { id } = req.params;

	const books = await getById(id);

	if (!books) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(books);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});