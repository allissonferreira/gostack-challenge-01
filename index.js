const 	express = require( 'express' ),
		server = express( );

server.use( express.json( ) )

function checkIfProjectExists( req, res, next ) {
	const { id } = req.params
	const project = projects.find( ( p ) => p.id === id )

	if ( !project ) {
		return res.sendStatus( 400 ).json( { 'message': 'Project not found!' } )
	}

	next( )
}

const projects = [ ];

server.get( '/projects', ( req, res ) => {
	return res.json( projects )
} )

server.post( '/projects', ( req, res ) => {
	const { id, title } = req.body

	const projectIndex = projects.findIndex( ( p ) => p.id === id )

	if ( projectIndex >= 0 ) {
		return res.sendStatus( 400 )
	}

	const project = { id: id, title: title, tasks: [ ] }
	
	projects.push( project );

	return res.json( project )
} )

server.put( '/projects/:id', checkIfProjectExists, ( req, res ) => {
	const { id } = req.params
	const { title } = req.body

	const project = projects.find( ( p ) => p.id === id )

	project.title = title

	return res.json( project )
} )

server.delete( '/projects/:id', checkIfProjectExists, ( req, res ) => {
	const { id } = req.params

	const index = projects.findIndex( ( p ) => p.id === id )

	projects.splice( index, 1 )

	return res.sendStatus( 200 ).json( { 'message': 'Project deleted successfully!' } )
} )

server.post( '/projects/:id/tasks', checkIfProjectExists, ( req, res ) => {
	const { id } = req.params
	const { title } = req.body

	const project = projects.find( ( p ) => p.id === id )

	project.tasks.push( title )

	return res.json( project )
} )

server.listen( 3000 )