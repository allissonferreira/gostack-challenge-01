# goStack Challenge #1 by Allisson Ferreira Santos

## Installation
Use the following commands in your terminal (assuming that you already have `node` and `npm` installed) in order to test:
- `npm install` or `yarn install`
- `node index.js`

## JSON Structure
The POST/PUT body structure is as follows:

**Projects:**
```json
{
	"id": (int),
	"title": (string)
}
```

**Tasks:**
```json
{
	"title": (string)
}
```

**Example of a project with values:**

```json
{
	"id": 1,
	"title": "Project A",
	"tasks": [
		"Task 1",
		"Task 2"
	]
}
```

## Endpoints

**Projects**

- List all projects:
`GET: /projects`

- Create a project:
`POST: /projects`

- Update a project:
`PUT: /projects/:id`

- Delete a project:
`DELETE: /projects/:id`

- Add a task to a project:
`POST: /projects/:id/tasks`