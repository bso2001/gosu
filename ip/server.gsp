uses bsolib.ipInterface

var port : Integer = 1717
var line : String 

var ip = new ipInterface( null, port );

while ( true )
{ 
	line = ip.rcv()
	if ( line == null )
		break

	ip.send( line )

	if ( line == "disconnect" )
		break
} 

ip.close()

System.exit( 0 );
