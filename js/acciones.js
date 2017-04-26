// JavaScript Document

 $(document).ready(function (e){
	document.addEventListener ("deviceready",function(){
    $('#disp table td').eq(3).text(device.model);
    $('#disp table td').eq(5).text(device.cordova);
    $('#disp table td').eq(3).text(device.platform);
    $('#disp table td').eq(3).text(device.version);
    $('#disp table td').eq(3).text(device.uuid);
 document.addEventListener("pause",function(){
	 escribehistoria ('la app se pausó');
 },false);//pause
 document.add.EventListener("resume",function(){
	 escribehistoria ('la app se reinició');
 },false);//resume
 document.add.EventListener("online",function(){
 escribehistoria ('la app se conecto a la red');
 },false);//se conecto
 document.add.EventListener("offline",function(){
 escribehistoria ('la app se desconecto de la red');
 },false);//se desconecto 
 
 },false);//ready device
 
 });//document
 
 function escribehistoria(accion){
	 $('#eHistoria').append('<li>'+accion+'</li>');
 }
 