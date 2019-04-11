package bsolib

uses java.io.BufferedReader
uses java.io.InputStreamReader
uses java.io.IOException
uses java.io.PrintWriter
uses java.net.ServerSocket
uses java.net.Socket

class ipInterface
{
	private var _input  : BufferedReader
	private var _output : PrintWriter
	private var _socket : Socket = null

	construct( host : String, port : Integer )
	{
		if ( host == null )
		{
			var serverSocket : ServerSocket

			try
			{
				serverSocket = new ServerSocket( port )
			}
			catch( e : IOException )
			{
				print( e )
			}

			var clientSocket : Socket

			try
			{
				_socket = serverSocket.accept()
			}
			catch ( e : IOException )
			{
				print( e )
			}
		}
		else
		{
			try
			{
				_socket = new Socket( host, port )
			}
			catch ( e : IOException )
			{
				print( e )
			}

		}

		_input = new BufferedReader( new InputStreamReader( _socket.getInputStream() ) )
		_output = new PrintWriter( _socket.getOutputStream(), true )
	}

	function send( data : String )
	{
		if ( _socket != null )
			_output.println( data )
	}

	function rcv() : String
	{
		if ( _socket == null )
			return null

		return _input.readLine()
	}

	function close()
	{
		_input.close()
		_output.close()
	}
}
