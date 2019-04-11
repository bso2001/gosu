package gtest;

class Talker
{
	var _message : String as Message;

	construct( msg : String )
	{
		_message = msg;
	}

	function talk()
	{
		print( _message );
	}
}
