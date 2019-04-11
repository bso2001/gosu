uses bsolib.ipInterface

var host : String = "127.0.0.1"
var port : Integer = 1717

var inputLine  : String 
var outputLine : String 

var ip = new ipInterface( host, port )

while ( true )
{
	inputLine = System.console().readLine()
	if ( inputLine == null )
		break

	ip.send( inputLine )

	if ( inputLine == "disconnect" )
		break

	inputLine = ip.rcv()
	if ( inputLine == null )
		break

	print( "Received: " + inputLine )
}

ip.close()

System.exit( 0 )
