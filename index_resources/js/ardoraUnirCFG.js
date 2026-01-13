//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=0;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#C0C0C0"; colorButton="#FF8000"; colorText="#000000"; colorSele="#000080";colorLeave="#000000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades!!!"; messageTime="Culminó el tiempo"; messageError="Lo siento!!!"; messageErrorG="Lo siento!!!"; messageAttempts="Limite de tiempo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["Q3JlYXRpdmlkYWQ=", "Q2FwYWNpZGFkIGRlIGdlbmVyYXIgaWRlYXM="],["Umllc2dv", "UG9zaWJpbGlkYWQgZGUgcMOpcmRpZGEgbyBnYW5hbmNpYQ=="],["SW5ub3ZhY2nDs24=", "TWVqb3JhIGRlIHVuIHByb2R1Y3Rv"],["TGlkZXJhemdv", "Q2FwYWNpZGVhZCBkZSBndWlhciB1biBlcXVpcG8="],["RW1wcmVuZGVkb3I=", "UGVyc29uYSBxdWUgY3JlYSB1bmEgaWRlYSBkZSBuZWdvY2lv"]];
var c=[[11,26],[6,33],[10,21],[9,29],[11,36]];
var con1=["Creatividad","Riesgo","Innovación","Liderazgo","Emprendedor"];
var con2=["Capacidad de generar ideas","Posibilidad de pérdida o ganancia","Mejora de un producto","Capacidead de guiar un equipo","Persona que crea una idea de negocio"];
var sel1=""; join1=[]; join2=[];
