import { Component } from '@angular/core';
import * as io from "socket.io-client";


@Component({
  selector: 'my-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.scss']
})
export class ChatComponent {

//   constructor( private chatService: ChatService ) { }
  constructor(  ) { }

  ngOnInit() {
    let socket = io('/chat');

    // console.log($);

    // console.log(io);

    $('#send-message-btn').on('click', function () {
      let msg = $('#message-box').val();
      socket.emit('chat', msg);
      $('#messages').append( $('<p>').text(msg) );
      msg.val('');
      return false;
    });

    socket.on('chat', function (msg) {
      if (typeof msg === 'string') {
          $('#messages').append($('<p>').text(msg));
      } else {
        msg.reverse();
        for(let el of msg){
            $('#messages').append($('<p>').text(el.content));
        }
      }
    });

  }

}
