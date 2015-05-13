/**
 * Created by Mehul on 13-05-2015.
 */

var App = App || {};

App.plateau = {
    height:"",
    width:"",
    init:function(){
        var input=document.getElementById('instruct').value;
        if(input!=""){
            var splt=input.split(" ");
            this.height=parseInt(splt[0])*30;
            this.width=parseInt(splt[1])*30;
            this.show();
        }
    },
    show:function(){
        var input=document.getElementById('plateau');
        input.style.height=this.height+'px';
        input.style.width=this.width+'px';
        var label =document.getElementById('lblInstruct');
        label.innerHTML='Deploy rover and move';
        var button=document.getElementById('go');
        button.onclick=App.rover.init;
    }

};

App.rover = {
    bottom:"",
    left:"",
    deg:0,
    show:function(){
        var input=document.getElementById('rover');
        input.style.bottom=this.bottom+'px';
        input.style.left=this.left+'px';
        console.log(this.deg);
        input.style.transform="rotate("+this.deg+"deg)";
        input.style.visibility="visible";
        var label =document.getElementById('lblInstruct');
        label.innerHTML='Rover deployed you can only move now';
        var button=document.getElementById('go');
        //button.onclick=App.rover.move();
    },
    init:function(){
        var _this=App.rover;
        var input=document.getElementById('instruct').value;
        if(input!="") {
            var splt = input.split(" ");
            _this.left=parseInt(splt[0])*30;
            _this.bottom=parseInt(splt[1])*30;
            switch(splt[2]){
                case "E":
                    _this.deg=0;
                    break;
                case "W":
                    _this.deg=180;
                    break;
                case "N":
                    _this.deg=90;
                    break;
                case 'S':
                    break;
            }
        }
        _this.show();
    },
    move:function(){

    }

}